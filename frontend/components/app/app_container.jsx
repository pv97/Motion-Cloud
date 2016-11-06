import { connect } from 'react-redux';
import App from './app';
import { setVideoQuery } from '../../actions/query_actions';

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  setVideoQuery: (id,c) => dispatch(setVideoQuery(id,c))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
