import NavBar from "./componentes/navBar/NavBar";
import Itemlistcontainer from "./componentes/ItemListContainer/ItemListContainer";
import CartWidget from "./componentes/CardWidget/CardWidget";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App () {

    return(
        <div className="App">
            <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path = "/" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
              <Route path="/category/:categoryId" element={<Itemlistcontainer></Itemlistcontainer>}></Route>  
              <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
            </Routes>
            </BrowserRouter>
            

        </div>
    )
}

export default App;