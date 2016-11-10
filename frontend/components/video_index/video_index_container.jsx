import { connect } from 'react-redux';
import VideoIndex from './video_index';
import merge from 'lodash/merge';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
