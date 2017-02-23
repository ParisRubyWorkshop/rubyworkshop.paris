import { Route, Router, browserHistory } from 'react-router';
import Landing from './pages/Landing.jsx';
import Katas from './pages/Katas.jsx';
import Guidelines from './pages/Guidelines.jsx';
import CodeOfConduct from './pages/CodeOfConduct.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/katas" component={Katas} />
    <Route path="/guidelines" component={Guidelines} />
    <Route path="/code_of_conduct" component={CodeOfConduct} />
  </Router>
);
