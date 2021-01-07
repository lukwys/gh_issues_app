import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { IssuesList } from './IssuesList';
import { fetchIssues } from '../services/fetchService';
import './content.scss';

export const Content = () => {
  const [issues, setIssues] = useState([]);
  const [openedIssues, setOpenedIssues] = useState([]);
  const [closedIssues, setClosedIssues] = useState([]);

  useEffect(() => {
    const fetchIssuess = async () => {
      const issues = await fetchIssues();
      
      setIssues(issues);
      setOpenedIssues(issues.filter(issue => issue.state === 'open'));
      setClosedIssues(issues.filter(issue => issue.state === 'closed'));
    }
    fetchIssuess();
  }, []);
  
  return (
    <Switch>
      <Route exact path="/">
        <IssuesList issues={issues} />
      </Route>
      <Route path="/opened">
        <IssuesList issues={openedIssues} />
      </Route>
      <Route path="/closed">
        <IssuesList issues={closedIssues} />
      </Route>
    </Switch>
  )
}
