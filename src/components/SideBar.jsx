import React, { useState } from 'react';
import './side-bar.scss'

export const SideBar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const onHamburgerClick = () => {
    setMenuActive(!isMenuActive);
  }

  return (
    <section className={`side-bar ${isMenuActive ? 'side-bar--active' : ''}`}>
      <div className="side-bar__hamburger" onClick={onHamburgerClick}></div>
      <nav className="navigation">
        <span>Menu element 1</span>
      </nav>
    </section>
  )
}
