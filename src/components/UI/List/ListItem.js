import styles from './ListItem.module.css';

const ListItem = props => {
  return (
    <li className={`${styles.ListItem} ${props.className ? props.className : ''}`}>
      {props.children}
    </li>
  );
}

export default ListItem;
