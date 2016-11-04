import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.videos.errors,
  videos: state.videos
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
