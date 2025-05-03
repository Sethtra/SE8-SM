import React from "react";
import Aside from "../Components/Aside";
import Nav from "../Components/Nav";
import Body from "../Components/Body";

function Dashboard() {
  return (
    <>
        <Aside />
         <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Nav />
        <Body />
        </main>        
    </>
  );
}

export default Dashboard;
