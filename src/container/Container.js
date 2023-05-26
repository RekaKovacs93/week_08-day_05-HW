import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "../components/Nav"

const Container = () => {
    return (
        <Router>
   <Nav/>
    <Routes>
      <Route></Route>
    </Routes>
   </Router>
    )
}

export default Container