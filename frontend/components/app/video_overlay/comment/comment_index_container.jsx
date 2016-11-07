import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createReply } from '../../../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: state.comments,
  query: state.query,
  errors: state.comments.errors
});

const mapDispatchToProps = (dispatch) => ({
  createReply: (reply) => dispatch(createReply(reply))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
