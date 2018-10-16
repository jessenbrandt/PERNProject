import React from 'react';
import axios from 'axios';
import './org.css';
import DataResults from './DataResults';

class OrgData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        };

    }
 
    componentDidMount() {
        axios.get('http://localhost:3000/org')
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <DataResults results={this.state.results} />
            </div>
        )
    }


}
export default OrgData;



// // http://localhost:3000/org