import React from 'react';
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Issue } from './Issue';
import './issues-list.scss'

export const IssuesList = (props) => {
  const { issues } = props;
  const createdDates = [];

  const setUniqueDates = (id, date) => {
    if (createdDates.length === 0 || createdDates[createdDates.length - 1].date !== date) createdDates.push({id, date});
  }

  const getUniqueDates = (id) => {
    return createdDates.map(createdDate => {
      if(createdDate.id === id) return createdDate.date;
    });
  }
  
  const issuesList = issues.map(issue => {
    const createdDate = format(parseISO(issue.created_at), 'dd-MM-yyyy');

    setUniqueDates(issue.id, createdDate);

    return <Issue title={issue.title} createdDate={getUniqueDates(issue.id)} key={issue.id} />
  })

  return (
    <ul className="issues-list">
      {issuesList}
    </ul>
  )
}
