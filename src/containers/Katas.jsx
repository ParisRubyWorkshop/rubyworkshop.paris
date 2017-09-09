import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx';
import OutLink from '../components/OutLink.jsx';
import s from './Katas.css';
import katas from '../katas.js';

class Katas extends Component {
  render() {
    const KataList = ({title, description, katas}) => (
      <div className={s.kata_list}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{renderKatas(katas)}</ul>
      </div>
    )

    const renderKatas = (katas) => (
      katas.map((kata) => {
        return(
          <li key={kata.repo}>
            <p>
              <OutLink to={"https://github.com/" + kata.repo}>{kata.name}</OutLink> : { kata.description }
            </p>
          </li>
        )
      })
    )

    return(
      <div className={s.katas}>
        <h1>Katas</h1>
        <KataList
          title="Débutants"
          description="Pour découvrir le langage"
          katas={katas.beginner} />

        <KataList
          title="Intermédiaires"
          description="Si vous connaissez déjà les bases et quelques gems:"
          katas={katas.intermediate} />

        <KataList
          title="Experts"
          description="Si vous avez déjà travaillé sur un projet Ruby/Rails en production:"
          katas={katas.expert} />

      </div>
    );
  }
}

export default withStyles(s)(Katas);
