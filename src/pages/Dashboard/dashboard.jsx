import { useContext, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NavBarPanel from "../../components/NavbarPanel/NavBarPanel";
import { userContext } from "../../Contexts/userContext";

function Dashboard() {

   const {user, setUser} = useContext(userContext)

  const Token = localStorage.getItem("token");

    console.log(user)


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
      {/* <NavBar /> */}
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
        {Token ? <h1>DASHBOARD</h1> : <h1>ACESSO PROIBIDO - LOGUE-SE</h1>}
      </div>
    </div>
  );
}

export default Dashboard;
