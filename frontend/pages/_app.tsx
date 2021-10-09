import PropTypes from 'prop-types';
import '../styles/GlobalStyles.css';

function MyApp({ Component }) {
  return <Component />; // eslint-disable-line react/jsx-props-no-spreading
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default MyApp;
