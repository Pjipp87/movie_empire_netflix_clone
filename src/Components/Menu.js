import React from "react";
import "../Styles/Menu.css";
import { MenuButton } from "./Buttons";
import { SearchField } from "./SearchField";

export const Menu = () => {
  return (
    <div className="menu">
      <h1>MovieEmpire</h1>
      <div className="menuButtonContainer">
        <SearchField type="text"></SearchField>
        <MenuButton to={"/home"}>Startseite</MenuButton>
        <MenuButton to={"/home/movies"}>Filme</MenuButton>
        <MenuButton to={"/home/series"}>Serien</MenuButton>
        <MenuButton to={"/home/myList"}>Meine Liste</MenuButton>
        <MenuButton to={"/home/news"}>Neuerscheinungen</MenuButton>
      </div>
      <MenuButton to={"/home/profile"} className="profileButton">
        Mein Profil
      </MenuButton>
    </div>
  );
};
