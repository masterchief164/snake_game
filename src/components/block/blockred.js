import React from "react";
import "./block.css"

const BlockRed = ({mar, marT}) => {
    mar = 2 * mar + "vh"
    marT = 2 * marT + "vh"
    return <div className="blockRed block" style={{marginLeft: mar, marginTop: marT}}/>
}

export default BlockRed