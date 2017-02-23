import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './Guidelines.css';

class Guidelines extends Component {
  render() {
    return(
      <Layout>
        <h1>Pairing Guidelines</h1>
        Le workshop vient de commencer, et vous venez de trouver quelqu'un avec qui coder ? Super ! Voici les étapes suivantes pour commencer à coder :

        <ul>
          <li> Faites un grand sourire, et présentez vous brièvement à votre partenaire de pairing.</li>
          <li> Choisissez un kata que vous voulez coder ensemble.</li>
          <li> Prenez une minute pour lire l'énoncé chacun de votre côté.</li>
          <li> Décidez de qui va coder en premier. Cette personne forke le repo.</li>
          <li> L'autre personne ferme son laptop, et vous commencez à coder en discutant ensemble de ce que vous faites</li>
          <li> Au bout de 10 minutes, faites un commit, pushez, et échangez de rôle. Celle ou celui qui codait ferme son laptop, l'autre pull le repo et continue de coder.</li>
          <li> Echangez environ toutes les dix minutes, jusqu'à ce que vous soyez satisfaits du résultat. :-)</li>
        </ul>


      </Layout>
    );
  }
}

export default withStyles(s)(Guidelines);
