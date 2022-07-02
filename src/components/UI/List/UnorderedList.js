import styles from './UnorderedList.module.css';

const UnorderedList = props => {
  return (
    <ul className={`${styles.UnorderedList} ${props.className ? props.className : ''}`}>
      {props.children}
    </ul>
  );
}

export default UnorderedList;
