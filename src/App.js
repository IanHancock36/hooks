import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const 
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState ,count: prevState.count + 1 };
    });
  }

  return (
    <div className="App">
      <button onClick={decrementCount}> - </button>
      <span> {count} </span>
      <span> {theme}</span>
      <button onClick={incrementCount}> + </button>
    </div>
  );
}

export default App;

//you must import the hook you are using. Imported {useState}.
// you can only use hooks in function component not class based components.
// the hooks have to execute in the same order in every component rendered.
// cannot be nested in anything AnyTHING. must be at the top level of your function.

//line 5 is desctucturing the array it always returns 2 values. [count,setCount] setCount
//is a funciton to update the current state. so 1st value 'count' = current state
//'setCount' = function to update state

// when you call use state you can run it as a function so it only happens on
// the first time the component renders. * this will help with data issues.
//LINE 5 you can pass an object in there.


// Line 11 and line 16 to keep the blue appearing you 
//must map the old state so the blue is passed in there. 
// you are spreading out your old state and set new state. 
// using map the (...prevState) is to update an object

// you can use multiple hooks to manage multiple aspects of state! whoah!