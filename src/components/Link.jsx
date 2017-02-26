import { Link as RouterLink } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Link.css'

const Link = props => (
  <RouterLink className={s.link} to={props.to}>{props.children}</RouterLink>
);


export default withStyles(s)(Link);
