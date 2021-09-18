import React, {useState} from "react";
import Grid from "../grid/grid";
import './home.css'

const Home = ()=>{
    const [score,setScore] = useState(0)
    return(
        <div className='home'>
            <h1>Score {score}</h1>
            <Grid newScore = {setScore}/>
        </div>
    )
}

export default Home;