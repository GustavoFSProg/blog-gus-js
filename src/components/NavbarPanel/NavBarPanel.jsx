import SimpleMenu from "../Menu/menu";
import { NavBarContainer, LinksContainer } from "./style-navbar-panel";
import {Link} from 'react-router-dom'

function NavBarPanel() {
  return (
    <>
      <NavBarContainer>
        <LinksContainer>
        <span > <Link to="/"
        style={{textDecoration: 'none', }}
        >
            HOME
          </Link></span>
          <span > <Link to="/post"
        style={{textDecoration: 'none', }}
        >
            POST
          </Link></span>
       <Link to="/register-post"
          style={{textDecoration: 'none',}}
          >
            CADASTRO DE POST
          </Link>
          <span>
          <Link to="/dashboard"
          style={{textDecoration: 'none', }}
          >
            DASHBOARD
          </Link>
        </span>
        <span>
          <Link to="/login"
          style={{textDecoration: 'none', }}
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

export default NavBarPanel;
