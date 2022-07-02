import styles from './OrderedList.module.css';

const OrderedList = props => {
  return (
    <ol className={`${styles.OrderedList} ${props.className ? props.className : ''}`}>
      {props.children}
    </ol>
  );
}

export default OrderedList;
