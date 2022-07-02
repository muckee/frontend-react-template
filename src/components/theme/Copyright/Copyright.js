const { REACT_APP_COMPANY_NAME } = process.env;

const Copyright = props => {
  return (
    <small className={props.className ? props.className : ''}><strong>Copyright &copy; {REACT_APP_COMPANY_NAME} {new Date().getFullYear()}</strong></small>
  );
};

export default Copyright;