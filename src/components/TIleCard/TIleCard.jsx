import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { ImUser } from 'react-icons/im';


const TIleCard = ({ user }) => {
    const { name, email, login, registered, picture } = user;
    return (
        <div className="tileCard">
            <div className='small-user-card d-flex align-items-start'>
                <img src={picture?.medium} alt="" />
                <div>
                    <h5 className='mb-0'>{name?.last} {name?.first}</h5>
                    <span>{email}</span>

                    <div className="username">
                        <ImUser />
                        <p className='mb-0'>{login?.username}</p>
                    </div>
                    <div className="registered">
                        <BsCalendarDate />
                        <p className='mb-0'>
                            {(new Date(registered?.date).toDateString()).toString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TIleCard;