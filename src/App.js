
import './App.css';
import NavBar from './componentes/navBar.js/NaBar';
import ItemlistContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
   <NavBar/>
   <ItemlistContainer greeting={'bienvenidos'}/>
    </div>
  );
}

export default App;
