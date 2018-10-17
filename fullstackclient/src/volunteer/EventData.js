import React from 'react';
import './volunteer.css';

const DataResults = ({ results }) => {
    const resultsFormatted = results.map((element, index) =>
        <div key={index} className="eventtable">
            <h5 className='eventdisplay'>{results[index].eventName}</h5>
            <p className='aboutevent'>{results[index].description}</p>
            <p className='aboutevent'>{results[index].eventLocation}</p>
        </div>
    )

    return (
        <div>
            {resultsFormatted}
        </div>
    )
}

export default DataResults;