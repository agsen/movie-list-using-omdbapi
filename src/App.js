import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Home from '@pages/Home'
import DetailMovie from '@pages/DetailMovie'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/detail/:imdbID"><DetailMovie /></Route>
      </Switch>
    </Router>
  );
}

export default App;
