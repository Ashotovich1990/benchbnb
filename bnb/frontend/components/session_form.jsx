import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.udpate = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm({user: this.state});
    }

    render() {
        const link = this.props.formType === 'signup' ? <Link to='/login'>Log In</Link> : <Link to='/signup'>Sign Up</Link>;
        const errors = this.props.errors;
        const content = this.props.currentUser ? <Redirect to='/' /> : (
            <div>
                <form onSubmit={this.handleSubmit}>
                 <label>Username:
                    <input type="text" value={this.state.usernasme} onChange={this.update("username")}/>
                 </label>
                 <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                 </label>
                 <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        );

        return (
            <div>
              {link}
              {errors}
              {content}
            </div>
        )
    }
}

export default SessionForm;