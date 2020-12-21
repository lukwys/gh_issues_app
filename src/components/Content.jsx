import {
  Switch,
  Route,
} from "react-router-dom";
import './content.scss';

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <p>All</p>
      </Route>
      <Route path="/opened">
        <p>Opened</p>
      </Route>
      <Route path="/closed">
        <p>Closed</p>
      </Route>
    </Switch>
  )
}
