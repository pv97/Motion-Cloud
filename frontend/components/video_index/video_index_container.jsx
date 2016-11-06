import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';
import merge from 'lodash/merge';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
