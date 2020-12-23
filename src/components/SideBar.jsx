import React, { useState } from 'react';
import { Navigation } from './Navigation';
import menu_icon from '../assets/menu.png';
import cross_icon from '../assets/cross-mark.png';
import './side-bar.scss'

export const SideBar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [activeIcon, setActiveIcon] = useState(menu_icon);

  const onHamburgerClick = () => {
    setActiveIcon(!isMenuActive ? cross_icon : menu_icon);
    setMenuActive(!isMenuActive);
  }

  return (
    <section className={`side-bar ${isMenuActive ? 'side-bar--active' : ''}`}>
      <div className="side-bar__hamburger-wrapper" onClick={onHamburgerClick}>
        <img className="side-bar__hamburger-icon" src={activeIcon} alt="menu icon"/>
        <p className={activeIcon}></p>
      </div>
      <Navigation />
    </section>
  )
}
