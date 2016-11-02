import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, query }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  query
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
