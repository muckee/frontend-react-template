import styles from './Article.module.css';

const Article = props => {

  const titles = {};

  const setHeadingSize = (
    headingSize, 
    heading,
    isSubHeading = false,
  ) => {
    switch(props.headingSize) {
      case '1':

        if(isSubHeading) {
          return <h2 className={styles.titleCase}>{props.subHeading}</h2>;
        }

        return <h1 className={styles.upperCase}>{props.heading}</h1>;
      // case '2':

      //   if(isSubHeading) {
      //     return <h3 className={styles.titleCase}>{props.subHeading}</h3>;
      //   }

      //   return <h2 className={styles.upperCase}>{props.heading}</h2>;
      case '3':

        if(isSubHeading) {
          return <h4 className={styles.titleCase}>{props.subHeading}</h4>;
        }

        return <h3 className={styles.upperCase}>{props.heading}</h3>;
      case '4':

        if(isSubHeading) {
          return <h5 className={styles.titleCase}>{props.subHeading}</h5>;
        }

        return <h4 className={styles.upperCase}>{props.heading}</h4>;
      case '5':

        if(isSubHeading) {
          return <h6 className={styles.titleCase}>{props.subHeading}</h6>;
        }

        return <h5 className={styles.upperCase}>{props.heading}</h5>;
      case '6':

        if(isSubHeading) {
          return <small className={styles.titleCase}>{props.subHeading}</small>;
        }

        return <h6 className={styles.upperCase}>{props.heading}</h6>;
      default:

        if(isSubHeading) {
          return <h3 className={styles.titleCase}>{props.subHeading}</h3>;
        }

        return <h2 className={styles.upperCase}>{props.heading}</h2>;
    }
  }

  if(props.heading) {
    if(props.headingSize) {
      titles['heading'] = setHeadingSize(props.headingSize, props.heading);
    } else {
      titles['heading'] = <h2 className={styles.upperCase}>{props.heading}</h2>;
    }
  }
  if(props.subHeading) {
    if(props.headingSize) {
      titles['subHeading'] = setHeadingSize(props.headingSize, props.heading, true);
    } else {
      titles['subHeading'] = <h3 className={styles.titleCase}>{props.subHeading}</h3>;
    }
  }

  return (
    <article className={`${styles.Article} ${props.className ? props.className : ''}`}>
      {titles['heading'] && titles['heading']}
      {titles['subHeading'] && titles['subHeading']}
      {props.image && <img src={props.image} alt={props.imageAlt} />}
      {props.content && props.content}
      {props.children && props.children}
    </article>
  );
};

export default Article;