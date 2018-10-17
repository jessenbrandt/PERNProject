import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import './volunteer.css'


class EventTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eventName: '',
            description: '',
            eventLocation: '',
            showSuccess: false
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
        fetch(`http://localhost:3000/events/createEvent`, {
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
                    eventName: '',
                    description: '',
                    eventLocation: '',
                    showSuccess: true
                })
            })
        }


    render() {
        return (
            <div className="createorgdiv">
                <h3 className="title">Create an Event</h3>
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} className="eventform">
                    <FormGroup>
                        <Label for="status">Event Name</Label>
                        <Input className="createinput"id="status" type="text" name="eventName" value={this.state.eventName} placeholder="Enter Event Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Description </Label>
                        <Input className="createinput" type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} placeholder="Type">
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Event Location</Label>
                        <Input className="createinput" id="description" type="text" name="eventLocation" value={this.state.eventLocation} placeholder="Enter Event Location" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className='submitbutton' type="submit" color="success"> Submit </Button>
                    <Button className='cancelbutton' type="submit" color='grey'><i className="fas fa-times-circle"></i></Button>
                </Form>
                {this.state.showSuccess && (<Alert color='success'>Event Created!</Alert>)}
            </div>
        )
    }
}

export default EventTable;