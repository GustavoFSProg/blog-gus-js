import SimpleMenu from "../Menu/menu";
import { NavBarContainer, LinksContainer } from "./style-navbar";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LinksContainer>
        <span > <Link to="/"
        style={{textDecoration: 'none', color: 'gray'}}
        >
            HOME
          </Link></span>
       <Link to="/register-post"
          style={{textDecoration: 'none', color: 'gray'}}
          >
            POST
          </Link>
          <span>
          <Link to="/dashboard"
          style={{textDecoration: 'none', color: 'gray'}}
          >
            DASHBOARD
          </Link>
        </span>
        <span>
          <Link to="/login"
          style={{textDecoration: 'none', color: 'gray'}}
          >
            LOGIN
          </Link>
        </span>
            </LinksContainer>
        <SimpleMenu />
      </NavBarContainer>
    </>
  );
}

export default NavBar;
