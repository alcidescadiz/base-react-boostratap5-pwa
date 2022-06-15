import React, { useContext, useEffect, useReducer } from 'react';
import GlobalContext from './contextReducer';

const initialState = { 
  state: true,
  users : []
}

const typeAction = {
  getAll: 'getAll',
  create: 'create',
  update: 'update',
  getOne: 'getOne',
  delete: 'delete'
}
function reducer(list, action) {
  switch (action.type) {
    case typeAction.getAll:
      return { ...list, users : action.res};
    default:
      throw new Error();
  }
}

function FetchReducer() {
  let [list, setList]= useReducer(reducer, initialState)
  let {state, chanceState, chanceUser} = useContext(GlobalContext)


  useEffect(()=>{
    async function getFetch(){
      let peticion = await fetch('https://jsonplaceholder.typicode.com/users')
      let res = await peticion.json()
      setList( { type: typeAction.getAll, res})
    }
    getFetch()
  }, [])

  return (
    <div className="container h1">
      <h2>Ejemplo Fetch con useReducer</h2>
      <h2>Dato usando useContext y createContext: {state.user}- {`${state.state}`}</h2>
      <form onSubmit={(e)=> chanceUser(e)}>
        <input type="text" name="name" />
        <input 
          type="submit" 
          value="Cambiar nombre" />
      </form>
      <input 
          type="submit" 
          value="Cambiar estado"
          onClick={ chanceState} />
      <ul>
        {list.users.map( (e,i) => {
          return <li key={i}> {e.name}  </li>
        } )} 
      </ul>
    </div>
  );
}

export default FetchReducer;