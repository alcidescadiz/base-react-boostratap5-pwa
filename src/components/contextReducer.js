import { createContext, useEffect, useReducer } from 'react'

// cambiar Nombre por el concepto apropiado (9 veces)
const GlobalContext = createContext()
const initialState = { 
    state: true,
    user : 'Alcides Cádiz'
  }
  
  const typeAction = {
    chanceState: 'state',
    chanceUser: 'user'
  }
  function reducer(list, action) {
    switch (action.type) {
      case typeAction.chanceState:
        return { ...list, state: action.state };
    case typeAction.chanceUser:
        return { ...list, user : action.user};
      default:
        throw new Error();
    }
  }
export function GlobalContextComponent({children}){
    let [state, setState]= useReducer(reducer, initialState)

    function chanceState(){
        setState({type: typeAction.chanceState, state: !state.state})
    }
    function chanceUser(e){
        e.preventDefault()
        setState({type: typeAction.chanceUser, user:  e.target[0].value })
        e.target[0].value = ''
    }

    useEffect(()=>{
        //* efectos *//
    }, [])
    let data= {state, chanceState, chanceUser}
    return (<>
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    </>)
}

export default GlobalContext
