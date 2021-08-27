import React, {useState} from "react";
import "./block.css"

const Block = ({mar, marT, col, arr}) => {
    const ele = useState(col);
    let he=0,wi=0;
    arr.push(ele);
    if (window.innerHeight < window.innerWidth) {
        mar = (mar * 1.999999) + "vh"
        marT = (marT * 1.999999) + "vh"
        he= "2vh";
        wi= "2vh";
    }
    else{
        mar = (mar * 1.999999) + "vw"
        marT = (marT * 1.999999) + "vw"
        he= "2vw";
        wi= "2vw";
    }
    col = col === 1 ? "#61dafb" : "red";
    return <div className="block blockBlue" style={{marginLeft: mar, marginTop: marT, backgroundColor: col,height: he,width:wi}}/>
}

export default Block