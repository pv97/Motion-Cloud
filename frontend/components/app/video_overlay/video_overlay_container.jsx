import { connect } from 'react-redux';
import VideoOverlay from './video_overlay';
import { fetchVideo } from '../../../actions/video_actions';
import { setQuery } from '../../../actions/query_actions';

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id)),
  setQuery: (query) => dispatch(setQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoOverlay);
