import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import UserNav from './user_nav';


const mapStateToProps = ({ session, query }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  errors: session.errors,
  query
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
