import { NavBarContainer } from "./style-navbar";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <span > <Link to="/"
        style={{textDecoration: 'none', color: 'gray'}}
        >
            HOME
          </Link></span>
        <span> <Link to="/register-post"
          style={{textDecoration: 'none', color: 'gray'}}
          >
            POST
          </Link></span>
        <span>
          <Link to="/login"
          style={{textDecoration: 'none', color: 'gray'}}
          >
            LOGIN
          </Link>
        </span>
      </NavBarContainer>
    </>
  );
}

export default NavBar;
