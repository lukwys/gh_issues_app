import React from 'react';
import { Issue } from './Issue';
import './issues-list.scss'

export const IssuesList = () => {

  return (
    <ul className="issues-list">
      <Issue />
      <Issue />
    </ul>
  )
}
