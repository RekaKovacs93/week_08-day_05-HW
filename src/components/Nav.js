import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = ({cartCounter}) => {
    return(
        <ul>
        <Link to = "/"><h3>Home</h3></Link>
        <Link to = "/about"><h3>About</h3></Link>
        <Link to = "/products"><h3>Products</h3></Link>
        <Link to = "/cart"><h3><FontAwesomeIcon icon={faShoppingCart} style={{color: "#000000",}} /></h3>
        {/* <div className="counter"> */}
        {cartCounter !== 0 ? (
        <div className="counter">
        <p>{cartCounter}</p>
        </div>
        ) : null}
        {/* </div> */}
        </Link>
        </ul>
    )
}

export default Nav