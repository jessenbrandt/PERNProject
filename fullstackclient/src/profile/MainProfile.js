import React from 'react';
import axios from 'axios';
import ProfileData from './ProfileData';
import { Form, Label, Input, FormGroup, Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import './profile.css'
import EventProfile from './EventProfile';


class MainProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            updatePressed: false,
            orgToUpdate: {}
        };

    }

    componentDidMount() {
        axios.get('http://localhost:3000/org')
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }

    handleChange = (e) => {
        let objectToChange = {};
        Object.defineProperty(objectToChange, e.target.name, { value: e.target.value, writable: true, configurable: true, enumerable: true })
        console.log(this.state);
        console.log(objectToChange);
        this.setState(objectToChange);
    }

    handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/org/${e._targetInst.return.key.substring(1)}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.forceUpdate();
            })
    }

    orgUpdate = (e, org) => {
        console.log(this.state)
        fetch(`http://localhost:3000/org/${e._targetInst.return.key.substring(1)}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.forceUpdate();
            })
        e.preventDefault()
    }
    setUpdatedOrg = (e, org) => {
        this.setState({
            orgToUpdate: org,
            updatePressed: true
        })
        e.preventDefault()
    }
    render() {
        console.log(this.state.results)
        if (localStorage.getItem('type') === 'organization') {

            return (
                <div>
                    <Container>
                        <Row>
                            <Col id='profiledata' md='6'>       <ProfileData results={this.state.results} update={this.orgUpdate} delete={this.handleDelete} />
                            <Form>
                        <FormGroup>
                            <Label>Name
                        <Input type='text' name='nameOfOrg' value={this.state.nameOfOrg} onChange={this.handleChange} />
                            </Label>
                            <Label>Purpose
                        <Input type='text' name='purpose' value={this.state.purpose} onChange={this.handleChange} />
                            </Label>
                            <Label>Location
                        <Input type='text' name='location' value={this.state.location} onChange={this.handleChange} />
                            </Label>
                            <Label>Needs
                        <Input type='text' name='needs' value={this.state.needs} onChange={this.handleChange} />
                            </Label>
                        </FormGroup>
                    </Form>
                            </Col>
                            <Col id='eventprofile' md='6'>
                                <EventProfile />
                            </Col>
                        </Row>
                    </Container>

                    <span className='clickhere'>
                        <p className='clickEvent'>Click <Link to="/eventtable"> here</Link> to Create an Event</p>
                    </span>
                    <span className='clickhere'>
                        <p className='clickOrg'>Click <Link to="/profile"> here</Link> to tell us about your Organization</p>
                    </span>
                   
                </div>
            )
        }

        return <div>{"Volunteer Profile"/*Volunteer profile goes in here*/}</div>
    }


}

export default MainProfile;