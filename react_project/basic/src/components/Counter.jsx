import { useState } from "react"

function CounterApp(){
    let [count, setCount] = useState(0)
    let increment = ()=>{
        setCount(count+1)
    }
    let decrement = ()=>{
        setCount(count-1)
    }
    return(
        <>
        <button onClick={increment}>increment</button>
        <p>Count:{count}</p>
        <button onClick={decrement}>decrement</button>
        </>
    )
}
export default CounterApp