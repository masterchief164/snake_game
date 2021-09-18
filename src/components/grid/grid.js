import React, {useEffect, useRef, useState} from "react"
import Block from "../block/block";
import "./grid.css"

const Grid = ({newScore}) => {
    let rows = 20, cols = 20, initial = [];
    for (let i = 0; i < rows; i++) {
        initial.push([]);
        for (let k = 0; k < cols; k++) {
            initial[i].push({type: 1})
        }
    }
    const randomPos = () => {
        return {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };
    }

    const [row, setRow] = useState(initial);
    const [snake, setSnake] = useState([{x: 0, y: 0, dir: 'right'}, {x: 1, y: 0, dir: 'right'}]);
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
                if (direction === 'right')
                    break;
                setDirection('left');
                break;
            case 38:
                if (direction !== 'bottom')
                    setDirection('top');
                break;
            case 39:
                if (direction !== 'left')
                    setDirection('right');
                break;
            case 40:
                if (direction !== 'top')
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
            newRows[cell.x][cell.y] = {type: 0, dir: cell.dir};
        })
        newRows[food.x][food.y] = {type: 2};
        setRow(newRows);
    }

    const moveSnake = () => {
        const newSnake = [];
        let pos;
        switch (direction) {
            case 'right':
                pos = {x: snake[0].x, y: (snake[0].y + 1) % rows, dir: "right"}
                break;
            case 'left':
                pos = {x: snake[0].x, y: (snake[0].y - 1 + rows) % rows, dir: "left"}
                break;
            case 'top':
                pos = {x: (snake[0].x - 1 + cols) % cols, y: snake[0].y, dir: "up"}
                break;
            case 'bottom':
                pos = {x: (snake[0].x + 1) % cols, y: snake[0].y, dir: 'down'}
                break;
            default:
                break;
        }
        newSnake.push(pos)
        if (collision(pos)) {
            alert("Game over")
            newScore(0);
            setSnake([{x: 0, y: 0, dir: 'right'}, {x: 1, y: 0, dir: 'right'}])
            setDirection('right')
            return
        }
        snake.forEach(cell => {
            newSnake.push(cell);
        })
        if (snake[0].x === food.x && snake[0].y === food.y) {
            newScore((prev) => prev + 1);
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