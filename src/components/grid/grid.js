import React, {useEffect, useRef, useState} from "react"
import Block from "../block/block";
import "./grid.css"

const Grid = () => {
    let rows = 20, cols = 20, initial = [];
    for (let i = 0; i < rows; i++) {
        initial.push([]);
        for (let k = 0; k < cols; k++) {
            initial[i].push(1)
        }
    }
    const randomPos = () => {
        return {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };
    }

    const [row, setRow] = useState(initial);
    const [snake, setSnake] = useState([{x: 0, y: 0}, {x: 1, y: 0}]);
    const [direction, setDirection] = useState('right');
    const [food, setFood] = useState(randomPos);


    const collision = (pos) => {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === pos.x && snake[i].y === pos.y) {
                return true
            }
        }
        return false
    }

    const changeDir = (e) => {
        let key = e.keyCode;
        switch (key) {
            case 37:
                setDirection('left');
                break;
            case 38:
                setDirection('top');
                break;
            case 39:
                setDirection('right');
                break;
            case 40:
                setDirection('bottom');
                break;
            default:
                break;
        }
    }
    document.addEventListener("keydown", changeDir);

    const displaySnake = () => {
        const newRows = initial;
        snake.forEach(cell => {
            newRows[cell.x][cell.y] = 0;
        })
        newRows[food.x][food.y] = 2;
        setRow(newRows);
    }

    const moveSnake = () => {
        const newSnake = [];
        let pos;
        switch (direction) {
            case 'right':
                pos = {x: snake[0].x, y: (snake[0].y + 1) % rows}
                break;
            case 'left':
                pos = {x: snake[0].x, y: (snake[0].y - 1 + rows) % rows}
                break;
            case 'top':
                pos = {x: (snake[0].x - 1 + cols) % cols, y: snake[0].y}
                break;
            case 'bottom':
                pos = {x: (snake[0].x + 1) % cols, y: snake[0].y}
                break;
            default:
                break;
        }
        newSnake.push(pos)
        if (collision(pos)) {
            alert("Game over")
            setSnake([{x: 0, y: 0}, {x: 1, y: 0}])
            return
        }
        snake.forEach(cell => {
            newSnake.push(cell);
        })
        if (snake[0].x === food.x && snake[0].y === food.y) {
            let pos = randomPos()
            while (collision(pos)) {
                pos = randomPos()
            }
            setFood(pos);
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
        displaySnake();
    }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(moveSnake, 200);

    const displayRows = row.map(row =>
        <li>
            {row.map(e => {
                return <Block col={e}/>
            })
            }
        </li>
    );

    return (
        <div className='grid'>
            <ul>
                {displayRows}
            </ul>
        </div>
    )


}
export default Grid;