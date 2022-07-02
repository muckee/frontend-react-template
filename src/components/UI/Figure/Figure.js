import styles from './Figure.module.css';

const Figure = props => {
  return (
    <figure className={`${styles.Figure} ${props.className ? props.className : ''}`}>

      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        style={props.imgStyle ? props.imgStyle : {}}
      />

      <figcaption>{props.children}</figcaption>

    </figure>
  );
};

export default Figure;