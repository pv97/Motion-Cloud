import { connect } from 'react-redux';
import UserPage from './user_page';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
  user: state.user,
  query: state.query
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
