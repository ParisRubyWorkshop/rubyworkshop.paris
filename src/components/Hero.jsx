import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css';

class Hero extends Component {
  render() {
    return(
      <div className={s.hero}>
        <p>
          Le Paris Ruby Workshop est un meetup ouvert à tout le monde, qui permet de monter en compétence sur Ruby en pratiquant ensemble.
      </p>
    </div>
    );

  }
}

export default withStyles(s)(Hero);
