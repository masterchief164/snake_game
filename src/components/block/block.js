import React from "react";
import "./block.css"
import grass from '../../assets/grassSkin.jpg'
import apple from '../../assets/apple.jpg'
import snakeSkin from '../../assets/skin.jpg'

const Block = ({col}) => {
    let he, wi, rot,style;
    if (window.innerHeight < window.innerWidth) {
        he = "4vh";
        wi = "4vh";
    } else {
        he = "4vw";
        wi = "4vw";
    }
    switch (col.type) {
        case 0:
            switch (col.dir) {
                case 'right':
                    rot = 'rotate(0deg)'
                    break;
                case 'left':
                    rot = 'rotate(0deg)'
                    break
                case 'up':
                    rot = 'rotate(90deg)'
                    break;
                case 'down':
                    rot = 'rotate(90deg)'
                    break
                default:
                    break
            }
            col = snakeSkin
            break;
        case 1:
            col = grass
            rot = 'rotate(0deg)'
            break;
        case 2:
            col = apple
            rot = 'rotate(0deg)'
            break;
        default:
            break;

    }
    style = {height:he,width:wi,transform: rot}
    return <img alt='block' className="block blockBlue" src={col}
                style={style}/>
}

export default Block