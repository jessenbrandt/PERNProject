import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/user/createuser" , {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).this((data) => {
            this.props.setToken(data.sessionToken)
        })
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1 className="logintitle">Signup</h1>
                <h6 className="def">What becoming a member means for you.</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label className="lable" for="firstname">First Name</Label>
                        <Input id="firstname" type="text" name="firstname" placeholder="Enter First Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="lastname">Last Name</Label>
                        <Input id="lastname" type="text" name="firstname" placeholder="Enter Last Name"  onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="email">Email</Label>
                        <Input id="email" type="email" name="email" placeholder="Enter Email"  onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="Enter Password"  onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" className='loginbutton'> Submit </Button>
                </Form>
            </div>
        )
    }

}

export default Signup;