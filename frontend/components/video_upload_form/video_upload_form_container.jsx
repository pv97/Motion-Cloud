import { connect } from 'react-redux';
import VideoUploadForm from './video_upload_form';
import createVideo from '../../actions/video_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoUploadForm);
