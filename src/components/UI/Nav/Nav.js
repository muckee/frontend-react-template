import {forwardRef} from 'react';
import styles from './Nav.module.css';

const Nav = forwardRef((props, ref) => (
  <nav ref={ref} className={`${styles.Nav} ${props.className ? props.className : ''}`}>
    {props.children}
  </nav>
));

export default Nav;