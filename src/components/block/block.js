import React from "react";
import "./block.css"
import bluePng from './bluePng.png'
import redPng from './redPng.jpg'

const Block = ({col}) => {
    let he, wi;
    if (window.innerHeight < window.innerWidth) {
        he = "4vh";
        wi = "4vh";
    } else {
        he = "4vw";
        wi = "4vw";
    }
    switch (col) {
        case 0:
            col = redPng
            break;
        case 1:
            col = bluePng
            break;
        case 2:
            col = redPng
            break;
        default:
            break;

    }
    return <img alt='block' className="block blockBlue" src={col}
                style={{backgroundColor: col, height: he, width: wi}}/>
}

export default Block