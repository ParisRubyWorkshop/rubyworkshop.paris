import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './Guidelines.css';

class Guidelines extends Component {
  render() {
    return(
      <Layout>
        <h1>Mode d'emploi</h1>
          Le workshop vient de commencer, et vous venez de trouver quelqu'un avec qui coder ? Super ! Voici les étapes suivantes pour commencer le workshop :
        <ul>
          <li><p> Faites un grand sourire, et présentez vous brièvement à votre partenaire de pairing.</p></li>
          <li><p> Choisissez un kata que vous voulez coder ensemble.</p></li>
          <li><p> Prenez une minute pour lire l'énoncé chacun de votre côté.</p></li>
          <li><p>Décidez de qui va coder en premier. Cette personne forke le repo.</p></li>
          <li><p>L'autre personne ferme son laptop, et vous commencez à coder en discutant ensemble de ce que vous faites</p></li>
          <li><p>Au bout de 10 minutes, faites un commit, pushez, et échangez de rôle. Celle ou celui qui codait ferme son laptop, l'autre pull le repo et continue de coder.</p></li>
          <li><p>Echangez environ toutes les dix minutes, jusqu'à ce que vous soyez satisfaits du résultat. :-)</p></li>
        </ul>


      </Layout>
    );
  }
}

export default withStyles(s)(Guidelines);
