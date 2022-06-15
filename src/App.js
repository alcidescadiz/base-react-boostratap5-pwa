import ContadorReducer from './components/contadorReducer';
import ContadorState from './components/contadorState';
import { GlobalContextComponent } from './components/contextReducer';
import FetchReducer from './components/fetchReducer';
import VariosFetch from './components/VariosFetch';


function App() {

  return (
    <div className="container h1">
      <GlobalContextComponent>
        <ContadorState />
        <ContadorReducer />
        <VariosFetch />
        <FetchReducer />
      </GlobalContextComponent>
    </div>
  );
}

export default App;
