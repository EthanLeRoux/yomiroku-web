import './App.css'
import Signup from "./components/Signup.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import AddNewAnimeEntry from "./components/AddNewAnimeEntry.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Profile from "./components/Profile.jsx";
import MyEntries from "./components/MyEntries.jsx";

function App() {

    return (
    <>
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newanime" element={<AddNewAnimeEntry/>}/>
                <Route path="/myentries" element={<MyEntries/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
