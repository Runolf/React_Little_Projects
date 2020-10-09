import React from 'react';

const Band = (props) => {

    const styleContainer ={
        width: "250px",
        height: "300px",
        backgroundColor: "#8f866f",
        color: "#4a4539",
        marginTop: "70px"
    }

    const StyleTitle = {
        width: "inherit",
        height: "90px",
        backgroundColor: "#e3d4b1"
    }

    return(
            <div className="col mb-4">
                <div className="card" style={styleContainer}>
                    <div className="card-body">
                        <h3 className="card-title" style={StyleTitle}>{props.band.name}</h3>
                        <div className="card-text">{props.band.style}</div>
                    </div>
                </div>

            </div>
    );
}

export default Band;