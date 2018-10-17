import React from 'react';
import axios from 'axios';
import EventData from './EventData'

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        };

    }
 
    componentDidMount() {
        axios.get('http://localhost:3000/events')
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <EventData results={this.state.results} />
            </div>
        )
    }


}
export default Events;



// // http://localhost:3000/org