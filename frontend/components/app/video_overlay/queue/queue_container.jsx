import { connect } from 'react-redux';
import Queue from './queue';

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
