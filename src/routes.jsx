import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Users/Login';
import RegisterPost from './pages/Posts/RegisterPost';
import PostProfile from './pages/Posts/postProfile';
import DeletePost from './pages/Posts/deletePost/deletePost';

function Routers() {
    return (
      <>
       <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/register-post"  element={<RegisterPost />}/>
            <Route path="/profile"  element={<PostProfile />}/>
            <Route path="/delete-post"  element={<DeletePost />}/>

         </Routes>
       </BrowserRouter>
      </>
    );
  }
  
  export default Routers;
  