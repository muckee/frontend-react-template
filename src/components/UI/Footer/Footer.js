import styles from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={`${styles.Footer} ${props.className ? props.className : ''}`}>
      {props.children}
    </footer>
  );
};

export default Footer;