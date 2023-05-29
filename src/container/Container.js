import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Products from "../components/Products"
import Product from "../components/Product"
import Cart from "../components/Cart"


const Container = () => {

  const [products, setProducts] = useState ([
    {
      "id": 1,
      "name": "Vibrating Bullet",
      "price": 19.99,
      "image_url": "https://myplusone.com/wp-content/uploads/2022/06/6702T-Bullet-Straight-On-2000x2000px.jpg",
      "description": "Compact and powerful bullet vibrator for targeted pleasure.",
      "rating": 4.2,
      "specifications": "Waterproof and submersible, USB rechargeable, 10 vibration modes, Travel-friendly size, Body-safe silicone",
      "color": "Black"
    },
    {
      "id": 2,
      "name": "Rabbit Vibrator",
      "price": 49.99,
      "image_url": "https://static.thcdn.com/images/large/original//productimg/1600/1600/13805755-5034957333821672.jpg",
      "description": "Dual-action vibrator with clitoral and G-spot stimulation.",
      "rating": 4.8,
      "specifications": "Rechargeable and cordless, Multiple vibration modes and intensities, Rotating shaft for internal stimulation, Flexible clitoral stimulator, Body-safe silicone",
      "color": "Purple"
    },
    {
      "id": 3,
      "name": "Wand Massager",
      "price": 39.99,
      "image_url": "https://m.media-amazon.com/images/I/41hl2FM-IiL.jpg",
      "description": "Versatile and powerful wand massager for full-body relaxation.",
      "rating": 4.5,
      "specifications": "Corded design for consistent power, 10-speed settings for customized massages, Flexible head for targeted stimulation, Body-safe material",
      "color": "Pink"
    },
    {
      "id": 4,
      "name": "Silicone Dildo",
      "price": "$29.99",
      "image_url": "https://i0.wp.com/www.lovingjoy.co.uk/wp-content/uploads/2020/12/n11473-loving-joy-4-5-inch-silicone-dildo.jpg?fit=500%2C500&ssl=1",
      "description": "Realistic silicone dildo with lifelike texture and flexible design.",
      "rating": 4.3,
      "specifications": "Harness compatible for versatile use, Curved shape for G-spot or prostate stimulation, Suction cup base for hands-free play, Hypoallergenic and easy to clean",
      "color": "Black"
    },
    {
      "id": 5,
      "name": "Remote Control Vibrating Panties",
      "price": 59.99,
      "image_url": "https://i.ebayimg.com/images/g/CZwAAOSwOMVhFj3y/s-l1600.jpg",
      "description": "Discreet and exciting vibrating panties with remote control.",
      "rating": 4.0,
      "specifications": "Wireless remote control, 10 vibration patterns, Stretchy and comfortable fabric, Waterproof, Batteries included",
      "color": "Black"
    },
    {
      "id": 6,
      "name": "Prostate Massager",
      "price": 34.99,
      "image_url": "https://www.annsummers.com/dw/image/v2/AAUX_PRD/on/demandware.static/-/Sites-master-catalog-as/default/dwcae8fb9a/images/07ANAVAS1153006/07ANAVAS1153006_Z.jpg?sw=511&sh=720&strip=false",
      "description": "Specially designed prostate massager for intense pleasure.",
      "rating": 4.6,
      "specifications": "Curved shape for precise prostate stimulation, Multiple vibration modes, Remote control for hands-free use, USB rechargeable, Body-safe silicone",
      "color": "Purple"
      
    },
    {
      "id": 7,
      "name": "Bondage Kit",
      "price": 69.99,
      "image_url": "https://i.ebayimg.com/images/g/noQAAOSwQPxiVUkc/s-l1600.jpg",
      "description": "Complete bondage kit with restraints, blindfold, and whip.",
      "rating": 4.7,
      "specifications": "Soft and adjustable restraints, Comfortable blindfold for sensory play, Faux leather whip for light bondage, Suitable for beginners and advanced users",
      "color": "Black"
    },
    {
      "id": 8,
      "name": "Anal Beads",
      "price": 24.99,
      "image_url": "https://www.clonezonedirect.co.uk/media/catalog/product/cache/4f106d4423dbc62b3a3cd7a398b31ece/5/3/53980-4.jpg",
      "description": "Graduated anal beads for pleasurable and gradual stimulation.",
      "rating": 4.1,
      "specifications": "Flexible and body-safe silicone, Graduated bead sizes for customizable pleasure, Easy retrieval handle, Suitable for beginners and experienced users",
      "color": "Purple"
    },
    {
      "id": 9,
      "name": "Couples' Vibrating Ring",
      "price": 19.99,
      "image_url": "https://m.media-amazon.com/images/I/312LtACdl-L._SL500_.jpg",
      "description": "Vibrating ring for couples to enhance shared pleasure.",
      "rating": 4.4,
      "specifications": "Stretchy and comfortable fit, Dual vibration for both partners, Rechargeable and waterproof, Body-safe silicone",
      "color": "Pink"
    },
    {
      "id": 10,
      "name": "Nipple Clamps",
      "price": 14.99,
      "image_url": "https://i.ebayimg.com/images/g/pBYAAOSwy3lhAAo7/s-l1600.jpg",
      "description": "Adjustable nipple clamps for stimulating nipple play.",
      "rating": 4.0,
      "specifications": "Adjustable pressure for customized sensation, Non-piercing design, Lightweight and easy to use, Suitable for all levels of experience",
      "color": "Black"
    }
  ]
  )
  const [productInCart, setProductInCart] = useState ([])
  const [cartCounter, setCartCounter] = useState(0)

  const addToCart = (event) => {
    event.preventDefault()
    const productId = event.target.value
    const newProduct = products.find((product) => product.id == productId)
    const newCart = [...productInCart, newProduct]
    setProductInCart(newCart)
    setCartCounter(cartCounter + 1)
    console.log(cartCounter)
    
  }

  // const handleClick = (event) => {
  //   setProductSelected(products[event.target.value])
  // }

    return (
        <Router>
   <Nav cartCounter={cartCounter}/>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/products" element = {<Products products={products}/>}></Route>
      <Route path = "/products/:prod" element = {<Product products ={products} addToCart={addToCart}/>}></Route>
      <Route path = "/cart" element = {<Cart productInCart={productInCart}/>}></Route>
    </Routes>
   </Router>
    )
}

export default Container