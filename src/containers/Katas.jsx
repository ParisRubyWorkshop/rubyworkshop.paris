import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx';
import OutLink from '../components/OutLink.jsx';
import s from './Katas.css';
import katas from '../katas.js';

class Katas extends Component {
  render() {
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
        <p>Voici la liste des problèmes sur lesquels nous codons pendant les workshops. Il y en a pour tous les gouts!</p>
        <h4>Débutants</h4>
        <p>Pour découvrir le langage:</p>
        <ul>{renderKatas(katas.beginner)}</ul>

        <h4>Intermédiaires</h4>
        <p>Si vous connaissez déjà les bases et quelques gems:</p>
        <ul>{renderKatas(katas.intermediate)}</ul>

        <h4>Experts</h4>
        <p>Si vous avez déjà travaillé sur un projet Ruby/Rails en production:</p>
        <ul>{renderKatas(katas.expert)}</ul>
      </div>
    );
  }
}

export default withStyles(s)(Katas);
