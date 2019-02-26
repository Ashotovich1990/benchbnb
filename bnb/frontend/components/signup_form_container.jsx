import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';

const mapStateToProps = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session.errors,
    formType: "signup",
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);