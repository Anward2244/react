import React from "react";
import "./counter.css"
class CounterApp extends React.Component{
    state = {
        count: 0
    }
    increment=()=>{
        console.log(this.state.count)
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        console.log(this.state.count)
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div className="entire">
                <h1>Counter App</h1>
                <div className="btns">
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.increment}>Increment</button>
                </div>
                <h3>Count:</h3>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default CounterApp;