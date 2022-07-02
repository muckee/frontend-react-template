import {
    Routes,
    Route,
} from 'react-router-dom';

import About from '../../content/About/About';
import Team from '../../content/Team/Team';
import Roadmap from '../../content/Roadmap/Roadmap';
import Acknowledgements from '../../content/Acknowledgements/Acknowledgements';

import styles from './PageContent.module.css';

const PageContent = props => {
  return (
    <Routes>

        <Route
            path="/"
            element={<About 
            styles={styles}
            />}
        />

        <Route
            path="/team"
            element={<Team 
            styles={styles}
            />}
        />

        <Route
            path="/roadmap"
            element={<Roadmap 
            styles={styles}
            />}
        />

        <Route
            path="/acknowledgements"
            element={<Acknowledgements 
            styles={styles}
            />}
        />

    </Routes>
  );
};

export default PageContent;