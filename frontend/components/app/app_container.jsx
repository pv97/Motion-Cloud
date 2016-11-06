import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
