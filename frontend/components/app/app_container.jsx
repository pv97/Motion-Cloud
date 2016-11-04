import { connect } from 'react-redux';
import App from './app';
import { setQuery } from '../../actions/query_actions';

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  setQuery: (id) => dispatch(setQuery(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
