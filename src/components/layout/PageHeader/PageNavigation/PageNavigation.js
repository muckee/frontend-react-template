import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from '../../../UI/Nav/Nav';
import ListItem from '../../../UI/List/ListItem';
import UnorderedList from '../../../UI/List/UnorderedList';

import styles from './PageNavigation.module.css';

const PageNavigation = props => {

  const pageNavigation = useRef(null);

  const menuItems = [
    {
      label: 'About',
      linkTo: '/',
    },
    {
      label: 'Team',
      linkTo: '/team'
    },
    {
      label: 'Roadmap',
      linkTo: '/roadmap'
    },
    {
      label: 'Acknowledgements',
      linkTo: '/acknowledgements'
    },
  ];

  const menuItemsMap = menuItems.map((menuItem, index) => <NavLink key={index} to={menuItem.linkTo}>
    <ListItem>
      {menuItem.label}
    </ListItem>
  </NavLink>);

  return (
    <Nav ref={pageNavigation}>

      <UnorderedList className={styles.NavList}>

        {menuItemsMap}

      </UnorderedList>
    </Nav>
  );
};

export default PageNavigation;