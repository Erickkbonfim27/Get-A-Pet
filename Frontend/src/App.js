import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import React from 'react'

/* components */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Message from './components/layout/Message'
import Container from './components/layout/Container'

/* pages */
import Home from './components/pages/Home'
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Register'
import Profile from './components/pages/User/Profile'
import AddProjeto from './components/pages/Pet/addProjeto'
import MyPets from './components/pages/Pet/MyPets'
import EditPet from './components/pages/Pet/EditPet'
import PetDetails from './components/pages/Pet/PetDetails'
import MyAdoptions from './components/pages/Pet/MyAdoptions'

/* contexts */
import { UserProvider } from './context/UserContext'
function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/projeto/add" element={ <AddProjeto />} />
            <Route path="/projeto/edit/:id" element={<EditPet />} />
            <Route path="/projeto/mypets" element={<MyPets />} />
            <Route path="/projeto/myadoptions" element={<MyAdoptions />} />
            <Route path="/projeto/:id" element={<PetDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App