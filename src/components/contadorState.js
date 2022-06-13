import React, { useState } from 'react';


function ContadorState() {
  let [num, setNum]= useState(0)

  return (
    <div className="container h1">
      <h1>Ejemplo Contador con useState</h1>
      <p>Hello wold {num}</p>
      <button onClick={()=> setNum(num+1)}>+1</button>
    </div>
  );
}

export default ContadorState;