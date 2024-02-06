//import { BrowserRouter, Route, } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
  <div className='App'>
    <ToastContainer/>
     <BrowserRouter>
    <Routes>
            <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
    </Routes>
    </BrowserRouter> 
   {/* <div style={containerStyles}>
   <Home/>
   </div> */}
   
   </div>
  );
}
/* <BrowserRouter>
    <Router>
            <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
    </Router>
    </BrowserRouter> */

export default App;
