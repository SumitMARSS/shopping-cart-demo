import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Icon1 from "../img/Icon1.png"
import { useSelector } from "react-redux";
import "./NavBar.css"


function NavBar(){

    const {cart} = useSelector((state) => state);

    return (<div className="nav">
        <div className="image">
            <NavLink to={"/"}>
                <img src={Icon1} />
            </NavLink>
        </div>
        <div className="rest-nav">
            <div  >
                <NavLink to={"/"} className="nav-hm">
                    <span>Home</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={"/Cart"} className="nav-cart">
                    
                    <div>
                        <FaShoppingCart />
                    </div>
                    <div className="cnt">
                        {
                            cart.length > 0 ? (<div>{cart.length}</div>) : ("")
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    </div>)
}

export default NavBar;