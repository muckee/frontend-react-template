import Header from '../../UI/Header/Header';
import Brand from '../../theme/Brand/Brand';
import Social from '../../theme/Social/Social';
import PageNavigation from './PageNavigation/PageNavigation';

const PageHeader = () => {
  return (
    <Header>

        <Social />

        <Brand />

        <PageNavigation />

    </Header>
  );
}

export default PageHeader;
