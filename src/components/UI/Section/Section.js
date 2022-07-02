import styles from './Section.module.css';

const Section = props => {
  return (
    <section
    style={props.style}
    className={`${styles.Section} ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Section;