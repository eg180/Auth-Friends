import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    // STATE HERE

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    // END STATE

    login = e => {
        e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(req => {
        localStorage.setItem("token", req.data.payload)
        this.props.history.push("/protected");
        this.props.setLoggedIn(true);
    })
    .catch( err => {
        console.log(err)
    });
    };



    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>Log in</button>
            </form>              
            </div>
        )
    }
}
