import React from 'react';
import axios from 'axios';
import ProfileData from './ProfileData';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Link } from "react-router-dom";
import ProfileEdit from './ProfileEdit'


class MainProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            nameOfOrg: '',
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
        this.setState({ nameOfOrg: e.target.value });
    }

    handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/org/${this.state.nameOfOrg}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    orgUpdate = (e, org) => {
        fetch(`http://localhost:3000/org/${org.nameOfOrg}`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchOrgs();
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
        return (
            <Form  onSubmit={this.handleDelete}>
                <ProfileData results={this.state.results} />
                <p className='p'>Click <Link to="/eventtable"> here</Link> to Create an Event</p>
                <p className='p'>Click <Link to="/profile"> here</Link> to tell us about your Organization</p>
                {/* <ProfileEdit />

                {this.state.updatePressed ? <ProfileEdit t={this.state.updatePressed} update={this.orgUpdate} org={this.state.orgToUpdate} /> : <div></div>
            } */}
                <FormGroup>
                    <Label> Organization Name
                    <Input type='text' name='nameOfOrg' onChange={this.handleChange} />
                    </Label>
                    <Button type="submit" color="danger">Delete</Button>
                </FormGroup>
                <FormGroup>
                    <Label>Organization Name
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
                    <Button type="submit" color='warning'>Update</Button>
                </FormGroup>
            </Form>

        )
    }


}

export default MainProfile;