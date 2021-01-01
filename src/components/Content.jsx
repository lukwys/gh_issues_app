import { Switch, Route } from "react-router-dom";
import { IssuesList } from './IssuesList';
import './content.scss';

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <IssuesList></IssuesList>
      </Route>
      <Route path="/opened">
        <IssuesList></IssuesList>
      </Route>
      <Route path="/closed">
        <IssuesList></IssuesList>
      </Route>
    </Switch>
  )
}
