import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './auth.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit= (e) => {
        fetch("http://localhost:3000/user/signin", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then ((response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <h1 className="logintitle">Login</h1>
                <h6 className="def">Welcome Back, Fool.</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="lable" for="email">Email</Label>
                        <Input id="li_email" type="email" name="email" placeholder="Enter Email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="Enter Password"  onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"  className="loginbutton"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;