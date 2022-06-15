import { useEffect } from "react"
import { useState } from "react"

const p1 = fetch('https://jsonplaceholder.typicode.com/users')
.then((data) => data.json())
//.then((data)=> setState({...setState, lista1: data }))

const p2 = fetch('https://jsonplaceholder.typicode.com/albums')
.then((data2) => data2.json())
//.then((data2)=> setState({...setState, lista2: data2 }))

const p3 = fetch('https://jsonplaceholder.typicode.com/albums')
.then((data3) => data3.json())
//.then((data2)=> setState({...setState, lista2: data2 }))

export default function VariosFetch() {
    let [state, setState] = useState(
        {
            lista1: [],
            lista2: [],
            lista3: []
        }
    )

    useEffect( ()=>{
        Promise.all([p1, p2, p3]).then(response=> {
            setState({
                lista1 : response[0], 
                lista2: response[1],
                lista3: response[2]
            })
        })
  
    }, [])

    return (<>
        <h1>Ejemplo de Varios fetch</h1>
        <h2>Lista 1</h2>
        {<h2>{state.lista1.map((e,i)=>{
            return <p key={i}> {e.email} </p>
        })}</h2>}
        <h2>Lista 2</h2>
        <h2>{state.lista2.map((e,i)=>{
            return <p key={i}> {e.title} </p>
        })}</h2>
        <h2>Lista 3</h2>
        <h2>{state.lista3.map((e,i)=>{
            return <p key={i}> {e.title} </p>
        })}</h2>

    </>)
}