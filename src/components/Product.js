import React from "react";
import { useParams } from "react-router-dom";

const Product = ({products, addToCart}) => {
    const {prod} = useParams()
    const product = products.find((product) => 
        product.name === prod
    )
    

    return(
        <div className="specs" key ={product.id}>
                <div className="imgcont">
                <img className="large" src ={product.image_url}></img>
                </div>
                <div className="text"><h1>{product.name}</h1>
                <h4>{product.description}</h4>
                <p  className="stock"><b>£{product.price}</b></p>
                <p><i>In Stock</i></p>
                <p>{product.specifications}</p>
                <div className="colourcont">
                <p>Colours:</p>
                    <div className="colours">
                    <div className="pink circle"></div>
                    <div className="purple circle"></div>
                    <div className="black circle"></div>
                </div>
                </div>
                <button onClick={addToCart} value={product.id}>Add to Cart</button>
                </div>
                
        </div>
        
    )
}

export default Product