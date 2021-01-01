import React, { useState } from 'react';
import star_icon from '../assets/icon-star.svg';
import star_icon_active from '../assets/icon-star-active.svg';
import './issue.scss';

export const Issue = () => {
  const [isActive, setActive] = useState(false);

  const onIssueClick = () => {
    setActive(!isActive);
  };

  return (
    <li className="issue" onClick={onIssueClick}>
      <span className="issue__title">Page changes</span>
      <div className="issue__icon-wrapper">
        <img src={isActive? star_icon_active : star_icon} alt="star icon"/>
      </div>
    </li>
  )
}
