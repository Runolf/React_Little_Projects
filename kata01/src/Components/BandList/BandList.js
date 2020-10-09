import React from 'react';
import Band from './Band/Band';

const BandList = (props) => {
    return(
        <div>
            {
              props.bands.map(band => {
                return  <div>
                            <Band band={band} />
                        </div>
              })
            }
        </div>
    );
}

export default BandList;   