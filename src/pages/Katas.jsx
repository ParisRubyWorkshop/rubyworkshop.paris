import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx';
import Link from '../components/Link.jsx';
import s from './Katas.css';


function KataListElement(props) {
  return (
    <li>
      <p>
        <Link to={"https://github.com/" + props.repo}>{props.name}</Link> : { props.description }
      </p>
    </li>
  );
}

class Katas extends Component {
  render() {
    return(
      <Layout>
        <div>
        <h1>Katas</h1>
        <p>Voici la liste des problèmes sur lesquels nous codons pendant les workshops. Il y en a pour tous les gouts!</p>
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
          <KataListElement
            repo="ParisRubyWorkshop/file-to-api-kata"
            name="Du fichier à l’api"
            description="Faites une api à partir d’un fichier json."
          />
          <KataListElement
            repo="livementor/katas/tree/master/filedb"
            name="FileDB"
            description="Faites une base de données à partir d’un fichier json. Kata réalisé par LiveMentor :D"
          />
          <KataListElement
            repo="ParisRubyWorkshop/action-cable-example"
            name="ActionCableExample"
            description="Fabriquez un chat en temps réel avec Action Cable"
          />
          <KataListElement
            repo="ParisRubyWorkshop/ruby-custom-set"
            name="CustomSet"
            description="Réimplémentez la classe Set."
          />
        </ul>

        <h4>Experts</h4>
        <p>Si vous avez déjà travaillé sur un projet Ruby/Rails en production pendant quelques temps:</p>
        <ul>
          <KataListElement
            repo="ParisRubyWorkshop/spec-this-not-that-kata"
            name="Spec This Not That"
            description="Quelles specs faire tourner sur une grosse suite de tests ?"
          />
        </ul>
      </div>
      </Layout>
    );

  }
}

export default withStyles(s)(Katas);
