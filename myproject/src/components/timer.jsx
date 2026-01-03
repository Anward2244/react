import { useEffect, useState } from "react"
import './timer.css'


function TimerApp(){
    const [count, setcount] = useState(0)
    const [start, setstart] = useState(false)

    let startTime = ()=>{
        setstart(true)
    }
    let stopTime = ()=>{
        setstart(false)
    }
    let resetTime = ()=>{
        setstart(false)
        setcount(0)
    }

    useEffect(()=>{
        let id;
        if (start){
            id = setInterval(()=>{
            setcount((prev)=>prev+1)
            },1000)
        }
        return ()=>clearInterval(id)
    },[start])

    return(
        <div style={{textAlign:'center'}}>
        <p>count</p>
        <h1>{count}</h1>
        <button onClick={startTime} id="start">Start</button>
        <button onClick={stopTime} id="stop">Stop</button>
        <button onClick={resetTime} id="reset">Reset</button>
        </div>
    )
}

export default TimerApp