import "./NavBar"
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";

function NavBar (){
    return (
        <nav className="menu"> 
            <Link to= '/'>
                <h3>Game store</h3>
            </Link>
            <div className="Categorias">
                <NavLink to={`/category/ps4`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>playstation</NavLink>
                
                
                <NavLink to={`/category/nintendo`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>nintendo</NavLink>
                <NavLink to={`/category/xbox`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>xbox</NavLink>

            </div>

            <CartWidget></CartWidget>

            
        </nav>
    )
}

export default NavBar;