import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Header = ( {quantity} ) => {

    
    return (
        <div className="header-wrapper">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/store">Store</Link>
            </li>
            <li>
                <Link to="/checkout" key={quantity}>Cart: {quantity.length}</Link>
            </li>

        </div>
    );
}

export default Header