import { Component } from 'react';
import { Link } from 'react-router'
import Helmet from 'react-helmet';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className={s.app}>
        <Helmet
          title="Paris Ruby Workshop"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <div className={s.topbar}>
          <Link to="/">Paris Ruby Workshop</Link>
          <div className={s.links}>
            <Link to="/katas">Katas</Link>
          </div>
        </div>
        <div className={s.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
