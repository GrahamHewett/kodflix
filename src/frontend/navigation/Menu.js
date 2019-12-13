import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import homeIcon from "../../common/images/home.svg";
import tvIcon from "../../common/images/tvIcon.svg";

export default function Menu() {
  // const [showMenu, toggleMenu] = React.useState(false);

  // const menuEvent = () => toggleMenu(!showMenu);
  // // console.log(`Your menu click event is working! ${this.state.showMenu}`)

  const openMenu = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("views").style.opacity = "0.4";
    document.getElementById("views").style.marginLeft = "250px";
  };

  return <div className="menu">
      <span className="menu-btn" onClick={() => openMenu()}>
        &#9776; Menu
      </span>
      <div id="mySidenav" className="sidenav">
        {/*eslint-disable-next-line*/}
        {/* <button className="Xclose" onClick={closeMenu}>
          &times;
        </button> */}
        <Link exact="true" to="/">
          <img src={homeIcon} alt="Return to Homepage"></img>
          <h4>Home</h4>
        </Link>
        <Link exact="true" to="/manage/tv-shows">
          <img src={tvIcon} alt="Return to Homepage"></img>
          <h4>Manage TV Shows</h4>
        </Link>
      </div>
    </div>
}
//check chrome bookmarks for align icon and text in menus.