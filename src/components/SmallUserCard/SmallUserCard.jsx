import React, { memo } from 'react';

const SmallUserCard = ({ image, firstName, lastName, email }) => {

    return (
        <div className='small-user-card d-flex align-items-center'>
            <img className='me-3' src={image} alt="" />
            <div>
                <h4>{lastName} {firstName} </h4>
                <span>{email}</span>
            </div>
        </div>
    );
};

export default memo(SmallUserCard);