import React from "react";
import Header1 from "../Assets/images/bg-header-desktop.svg";

export default function Navbar() {
  return (
    <div className="bg-cover h-[100%vh] w-[100vw]" style={{ backgroundColor: "hsl(180, 29%, 50%)" }}>
      <img src={Header1} alt="navbar" />
    </div>
  );
}
