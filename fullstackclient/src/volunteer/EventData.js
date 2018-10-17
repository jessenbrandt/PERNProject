import React from 'react';

const DataResults = ({ results }) => {
    const resultsFormatted = results.map((element, index) =>
        <div key={index} className="orgdisplay">
            <h5 className=''>{results[index].eventName}</h5>
            <p className='aboutorg'>{results[index].description}</p>
            <p className='aboutorg'>{results[index].eventLocation}</p>
        </div>
    )

    return (
        <div>
            {resultsFormatted}
        </div>
    )
}

export default DataResults;