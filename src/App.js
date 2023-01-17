import './App.css';
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { Movie } from './Pages/Movie/Movie'
import { Show } from './Pages/Shows/Show'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";



export function App() {
  var userData = JSON.parse(localStorage.getItem("accessToken"));
  const loggedInUser = userData !== null && userData.accessToken.length > 0 && new Date(userData.refreshtokens[0].expiryDate).getTime() > new Date(Date.now()).getTime()

  return (
    <Routes>
      <Route path="/" element={loggedInUser ? (<Home />) : (<Navigate replace to={"/Login"} />)} />
        <Route path="/Login"element={!loggedInUser ? (<Login />) : (<Navigate replace to={"/"} />)} />
        <Route path="/Register" element={loggedInUser ? (<Register />) : (<Navigate replace to={"/"} />)} />
        <Route path="/Movie" element={loggedInUser ? (<Movie />) : (<Navigate replace to={"/Login"} />)} />
        <Route path="/Show" element={loggedInUser ? (<Show />) : (<Navigate replace to={"/Login"} />)} />
      </Routes>
  );
}

export default App;





