import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css';

class Landing extends Component {
  render() {
    return(
      <div>
        <div className={s.hero}>
          <h1>Paris Ruby Workshop</h1>
          <p>
            Un meetup ouvert à tout le monde, pour monter en compétence sur Ruby en pratiquant ensemble.
          </p>
          <a className={s.button} href="https://www.meetup.com/fr-FR/Paris-Ruby-Workshop">Rejoignez nous sur Meetup</a>
        </div>
        <div className={s.description}>
        </div>
      </div>
    );

  }
}

export default withStyles(s)(Landing);
