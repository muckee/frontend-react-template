import Section from "../../UI/Section/Section";

import logo from './logo.svg';
import styles from './Brand.module.css';

const { REACT_APP_PROJECT_NAME } = process.env;

const Brand = () => {
    return <Section className={styles.BrandSection}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <h1>{REACT_APP_PROJECT_NAME}</h1>
    </Section>;
}

    

export default Brand;