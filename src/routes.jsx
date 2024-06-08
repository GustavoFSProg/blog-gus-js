import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Users/Login';

function Routers() {
    return (
      <>
       <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/login"  element={<Login />}/>
         </Routes>
       </BrowserRouter>
      </>
    );
  }
  
  export default Routers;
  