import React from "react";

const Cart = ({productInCart}) => {

    const productList = () => {
        if (productInCart.length === 0){
            return(
                <h3>Your cart is empty, start adding items</h3>
            )
        }
        else {
        return productInCart.map((product) => {
            return(
            <div className="cart" key ={product.id}>
                <div>
                <img src ={product.image_url}></img>
                <h3>{product.name}</h3>
                </div>
                <p>£{product.price}</p>
                {/* <p className="desc">{product.description}</p> */}
            </div>
        
        )
    })}}

    const cartTotal = () => {
        const total = productInCart.reduce((tot, prod) => {
            return tot += prod.price
        },0)
        return total.toFixed(2)
    }
    return(
        <div >
        <h1>Shopping Cart</h1>
        <div className="cartdiv">{productList()}</div>
        <h3 className="total">Total : £{cartTotal()}</h3>
        </div>
    )
}

export default Cart