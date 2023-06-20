import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Users from './Pages/Home/Users/index1'

function myRoutes() {

    return (

        <Router>
            <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/usuários' element={<Users />} />
            </Routes>
        </Router>
    )
}

export default myRoutes
