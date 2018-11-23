import React from 'react'
import './menu.css';

export default class Menu extends React.Component {

  menuEvent() {
    console.log("Your menu click event is working!")
  }

    render() {
      return (
        <div className ='menu'>
          <svg className='menu-icon' onClick = {() => this.menuEvent()} height = '80px' width = '80px' viewBox = '0 0 24 24' xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"
          fill="white"/></svg>
        </div>
      );
    }
};
