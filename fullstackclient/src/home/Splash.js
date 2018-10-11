import React from 'react';
import OrgIndex from '../organizations/OrgIndex';

const Splash = (props) => {
    return (
        <div>
            <OrgIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;