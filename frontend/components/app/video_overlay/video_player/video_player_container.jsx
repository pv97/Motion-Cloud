import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchVideo } from '../../../../actions/video_actions';
import { setQuery } from '../../../../actions/query_actions';

const mapStateToProps = state => ({
  videos: state.videos,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id)),
  setQuery: (id) => dispatch(setQuery(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
