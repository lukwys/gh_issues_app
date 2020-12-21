import React from 'react';
import {
  Link
} from 'react-router-dom';
import './navigation.scss'
import icon_github from '../assets/icon-github.svg'
import icon_open from '../assets/icon-open-issue.svg'
import icon_closed from '../assets/icon-closed-issue.svg'

export const Navigation = () => {
  
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <span className="navigation__icon"><img src={icon_github} alt="github icon"/></span>
        <Link to="/" className="navigation__link">All</Link>
      </li>
      <li className="navigation__item">
        <span className="navigation__icon"><img src={icon_open} alt="open issue icon"/></span>
        <Link to="/opened" className="navigation__link">Opened</Link>
      </li>
      <li className="navigation__item">
        <span className="navigation__icon"><img src={icon_closed} alt="closed issue icon"/></span>
        <Link to="/closed" className="navigation__link">Closed</Link>
      </li>
    </ul>
  )
}
