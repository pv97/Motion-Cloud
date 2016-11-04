import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import UserNav from './user_nav';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
