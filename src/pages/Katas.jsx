import { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../components/Layout.jsx'
import s from './Landing.css';

class Katas extends Component {
  render() {
    return(
      <Layout>
        The list of availables katas
      </Layout>
    );

  }
}

export default withStyles(s)(Katas);
