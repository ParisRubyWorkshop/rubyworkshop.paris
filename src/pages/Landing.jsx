import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './Landing.css';

class Landing extends Component {
  render() {
    return(
      <Layout>
        <div className={s.hero}>
          <h1>Paris Ruby Workshop</h1>
          <p>
            Un meetup ouvert à tout le monde, pour monter en compétence sur Ruby en pratiquant ensemble.
          </p>
          <a className={s.button} href="https://www.meetup.com/fr-FR/Paris-Ruby-Workshop">Rejoignez nous sur Meetup</a>
        </div>
        <div className={s.description}>
        </div>
      </Layout>
    );

  }
}

export default withStyles(s)(Landing);
