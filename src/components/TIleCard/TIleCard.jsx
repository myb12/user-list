import React from 'react';

const TIleCard = ({firstName,LastName,username,registered,image}) => {
    return (
        <div style={{ border: '2px solid #000' }}>
            <div>
                <img src="" alt="" />
                <div>
                    <h1></h1>
                </div>
            </div>

            <div>
                <div className="username">
                    <p></p>
                </div>
                <div className="registered">
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default TIleCard;