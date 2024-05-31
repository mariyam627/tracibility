
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Uploadpage from './pages/Uploadpage';
function App() {
  return (
    <>

<Router>
  
    <Routes>
      <Route path='/userpage' element={<Uploadpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
 
</Router>
    </>
  );
}

export default App;
