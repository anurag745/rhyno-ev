import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path= "/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
