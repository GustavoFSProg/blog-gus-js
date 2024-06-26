import { useContext } from "react";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";
import { userContext } from "../../Contexts/userContext";
import MainPostsPainel from "../Posts/mainPostsPainel";

function Dashboard() {
  const { user } = useContext(userContext);
  const Token = sessionStorage.getItem("token");



  return (

    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        background: "lightgray",
        flexDirection: "column",
      }}
    >
      <NavBarPanel />

      <div
        style={{
          display: "flex",
          width: "62%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#c5c7c9",
        }}
      >
        {user || Token ?(<><br /> <h1>DASHBOARD</h1> <br />
        <MainPostsPainel />
        </>): <h1>ACESSO PROIBIDO - EFETUE O LOGIN!</h1>}
      </div>
    </div>
  );
}

export default Dashboard;
