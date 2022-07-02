import { BrowserRouter } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';

import Section from './components/UI/Section/Section';
import PageHeader from './components/layout/PageHeader/PageHeader';
import Main from './components/UI/Main/Main';
import PageFooter from './components/layout/PageFooter/PageFooter';

import styles from './App.module.css';
import PageContent from './components/layout/PageContent/PageContent';
import Copyright from './components/theme/Copyright/Copyright';

const App = () => {
  return (<BrowserRouter>
    <Section className={styles.App}>



        <PageHeader />

        <Main className={styles.Main}>
          <PageContent />
        </Main>


      <PageFooter>
        <Copyright />
      </PageFooter>
  
    </Section>
  </BrowserRouter>);
}

export default App;
