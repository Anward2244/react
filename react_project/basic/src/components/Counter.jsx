import { useState } from "react"
import "../ClassComponents/counter.css"

function CounterApp(){
    let [count, setCount] = useState(0)
    let increment = ()=>{
        setCount(count+1)
    }
    let decrement = ()=>{
        setCount(count-1)
    }
    let count_color = count>0 ? 'green': count<0 ? 'red':'black' 
    return(
        <div style={{textAlign:'center'}}>
        <p>count</p>
        <h1 style={{color:count_color}}>{count}</h1>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
        </div>
    )
}
export default CounterApp