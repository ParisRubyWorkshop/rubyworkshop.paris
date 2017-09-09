import { Component } from 'react';
import { Link } from 'react-router'
import Helmet from 'react-helmet';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className={s.app}>
        <Helmet
          title="Paris Ruby Workshop"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
          script={[
            {innerHTML: `
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                  ga('create', 'UA-93494963-1', 'auto');
                  ga('send', 'pageview');
                `}
          ]}
        />
        <div className={s.topbar}>
          <Link to="/">Paris Ruby Workshop</Link>
          <div className={s.links}>
            <Link to="/code_of_conduct">Code of Conduct</Link>
            <Link to="/contributing">Contribuer</Link>
          </div>
        </div>
        <div className={s.content}>
          { this.props.children }
        </div>
        <div className={s.footer}>
          <p>
            <a href="https://github.com/ParisRubyWorkshop/parisrubyworkshop.org">Fork us on gihub!</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
