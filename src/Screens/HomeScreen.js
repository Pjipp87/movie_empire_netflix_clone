import React from "react";
import "../Styles/HomeScreen.css";
import { Menu } from "../Components/Menu";
import { Outlet } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Menu></Menu>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
