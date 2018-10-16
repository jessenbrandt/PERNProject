import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './profile.css'


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameOfOrg: '',
            needs: '',
            purpose: '',
            location: ''
        };
    }

    handleChange = (event) => {
        // try console.log(event) to see when this method will be invoked
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/org/createOrg`, {
            method: 'POST',
            body: JSON.stringify(this.state ),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        })
            // .then((res) => res.json())
            .then((logData) => {
                this.setState({
                    nameOfOrg: '',
                    needs: '',
                    purpose: '',
                    location: ''
                })
                window.location.href = "/mainprofile"
            })
        }


    render() {
        return (
            <div className="createorgdiv">
                <h3 className="title">Tell Us More About Your Organization</h3>
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} className="orgform">
                    <FormGroup className='formgrouporg'>
                        <Label for="status">Name of Organization</Label>
                        <Input className="createinput" id="status" type="text" name="nameOfOrg" value={this.state.nameOfOrg} placeholder="Enter Organization Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Purpose</Label>
                        <Input className="createinput" type="text" name="purpose" id="definition" value={this.state.purpose} onChange={this.handleChange} placeholder="Type">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Location</Label>
                        <Input className="createinput" id="description" type="text" name="location" value={this.state.location} placeholder="Enter Location" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Needs</Label>
                        <Input className="createinput" id="description" type="text" name="needs" value={this.state.needs} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className='submitbutton' type="submit" color="success"> Submit </Button>
                    <Button className='cancelbutton' type="submit" color='grey'><i className="fas fa-times-circle"></i></Button>
                </Form>
            </div>
        )
    }
}

export default Profile;