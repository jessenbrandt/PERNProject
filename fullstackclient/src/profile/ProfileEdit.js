import React from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameOfOrg: '',
            needs: '',
            purpose: '',
            location: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update(e, this.state)
    }

    componentWillMount() {
        this.setState({
            nameOfOrg: this.props.org.nameOfOrg,
            needs: this.props.org.needs,
            purpose: this.props.org.purpose,
            location: this.props.org.location
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader>Update</ModalHeader>
                    <ModalBody>
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
                            <Button type="submit" color="grey">Update </Button>
                        </Form>

                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ProfileEdit;