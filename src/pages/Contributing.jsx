import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout'
import Link from '../components/Link'
import s from './Contributing.css';

const Contributing = (props) => (
  <Layout>
    <div className={s.contributing}>
      <h1>Contribuer</h1>
      <p>Le Paris Ruby Workshop est avant tout un espace collaboratif, fait par et pour ses participant.e.s.</p>
      <p>Vous pouvez aider à améliorer le meetup de pleins de manières différentes. Voici quelques exemples:</p>
      <ul>
        <li>
          <p>
            Le plus simple et le plus direct est de nous donner votre feedback après un meetup : qu'est-ce qui vous a plu ? Qu'est ce qu'on pourrait faire mieux ? Qu'est-ce que vous cherchez dans le workshop ?
          </p>
        </li>
        <li>
          <p>
            Les katas sont au centre de nos meetups, vous pouvez en proposer de nouveaux, ou améliorer un kata existant. N'hésitez pas à faire une pull request ou à ouvrir une issue.
          </p>
        </li>
        <li>
          Vous pouvez aussi participer au design ou au contenu de ce site. Une fois de plus, n'hésitez pas à ouvrir une pull request ou une issue.
        </li>
        <li>
          <p>
            Sponsorisez le workshop ! Ça donnera un peu plus de visibilité à votre entreprise dans la communauté ruby, et ça aide à faire vivre le meetup. Contactez Victor à l'adresse victor (at) ahaoho.io pour plus d'infos.
          </p>
        </li>
      </ul>

    </div>
  </Layout>
)

export default withStyles(s)(Contributing);
