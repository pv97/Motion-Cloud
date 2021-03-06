import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
