import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            type: 'volunteer',
            showAlert: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/user/createuser", {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Authentication Failed')
            }
            return response
        }
        ).then((data) => {
            this.setState({ showAlert: false })
            this.props.setToken(data.sessionToken)
            window.location.href = "/" //redirect user to homepage on successful login
        }).catch((error) => {
            console.log(error);
            this.setState({ showAlert: true })
        })
        e.preventDefault()
    }

    changeType = (type) => {
        this.setState({type: type});
    }

    render() {
        return (
            <div>
                <h1 className="logintitle">Signup</h1>
                <h6 className="def">Join the Charity Community!</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup className='row'>
                        <div className='col-md-2'>
                            <Label className="lable" for="volunbutton">Volunteer</Label>
                            <Label className="lable" for="orgbutton">Organization</Label>    
                        </div>
                        <div className='col-md-2 radioButtons'>
                            <Input id='volunbutton' onClick={this.changeType.bind(this,"volunteer")} type='radio' name='type' />
                            <br/>
                            <div  className='radio'>
                                <Input id='orgbutton' onClick={this.changeType.bind(this, "organization")} type='radio' name='type'  />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="firstname">First Name</Label>
                        <Input id="firstname" type="text" name="firstname" placeholder="Enter First Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="lastname">Last Name</Label>
                        <Input id="lastname" type="text" name="firstname" placeholder="Enter Last Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="email">Email</Label>
                        <Input id="email" type="email" name="email" placeholder="Enter Email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="lable" for="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" className='loginbutton'> Submit </Button>
                </Form>
                {this.state.showAlert && <Alert color='danger'>Incorrect </Alert>}
            </div>
        )
    }

}

export default Signup;