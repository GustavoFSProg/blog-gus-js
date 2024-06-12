import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Users/Login';
import RegisterPost from './pages/Posts/RegisterPost';

function Routers() {
    return (
      <>
       <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/register-post"  element={<RegisterPost />}/>
         </Routes>
       </BrowserRouter>
      </>
    );
  }
  
  export default Routers;
  