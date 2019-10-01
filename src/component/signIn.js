import React, { Component } from 'react';
import history from './../History'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",

        }
    }
    onSubmit = (() => {
        console.log('email:', this.state.email)
        if (this.state.email === "aa") {
            // alert('Login Successful!')
            history.push('/home');
        } else {
            alert('Wrong email!')
        }

    })
    render() {
        return (
            <div>
                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                <button type="buttom" onClick={this.onSubmit}>Button </button>
            </div>
        );
    }
}

export default SignIn;