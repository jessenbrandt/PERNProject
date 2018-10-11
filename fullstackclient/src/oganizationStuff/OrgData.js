import React from 'react';
// import OrgResults from './OrgResults'
import axios from 'axios';
import './org.css';

class OrgData extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
                nameOfOrg: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/org')
        .then(res=> {
            const nameOfOrg = res.data;
            this.setState({nameOfOrg});
        })
    }

    render() {
        return(
            <div className="orgname">
                {this.state.nameOfOrg.map((org, i) => <h1  key={i}>{org.nameOfOrg}</h1>)}
            </div>
        )
    }

   
}
export default OrgData; 



// // http://localhost:3000/org