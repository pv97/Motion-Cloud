import { connect } from 'react-redux';
import VideoUploadForm from './video_upload_form';


const mapStateToProps = ({ videoForm, session }) => ({
  loggedIn: Boolean(session.currentUser),
  videoForm
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoUploadForm);
