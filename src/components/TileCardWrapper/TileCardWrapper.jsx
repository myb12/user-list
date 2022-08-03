import React, { memo } from 'react';
import TIleCard from '../TIleCard/TIleCard';

const TileCardWrapper = ({ users, searchText }) => {
    return (
        <div className="row g-3 mt-4">
            {
                users?.map((item, index) => <div key={index} className="col-12 col-md-6 col-xl-4">
                    <TIleCard user={item} />
                </div>)
            }

            {
                searchText.length > 0 && !users.length && <h4 className='text-center text-danger mt-3'>Sorry no data found!</h4>
            }
        </div>
    );
};

export default memo(TileCardWrapper);