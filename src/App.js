import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Home from './components/Home'
import Todolist from './components/Todolist'


const App = () => {
    return (
        <>
            <div className="app-main">
            <Routes>

            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>

            <Route path="/todolist" element={<Todolist />}></Route>
             
            </Routes>
            </div>
        </>
    )
}

export default App