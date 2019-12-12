import React from 'react'
import './menu.css';
import { Link } from "react-router-dom";
import homeIcon from '../../common/images/home.svg'
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

    render() {
      return (
        <div className = 'menu'>
            <span className='menu-btn' onClick={() => this.menuEvent()}> &#9776; Menu</span>
            {this.state.showMenu && <div id="mySidenav" className="sidenav">
                <Link exact='true' to="/"><img src ={homeIcon} alt='Return to Homepage'></img><h4>Home</h4></Link> 
                <Link exact='true' to="/manage/tv-shows"><img src ={tvIcon} alt='Return to Homepage'></img><h4>Manage TV Shows</h4></Link> 
            </div>}
        </div>
      );
    }
};


