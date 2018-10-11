import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './auth.css'

class OrgLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfOrg: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit= (e) => {
        fetch("http://localhost:3000/org/orgsignin", {
            method: 'POST',
            body: JSON.stringify({org:this.state}),
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
                        <Label className="lable" for="org">Organization Name</Label>
                        <Input id="li_org" type="org" name="org" placeholder="Enter Organization name" onChange={this.handleChange} />
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

export default OrgLogin;