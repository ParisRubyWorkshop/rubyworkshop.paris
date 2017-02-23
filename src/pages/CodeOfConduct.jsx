import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './CodeOfConduct.css';

class CodeOfConduct extends Component {
  render() {
    return(
      <Layout>
      <h1> Code de conduite du Paris Ruby Workshop</h1>

      <p>
      Le but premier du Paris Ruby Workshop est d'accueillir *tou.te.s* les nouveaux.elles venu.e.s dans la communauté ruby parisienne, et de permettre à tou.te.s d'échanger sur des sujets techniques et humains autour du Ruby et du logiciel en général.
      <br/>
      Nous voulons donc faire du workshop un cadre agréable où chacun.e se sent en sécurité. En participant au workshop vous rencontrerez des gens différents de vous: soyez respecteux.ses de leur identité aussi bien que de leur manière de coder. Nous attendons de vous une coopération pour assurer un environnement sain et agréable pour tou.te.s.

      <br/>
      Tou.te.s les participant.e.s et sponsors du workshop doivent accepter ce code de conduite.
      Ce code de conduite est inspiré du Code of Conduct de la <a href="http://2012.jsconf.us/#/about">JS conf 2012</a>. Si vous pensez qu'il peut être amélioré, nous serons ravi.e.s d'en discuter à l'oral, sur slack ou via une pull request.

      <br/>
      Les organisateurs s'attacheront à faire respecter ce code pendant le workshop.


      </p>
      <p>
      Notre workshop se veut une expérience sans harcèlement, quelque soit votre genre, orientation sexuelle, handicap, votre apparence physique, votre poids ou votre religion. Nous ne tolérons aucun harcèlement des participant.e.s au workshop, quelque soit sa forme. Les participant.e.s au workshop qui ne respectent pas ces règles peuvent être exclus du workshop, à la discrétion des organisateurs du workshop.
      <br/>

      Le harcèlement inclut des commentaires sur le sexe, l'orientation sexuelle, le handicap, l'apparence physique, le poids, la race, ou la religion, ainsi que les images à connotation sexuelle dans des lieux publics, les intimidations délibérées, la traque, la poursuite, un harcèlement photographique ou vidéo, un contact physique inapproprié et des avances sexuelles non désirées.
      <br/>

      Les participant.e.s à qui il sera demandé d'arrêter tout comportement de harcèlement devront arrêter immédiatement.
      <br/>

      Les sponsors sont aussi sujet à la politique anti-harcèlement. En particulier, les sponsors ne doivent pas utiliser d'images ou de matériels à connotation sexuelle. Ils ne doivent pas non plus engager d'activités à connotation sexuelle.
      Ils ne doivent pas non plus créer un environnement sexualisé.
      <br/>

      Si un participant a un comportement de harcèlement, les organisateurs du workshop peuvent prendre toute action qui leur semble adéquate. Cela va d'un simple avertissement à l'exclusion du participant du workshop.
      <br/>

      Si vous vous sentez harcelé, si vous pensez que quelqu'un se fait harceler, et plus généralement en cas de problème, merci de contacter immédiatement un membre de l'organisation du workshop
      <br/>

    </p>
    <h4>En cas de problème</h4>
    Si vous rencontrez un problème, parlez-en sans hésiter à l'équipe d'organisation.
      <br/>

      Gérer soi-même ce qui vous tient à coeur n'est pas toujours facile, et nous vous aiderons.
      <br/>

      N'hésitez pas à faire référence à ce code de déontologie.
      <br/>

      <h4>Vous êtes dans l'équipe d'organisation et on vous remonte un problème</h4>

      <p>
        Proposez à la personne de s'asseoir à part, demandez si il ou elle souhaite la présence d'un.e ami.e de confiance, et proposez votre aide.
      <br/>

      Notez un maximum de détails : nom, prénom, comportement offensant. S'il y a un problème sur la santé des personnes, contactez les services d'urgence. Si non, ne le faites que sur demande de la victime.
      <br/>

      Après cela, confrontez la personne à l'origine de l'offense (sans le ou la plaignant.e) pour la laisser énoncer sa version des faits. Si l'affaire l'exige toujours, rappelez l'existence de ce code et les sanctions possibles.
      <br/>

      Dans la plupart des cas, en pratique, exiger des excuses est rarement une bonne idée.
      <br/>

      Si l'événement le nécessite ou que d'autres personnes se sont senties offensées, une annonce publique peut être faite. Faites-la courte, et invitez au débat par la suite et via les organisateurs.
      <br/>

      </p>
    </Layout>
    );
  }
}

export default withStyles(s)(CodeOfConduct);
