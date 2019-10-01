
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Route, Router } from 'react-router-dom';
import Home from "./Home";
 import history from "./../History"
import Signin from "./signIn";

class Routers extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",

    //     }
    // }
    // onSubmit = (() => {
    //     console.log('email:', this.state.email)
    //     if (this.state.email === "  ") {
    //         // alert('Login Successful!')
    //         history.push('/home');
    //     } else {
    //         alert('Wrong email!')
    //     }

    // })
    // onSubmit = (() => {
    //     console.log('email:', this.state.email)
    //     if (this.state.email === "  ") {
    //         // alert('Login Successful!')
    //         history.push('/home');
    //     } else {
    //         alert('Wrong email!')
    //     }

    // })

    render() {

        return (
            <div>
                {/* {this.state.email} */}
                {/* <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                <button type="buttom" onClick={this.onSubmit}>Button </button> */}
                <Router history={history}>
                    <div >
                        <Route exact path="/" component={Signin} />   
                        <Route path="/home" component={Home} />
                        {/* <Route exact path="/" component={Signin} /> */}


                    </div>
                </Router>

            </div>
        )
    }
}

export default Routers;