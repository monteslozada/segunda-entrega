import CardWidget from "../carwidget/CarWidget"
import"bulma/css/bulma.css";

const NavBar =()=>{
    return(
        <nav>
            <h1>Game store</h1>
            <div className="bottons">
                <button className="button is-info">Playstation</button>
                <button  className="button is-success">Xbox</button>
                <button  className="button is-danger">Nintendo</button>
            </div>
            <CardWidget/>
        </nav>
    )
    
    }
    export default NavBar
