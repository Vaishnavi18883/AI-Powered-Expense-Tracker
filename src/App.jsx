import React from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Userdashboard from './Components/Userdashboard'
import Addincome from './Pages/Addincome'
import Addexp from './Pages/Addexp'
import Incomedashboard from './Components/Incomedashboard'
import Expdashboard from './Components/Expdashboard'
import Categories from './Pages/Categories'
import Showallincomes from './Pages/Showallincomes'
import Showallexp from './Pages/Showallexp'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element= {<Register/>}></Route>
          <Route path='/userdashboard' element={<Userdashboard/>}></Route>
          <Route path='/add-income' element= {<Addincome/>}></Route>
          <Route path='/edit-income/:id' element={<Addincome/>} ></Route>
          <Route path='/add-expenses' element={<Addexp/>}></Route>
          <Route path='/incomedashboard' element= {<Incomedashboard/>}></Route>
          <Route path='/expenesdashboard' element={<Expdashboard/>}></Route>
         <Route path='/categories' element={<Categories/>}></Route>
         <Route path='/showallincome' element={<Showallincomes/>}></Route>
          <Route path='/expenselist' element={<Showallexp/>}></Route>

      </Routes>
      </Router>
     
    </div>
  )
}

export default App