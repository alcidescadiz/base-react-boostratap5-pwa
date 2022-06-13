import React, { useReducer } from 'react';


function ContadorReducer() {
   let [num, setNum]= useReducer(0)


  return (
    <div className="container h1">
      <h1>Ejemplo Contador con useState</h1>
      <p>Hello wold {num}</p>
      <button onClick={()=> setNum(num+1)}>+1</button>
    </div>
  );
}

export default ContadorReducer;