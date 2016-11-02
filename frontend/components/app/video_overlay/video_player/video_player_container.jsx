import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchVideo } from '../../../../actions/video_actions';

const mapStateToProps = state => {
  debugger
    const urlQuery = state.router.location.query;
    return {
        groupByField: urlQuery.groupBy
    }
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (id) => dispatch(fetchVideo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
