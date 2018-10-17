import React from 'react';
import { Button } from 'reactstrap'

export default class EventDataSec extends React.Component {
    createEventResults = () => {
        if (!!this.props.results[0]) {
            return this.props.results.map((i) => {
                return (
        <div key={i} className="eventtable">
            <h5 className='eventdisplay'>{i.eventName}</h5>
            <p className='aboutevent'>{i.description}</p>
            <p className='aboutevent'>{i.eventLocation}</p>
            <span className="orgButton">
                            <Button color='warning' key={"c" + i.id} onClick={this.props.updateEvents}>Update</Button>
                            <Button color='danger' key={"d" + i.id} onClick={this.props.deleteEvents}>Delete</Button>
                        </span>
                    </div>
                )
            }
            )
        }

    }

    render() {
        return (
            <div >
                {this.createEventResults()}
            </div>
        )
    }
}
