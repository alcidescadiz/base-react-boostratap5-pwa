import ContadorReducer from './components/contadorReducer';
import ContadorState from './components/contadorState';


function App() {

  return (
    <div className="container h1">
      <ContadorState />
      <ContadorReducer />
    </div>
  );
}

export default App;
