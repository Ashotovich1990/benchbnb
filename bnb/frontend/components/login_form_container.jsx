import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session.errors,
    formType: "login",
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);