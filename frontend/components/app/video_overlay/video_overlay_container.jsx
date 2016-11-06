import { connect } from 'react-redux';
import VideoOverlay from './video_overlay';
import { fetchVideo } from '../../../actions/video_actions';
import { setVideoQuery } from '../../../actions/query_actions';

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id)),
  setVideoQuery: (id,c) => dispatch(setVideoQuery(id,c))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoOverlay);
