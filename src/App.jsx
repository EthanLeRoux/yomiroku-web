import './App.css'
import Signup from "./components/Signup.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import AddNewAnimeEntry from "./components/AddNewAnimeEntry.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  return (
    <>
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newanime" element={<AddNewAnimeEntry/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
