import { connect } from 'react-redux';
import ReplyForm from './reply_form';
import { createReply } from '../../../../actions/comment_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.comments.errors,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  createReply: (comment) => dispatch(createReply(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyForm);
