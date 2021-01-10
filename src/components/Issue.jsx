import React, { useState } from 'react';
import star_icon from '../assets/icon-star.svg';
import star_icon_active from '../assets/icon-star-active.svg';
import './issue.scss';

export const Issue = (props) => {
  const { title, createdDate } = props;
  const [isActive, setActive] = useState(false);

  const onIssueClick = () => {
    setActive(!isActive);
  };

  return (
    <li className="issue">
      <span className="issue__created-time">{createdDate}</span>
      <div className="issue__wrapper" onClick={onIssueClick}>
        <span className="issue__title">{title}</span>
        <div className="issue__icon-wrapper">
          <img src={isActive? star_icon_active : star_icon} alt="star icon"/>
        </div>
      </div>
    </li>
  )
}
