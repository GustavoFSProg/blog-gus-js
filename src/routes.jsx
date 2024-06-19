import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Users/Login';
import RegisterPost from './pages/Posts/RegisterPost';
import PostProfile from './pages/Posts/postProfile';
import DeletePost from './pages/Posts/deletePost/deletePost';
import Dashboard from './pages/Dashboard/dashboard';
import { UserContextProvider } from './Contexts/userContext';
import RegisterMain from './pages/Posts/RegisterMain';

function Routers() {
    return (
      <>
      <UserContextProvider >

       <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/register-post"  element={<RegisterPost />}/>
            <Route path="/register-main"  element={<RegisterMain />}/>
            <Route path="/profile"  element={<PostProfile />}/>
            <Route path="/delete-post"  element={<DeletePost />}/>
            <Route path="/dashboard"  element={<Dashboard />}/>

         </Routes>
       </BrowserRouter>
      </UserContextProvider>
      </>
    );
  }
  
  export default Routers;
  