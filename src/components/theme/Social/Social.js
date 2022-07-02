import styles from './Social.module.css';

import ListItem from '../../UI/List/ListItem';
import UnorderedList from '../../UI/List/UnorderedList';

const {
  REACT_APP_TWITTER_URL,
  REACT_APP_DISCORD_URL
} = process.env;

const Social = props => {
  return (
    <UnorderedList className={`${styles.socialList} ${props.className ? props.className : ''}`}>

      <ListItem className={styles.socialIcon}>
        <a href={REACT_APP_TWITTER_URL}
          target="_blank"
          rel="noreferrer">
          <i className="ri-twitter-line"></i>
        </a>
      </ListItem>

      <ListItem className={styles.socialIcon}>
        <a href={REACT_APP_DISCORD_URL}
          target="_blank"
          rel="noreferrer">
          <i className="ri-discord-line"></i>
        </a>
      </ListItem>

    </UnorderedList>
  );
};

export default Social;