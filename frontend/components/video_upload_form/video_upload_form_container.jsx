import { connect } from 'react-redux';
import VideoUploadForm from './video_upload_form';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.videos.errors,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoUploadForm);
