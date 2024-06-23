import { useContext } from "react";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";
import { userContext } from "../../Contexts/userContext";

function Dashboard() {
  const { user } = useContext(userContext);
  const Token = localStorage.getItem("token");


  console.log(user);

  return (

    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
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
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#c5c7c9",
        }}
      >
        {user || Token ? <h1>DASHBOARD</h1> : <h1>ACESSO PROIBIDO - EFETUE O LOGIN!</h1>}
      </div>
    </div>
  );
}

export default Dashboard;
