import { connect } from 'react-redux';
import VideoOverlay from './video_overlay';
import { fetchVideo } from '../../../actions/video_actions';
import { setVideoQuery, setCommentQuery } from '../../../actions/query_actions';

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id)),
  setVideoQuery: (id) => dispatch(setVideoQuery(id)),
  setCommentQuery: (c) => dispatch(setCommentQuery(c))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoOverlay);
