import React from "react";
import { Link } from "react-router-dom";

const Products = ({products}) => {

    const prods = products.map((product) => {
        return (
            <div className="prod" key ={product.id}>
            <Link to={`/products/${product.name}`}>
                <img src ={product.image_url}></img>
                <h3>{product.name}</h3></Link>
                <p><i>£{product.price}</i></p>
                <p className="desc">{product.description}</p>
            </div>
        )
    })
    return(
        <div className="div">{prods}</div>
    )
}

export default Products