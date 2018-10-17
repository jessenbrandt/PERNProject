import React from 'react';
import axios from 'axios';
import EventDataSec from './EventDataSec'
import { Form, Label, FormGroup, Input } from 'reactstrap'

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            updatePressed: false,
            eventToUpdate: {}
        };

    }

    componentDidMount() {
        axios.get('http://localhost:3000/events')
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }

    handleEventChange = (e) => {
        let objectToChange = {};
        Object.defineProperty(objectToChange, e.target.name, { value: e.target.value, writable: true, configurable: true, enumerable: true })
        console.log(this.state);
        console.log(objectToChange);
        this.setState(objectToChange);
    }

    handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/events/${e._targetInst.return.key.substring(1)}`)
            .then(res => {
                console.log(res);
                console.log('sfasdf');
                this.forceUpdate();
            })
    }

    eventUpdate = (e, event) => {
        console.log(this.state)
        fetch(`http://localhost:3000/events/${e._targetInst.return.key.substring(1)}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headerss: new Headers({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
            })
        })
            .then((res) => {
                this.setState({
                    updatePressed: false
                })
                this.forceUpdate()
            })
        e.preventDefault()
    }

    setUpdatedEvent = (e, event) => {
        this.setState({
            eventToUpdate: event,
            updatePressed: true

        })
        console.log(this.state)
        e.preventDefault()
    }

    render() {

        return (
            <div>
                <EventDataSec results={this.state.results} updateEvents={this.eventUpdate} deleteEvents={this.handleDelete} />
                <Form>
                    <FormGroup>
                        <Label>Event Name
                        <Input type='text' name='eventName' value={this.state.eventName} onChange={this.handleEventChange} />
                        </Label>
                        <Label>Purpose
                        <Input type='text' name='description' value={this.state.description} onChange={this.handleEventChange} />
                        </Label>
                        <Label>Location
                        <Input type='text' name='eventLocation' value={this.state.eventLocation} onChange={this.handleEventChange} />
                        </Label>
                    </FormGroup>
                </Form>
            </div>
        )
    }


}
export default Events;



// // http://localhost:3000/org