import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment } from '../../../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: state.comments,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
