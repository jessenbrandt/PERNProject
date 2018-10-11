import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

class OrgSignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfOrg: '',
            purpose: '',
            location: '',
            needs: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/org/createorg" , {
            method: 'POST',
            body: JSON.stringify({org:this.state}),
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
                <h6 className="def">What becoming a member means for your Organization.</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label className="lable" for="org">Name of Organization</Label>
                        <Input id="org" type="text" name="org" placeholder="Enter Organization Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="purpose">Purpose</Label>
                        <Input id="purpose" type="text" name="purpose" placeholder="purpose"  onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="location">Location</Label>
                        <Input id="location" type="location" name="location" placeholder="Enter Location"  onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="needs">Needs</Label>
                        <Input id="needs" type="needs" name="needs" placeholder="Enter Needs"  onChange={this.handleChange} />
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

export default OrgSignup;