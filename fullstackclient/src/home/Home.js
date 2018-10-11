import React from 'react';
import Maps from './Map';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className='welcome'>
                    Welcome to Sharity
            </h1>
                <div className='home'>
                        <div className='mainMap'><Maps /></div>
                </div>
            </div>
        )
    }
}

export default Home;