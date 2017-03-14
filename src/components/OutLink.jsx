import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Link.css'

const OutLink = props => (
  <a className={s.link} href={props.to}>{props.children}</a>
);

export default withStyles(s)(OutLink);
