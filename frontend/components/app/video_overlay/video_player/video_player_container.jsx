import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchVideo } from '../../../../actions/video_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.videos.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
