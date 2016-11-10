import { connect } from 'react-redux';
import App from './app';
import { fetchVideos } from '../../actions/video_actions';
import { searchVideos } from '../../actions/search_actions';

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  searchVideos: (string) => dispatch(searchVideos(string))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
