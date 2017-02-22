import { Route, Router, browserHistory } from 'react-router';
import Landing from './pages/Landing.jsx';
import Katas from './pages/Katas.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/katas" component={Katas} />
  </Router>
);
