import React from "react";
import { Link } from "react-router-dom";



const Nav = () => {
    return(
        <ul>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/products">Products</Link>
        <Link to = "/cart">🛒</Link>
        </ul>
    )
}

export default Nav