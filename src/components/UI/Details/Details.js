import styles from './Details.module.css';

const Details = props => {
  return (
    <details className={`${styles.Details} ${props.className ? props.className : ''}`}>
      <summary>{props.summary}</summary>
      {props.children}
    </details>
  );
};

export default Details;