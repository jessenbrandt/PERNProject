import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';
import axios from 'axios';
import './auth.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showAlert: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit= (e) => {

        axios.post("http://localhost:3000/user/signin", {user:this.state})
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                throw new Error('Authentication Failed')
            }
            this.setState({showAlert: false})
            this.props.setToken(response.data.sessionToken, response.data.user.type);
            window.location.href = "/" //redirect user to homepage on successful login
        }).catch((error) => {
            console.log(error);
            this.setState({showAlert: true})
        })
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <h1 className="logintitle">Login</h1>
                <h6 className="def">Welcome Back!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="lable" for="email">Email</Label>
                        <Input id="li_email" type="email" name="email" placeholder="Enter Email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="Enter Password"  onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='success' type="submit"  className="loginbutton"> Submit </Button>
                </Form>
                {this.state.showAlert && <Alert color='danger'>Incorrect Email or Password</Alert>}
            </div>
        )
    }
}

export default Login;