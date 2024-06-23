import MenuPannel from "../MenuPanel/menu";
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
          <span > <Link to="/main-posts"
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
          <Link to="/update-post"
          style={{textDecoration: 'none', }}
          >
            UPDATE POST
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
        <MenuPannel />
      </NavBarContainer>
    </>
  );
}

export default NavBarPanel;
