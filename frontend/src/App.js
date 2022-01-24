import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Container from './components/layout/Container'
import Message from "./components/layout/Message"

// pages
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Home from "./components/pages/Home"
import Profile from "./components/pages/User/Profile"
import MyPets from "./components/pages/Pet/MyPets"
import AddPet from "./components/pages/Pet/AddPet"
import PetDetails from "./components/pages/Pet/PetDetails"
import EditPet from "./components/pages/Pet/EditPet"
import MyAdoptions from "./components/pages/Pet/MyAdoptions"

// context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router >
      <UserProvider >
      <Navbar />
      <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/user/profile" element={<Profile/>}/>
            <Route path="/pet/mypets" element={<MyPets/>}/>
            <Route path="/pet/add" element={<AddPet/>}/>
            <Route path="/pet/:id" element={<PetDetails/>}/>
            <Route path="/pet/edit/:id" element={<EditPet/>}/>
            <Route path="/pet/myadoptions" element={<MyAdoptions/>} />
          </Routes>
        </Container>
      <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
