import React from 'react';
import { Button } from 'reactstrap'

export default class DataResults extends React.Component {
    createResults = () => {
        if (!!this.props.results[0]) {
            return this.props.results.map((index) => {
                return (
                    <div key={index.id} className="orgdisplay">
                        <h5 className='orgname'>{index.nameOfOrg}</h5>
                        <p className='aboutorg'>{index.purpose}</p>
                        <p className='aboutorg'>{index.location}</p>
                        <p className='aboutorg'>{index.needs}</p>
                        <span className="orgButton">
                            <Button color='warning' key={"a" + index.id} onClick={this.props.update}>Update</Button>
                            <Button color='danger' key={"b" + index.id} onClick={this.props.delete}>Delete</Button>
                        </span>
                    </div>
                )
            }
            )
        }

    }

    render() {
        return (
            <div>
                {this.createResults()}
            </div>
        )
    }
}
