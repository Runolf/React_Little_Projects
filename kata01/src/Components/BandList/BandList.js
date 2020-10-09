import React from 'react';
import Band from './Band/Band';

const BandList = (props) => {

    const containerStyle = {
        width:"100%",
        position: "relative",
        top: "100px"
    }

    return(
        <div style={containerStyle}>
            <div className="row row-cols-1 row-cols-md-4">
                { props.bands.map(band => {
                    return  <div>
                                <Band band={band} />
                            </div>
                }) }
            </div>
        </div>
        
    );
}

export default BandList;   