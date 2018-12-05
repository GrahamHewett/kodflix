import React from 'react'
import './menu.css';
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {showMenu: false}
  }

  menuEvent() {
    this.setState({showMenu : !this.state.showMenu})
    console.log(`Your menu click event is working! ${this.state.showMenu}`)
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("views").style.opacity = "0.4";
    document.getElementById("views").style.marginLeft= "250px";
}

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("views").style.marginLeft= "0";
    document.getElementById("views").style.opacity = "1";

}

    render() {
      return (
        <div className = 'menu'>
            <span className='menu-btn' onClick={() => this.openNav()}> &#9776; Menu</span>
            <div id="mySidenav" className="sidenav"> {/*eslint-disable-next-line*/}
                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                <Link exact='true' to="/">Home</Link> 
                <Link exact='true' to="/manage/tv-shows">Manage TV Shows</Link> 
            </div>
        </div>

      );
    }
};


