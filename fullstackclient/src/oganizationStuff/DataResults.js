import React from 'react';

const DataResults = ({ results }) => {
    const resultsFormatted = results.map((element, index) =>
        <div key={index} className="orgdisplay">
            <h5 className='orgname'>{results[index].nameOfOrg}</h5>
            <p className='aboutorg'>{results[index].purpose}</p>
            <p className='aboutorg'>{results[index].location}</p>
            <p className='aboutorg'>{results[index].needs}</p>

        </div>
    )

    return (
        <div>
            {resultsFormatted}
        </div>
    )
}

export default DataResults;