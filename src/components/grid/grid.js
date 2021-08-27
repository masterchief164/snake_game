import React, {useEffect, useState} from "react"
import Block from "../block/block";
import "./grid.css"

const Grid = () => {
    const [arr, setArr] = useState([[1, 0, 1], [0, 1, 0], [1, 1, 1]]);
    console.log(arr)
    const arr1 = [];
    useEffect(() => {
        for (let i = 0; i < 50; i++) {
            let row = []
            for (let j = 0; j < 50; j++) {
                row.push(Math.floor(Math.random() * 2))
            }
            arr1.push(row)
        }
        console.log(arr1)
        setArr(arr1)
        // eslint-disable-next-line
    }, []);
    return <div className="grid">
        {arr.map((row, index) => {
            return row.map((ele, idx) => {
                return <Block mar={index} marT={idx} col={ele} arr={[]}/>
            })
        })}
    </div>
}
export default Grid;