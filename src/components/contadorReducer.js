import React, { useReducer } from 'react';

const initialState = {count: 0};

const typeAction = {
  increment: 'increment',
  decrement: 'decrement'
}
function reducer(num, action) {
  switch (action) {
    case typeAction.increment:
      return {count: num.count + 1};
    case typeAction.decrement:
      return {count: num.count - 1};
    default:
      throw new Error();
  }
}

function ContadorReducer() {
   let [num, setNum]= useReducer(reducer, initialState)


  return (
    <div className="container h1">
      <h1>Ejemplo Contador con useState</h1>
      <p>Hello wold {num.count}</p>
      <button onClick={()=> setNum(typeAction.increment)}>+1</button>
      <button onClick={()=> setNum(typeAction.decrement)}>-1</button>
    </div>
  );
}

export default ContadorReducer;