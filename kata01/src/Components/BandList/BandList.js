import React from 'react';

const BandList = (props) => {
    return(
        <div>
            {
              props.bands.map(band => {
                return <p>{band.name}</p>
              })
            }
        </div>
    );
}

export default BandList;   