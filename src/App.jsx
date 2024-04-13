import { useState } from 'react'
import './index.css'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Products from './routes/Products.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<Products />} />
      <Route path= "/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
