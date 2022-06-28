import React from "react";
import { Link } from "react-router-dom";

const Header = ( props ) => {
    
    return (
        <div className="header-wrapper">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/store">Store</Link>
            </li>
            <li>
                <Link to="/checkout">Cart: {props.quantity}</Link>
            </li>

        </div>
    );
}

export default Header