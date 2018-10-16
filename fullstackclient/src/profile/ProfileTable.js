import React from 'react';
import { Table, Button } from 'reactstrap';

const ProfileTable = (props) => {
    return (
        <div>
            <h3> Post History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Def</th>
                        <th>Descrip</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.post.map((post, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{post.nameOfOrg}</th>
                                <td>{post.needs}</td>
                                <td>{post.purpose}</td>
                                <td>{post.location}</td>
                                <td>
                                    <Button id={post.nameOfOrg} onClick={props.delete} color="danger">Delete</Button>
                                    <Button id={post.nameOfOrg} onClick={e => props.update(e, post)} color="warning">Update</Button>

                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ProfileTable;