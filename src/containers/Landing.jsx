import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Katas from './Katas';
import Guidelines from './Guidelines';
import s from './Landing.css';
import logo from '../assets/logo.png'


class Landing extends Component {
  render() {
    return(
      <Layout>
        <div className={s.hero}>
          <div className={s.logo}>
            <img src={logo} alt="logo" className={s.logoimg} />
            <h1>Paris<br/>Ruby<br/>Workshop</h1>
          </div>
          <h3>
            Un meetup ouvert à tout le monde, pour monter en compétence sur Ruby en pratiquant ensemble.
          </h3>
          <a className={s.button} href="https://www.meetup.com/fr-FR/Paris-Ruby-Workshop">Rejoignez-nous sur Meetup</a>
        </div>
        <div className={s.description}>
          <div className={s.descriptionBlock}>
            <h3>Qui ?</h3>
            <p>Le workshop est un espace public ouvert à tout le monde, expert.e.s comme débutant.e.s.</p>
            <p>Nous voulons en faire un espace inclusif qui accueille tout le monde dans les meilleures conditions. Lisez le <Link to="/code_of_conduct">Code de conduite</Link> avant de participer.</p>
          </div>
          <div className={s.descriptionBlock}>
            <h3>Quand ?</h3>
            <p>Tous les deuxièmes mercredi du mois, à partir de 19h15.</p>
            <p>Vous pouvez vous inscrire pour le prochain workshop sur <Link to="https://www.meetup.com/fr-FR/Paris-Ruby-Workshop">notre page meetup</Link>.</p>
          </div>
          <div className={s.descriptionBlock}>
            <h3>Comment ?</h3>
            <p>Nous travaillons sur des katas, de petits exercices faisable en à peu près une heure.</p>
            <p>Tous les katas se font en pairing, c'est-à-dire que deux personnes travaillent ensemble sur un clavier à la fois.</p>
          </div>
          <div className={s.katas}>
            <Katas/>
          </div>
          <Guidelines/>
          <div className={s.bottomTag}>
            <h3>
              Happy coding!
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(s)(Landing);
