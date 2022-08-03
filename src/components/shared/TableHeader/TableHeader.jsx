import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const TableHeader = ({ handleGenderClicked, handleChange, searchText, handleTileView }) => {
    return (
        <Container>
            <div className="table-header d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <div className="d-flex flex-column flex-lg-row align-items-center">

                    <form className="header-search-wrapper">
                        <input
                            onChange={handleChange}
                            value={searchText}
                            type="text"
                            className="header-search form-control me-2"
                            placeholder="Search..."
                        />
                        <BsSearch className="header-search-icon" />
                    </form>

                    <div className="d-flex align-items-center mt-3 mt-lg-0 ms-lg-5 gender" >
                        <p className='mb-0 me-3'>Filter By</p>
                        <div className='me-3'>
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                defaultChecked
                                onClick={handleGenderClicked}
                                value="all" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                All
                            </label>
                        </div>
                        <div className="me-3">
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                onClick={handleGenderClicked}
                                value="male" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Male
                            </label>
                        </div>
                        <div className="me-3">
                            <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                onClick={handleGenderClicked}
                                value="female" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Female
                            </label>
                        </div>
                    </div>
                </div >

                <div className="switch-wrappr d-flex align-items-center mt-3 mt-lg-0 ">
                    <p className='mb-0 me-3'>Tile View</p>
                    <label className="switch" >
                        <input type="checkbox" onClick={handleTileView} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div >
        </Container>

    );
};

export default memo(TableHeader);