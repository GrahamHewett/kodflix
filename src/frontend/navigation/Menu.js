import React from 'react'
import './menu.css';
import { Link } from "react-router-dom";
import homeIcon from '../../common/images/home2.svg'
import tvIcon from '../../common/images/tvIcon.svg'


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
                <Link exact='true' to="/"><img src ={homeIcon} alt='Return to Homepage'></img><h4>Home</h4></Link> 
                <Link exact='true' to="/manage/tv-shows"><img src ={tvIcon} alt='Return to Homepage'></img><h4>Manage TV Shows</h4></Link> 
            </div>
        </div>

      );
    }
};


