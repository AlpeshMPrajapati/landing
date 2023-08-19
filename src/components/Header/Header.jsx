import React, { useState } from "react";
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const[menuOpened,setMenuOpened] = useState(false)

  const getMenuStyle = (menuOpened)=>{
    if(document.documentElement.clientWidth <= 800){
      return {
        right: !menuOpened && "-100%"
      }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Logo" />

        <OutsideClickHandler
          onOutsideClick={()=>setMenuOpened(false)}
        >
          <div className="flexCenter h-menu"
            style={getMenuStyle(menuOpened)}
          >
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="mailto:alpeshbhaiprajapati398@gmail.com">Contact</a>
            </button>
          </div>
          <div className="menu-icon" onClick={()=>setMenuOpened(!menuOpened)}>
            <BiMenuAltRight size={30}/>
          </div>
      </OutsideClickHandler>

      </div>
    </section>
  );
};

export default Header;
