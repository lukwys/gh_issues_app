import React from 'react';
import { Issue } from './Issue';
import './issues-list.scss'

export const IssuesList = (props) => {
  const { issues } = props;
  
  const issuesList = issues.map(issue => {
    return <Issue title={issue.title} createdDate={issue.created_at} key={issue.id} />
  })

  return (
    <ul className="issues-list">
      {issuesList}
    </ul>
  )
}
