import React, { memo } from 'react';

const SmallUserCard = ({ image, firstName, lastName, email }) => {

    return (
        <div className='small-user-card d-flex align-items-center'>
            <img  src={image} alt="" />
            <div>
                <h5 className='mb-0'>{lastName} {firstName} </h5>
                <span>{email}</span>
            </div>
        </div>
    );
};

export default memo(SmallUserCard);