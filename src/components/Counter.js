import React from 'react'
import "./Counter.css"
function Counter(prop) {
    
    const decrease = ()=>{
        if(prop.count>0){
            prop.setCount(prop.count-1);
        }
        else{
            const error = document.getElementById("error");
            error.innerText = "Error : Cannot go below 0";
        }
    }
    const increase = ()=>{
        if(prop.count===0){
            const error = document.getElementById("error");
            error.innerText = "";
        }
        let updatedCount = prop.count+1;
        prop.setCount(updatedCount);
    }
    const goBack = ()=>{
        prop.setCount(0);
    }
  return (
    <div>
        <h1 className="heading">Counter using React</h1>
        <span className="count-line">Your Current Count is : {prop.count}</span>
        <p id="error"></p>
        <div className="buttons">
            <button className="decrement" onClick={decrease}>Decrement</button>
            <button className="increment" onClick={increase}>Increment</button>
            {prop.count > 10 ?<button id="go-back" onClick={goBack} >Go Back to 0</button>:null}
        </div>
    </div>
  )
}

export default Counter
