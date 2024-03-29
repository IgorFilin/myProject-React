import classes from "./Navbar.module.css";
import NavFriends from "./NavFriends/NavFriends";
import { Link, NavLink } from "react-router-dom";
import React from 'react'
import {NavFriendsContainer} from "./NavFriends/NavFriendsContainer";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to="/profile"
        >
          Профиль
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to="/dialogs"
        >
          Сообщения
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to="/News"
        >
          Новости
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to="/Music"
        >
          Музыка
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={(navData) => (navData.isActive ? classes.activeLink : "")}
          to="/Setting"
        >
          Настройки
        </NavLink>
      </div>
      <NavFriendsContainer/>
    </nav>
  );
};

export default Navbar;
