import React from 'react';
import Maps from './Map';

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <h1 className='welcome'>
                    Welcome to Sharity
                </h1>
                <h2>
                    <Maps />
                </h2>
            </div>
        )
    }
}

export default Home;