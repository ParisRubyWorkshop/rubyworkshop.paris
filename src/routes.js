import { Route, Router, browserHistory } from 'react-router';
import Landing from './containers/Landing.jsx';
import Katas from './containers/Katas.jsx';
import Guidelines from './containers/Guidelines.jsx';
import CodeOfConduct from './containers/CodeOfConduct.jsx';
import Contributing from './containers/Contributing.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/code_of_conduct" component={CodeOfConduct} />
    <Route path="/contributing" component={Contributing} />
  </Router>
);

