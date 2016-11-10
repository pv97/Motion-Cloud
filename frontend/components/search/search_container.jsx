import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  search: state.search,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
