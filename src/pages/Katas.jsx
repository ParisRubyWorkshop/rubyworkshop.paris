import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './Landing.css';


function KataListElement(props) {
  return (
    <li>
      <p>
        <a href={"https://github.com/" + props.repo}>{props.name}</a> : { props.description }
      </p>
    </li>
  );
}

class Katas extends Component {
  render() {
    return(
      <Layout>
        <div>
        <h4>Débutants</h4>
        <p>Pour découvrir le langage:</p>
        <ul>
          <KataListElement
            repo="ParisRubyWorkshop/ruby-beer-song"
            name="99 Bottles"
            description="Ecrire la chanson. =)"
          />
          <KataListElement
            repo="ParisRubyWorkshop/cryptographer"
            name="Cryptographer"
            description="Ecrire le ROT-13."
          />
          <KataListElement
            repo="ParisRubyWorkshop/bubble_sort"
            name="Bubble_sort"
            description="Faire du tri à bulle."
          />
          <KataListElement
            repo="ParisRubyWorkshop/grandma"
            name="Grandma"
            description="Pour vous familiariser avec les bases de la syntaxe"
          />
          <KataListElement
            repo="ParisRubyWorkshop/ruby-exercises"
            name="Ruby-exercices"
            description="Une série d’exercices sur différents aspects du langage Ruby."
          />
          <KataListElement
            repo="ParisRubyWorkshop/ruby-robot-simulator"
            name="Robot Simulator"
            description="Un petit robot qui se déplace en fonction des instructions qu’on lui donne."
          />
        </ul>

        <h4>Intermédiaires</h4>
        <p>Si vous connaissez déjà les bases et quelques gems:</p>
        <ul>
          <li><a href="https://github.com/ParisRubyWorkshop/file-to-api-kata">Du fichier à l’api</a>: Faites une api à partir d’un fichier json.</li>
          <li><a href="https://github.com/livementor/katas/tree/master/filedb">FileDB</a> : Faites une base de données à partir d’un fichier json. Kata réalisé par LiveMentor :D</li>
          <li><a href="https://github.com/ParisRubyWorkshop/action-cable-example">ActionCableExample</a> : Fabriquez un chat en temps réel avec Action Cable</li>
          <li><a href="https://github.com/ParisRubyWorkshop/ruby-custom-set">CustomSet</a> : Réimplémentez la classe Set. Ce kata vient de <a href="https://exercism.io">exercism</a> etcomporte une suite de tests qui vous permettra de faire du TDD.</li>
        </ul>

        <h4>Experts</h4>
        <p>Si vous avez déjà travaillé sur un projet Ruby/Rails en production pendant quelques temps:</p>
        <ul>
          <li><a href="https://github.com/ParisRubyWorkshop/spec-this-not-that-kata">Spec This Not That</a>: Quelles specs faire tourner sur une grosse suite de tests ?</li>
        </ul>
      </div>
      </Layout>
    );

  }
}

export default withStyles(s)(Katas);
