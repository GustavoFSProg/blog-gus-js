import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Users/Login';
import RegisterPost from './pages/Posts/RegisterPost';
import PostProfile from './pages/Posts/postProfile';
import Dashboard from './pages/Dashboard/dashboard';
import { UserContextProvider } from './Contexts/userContext';
import RegisterMain from './pages/Posts/RegisterMain';
import ProfileAdmin from './pages/Posts/deletePost/ProfileAdmin';
import UpdateComponent from './pages/Posts/UpdateComponent';
// import MainProfile from './pages/Posts/mainProfile';
import MainPosts from './pages/Posts/mainPosts';
import MainPostsPainel from './pages/Posts/mainPostsPainel';
import RegisterUser from './pages/Users/RegisterUser';
import ChangePassword from './pages/Users/ChangePassword';

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
            <Route path="/profile-admin"  element={<ProfileAdmin />}/>
            <Route path="/dashboard"  element={<Dashboard />}/>
            <Route path="/update-post"  element={<UpdateComponent />}/>
            <Route path="/main-posts-painel"  element={<MainPostsPainel />}/>
            <Route path="/main-posts"  element={<MainPosts />}/>
            <Route path="/register-user"  element={<RegisterUser />}/>
            <Route path="/new-password"  element={<ChangePassword />}/>

         </Routes>
       </BrowserRouter>
      </UserContextProvider>
      </>
    );
  }
  
  export default Routers;
  