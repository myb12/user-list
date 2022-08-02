import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

const TableHeader = ({ handleGenderClicked, handleChange, searchText, handleTileView }) => {
    return (
        <Container>
            <div className="table-header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <input
                        onChange={handleChange}
                        value={searchText}
                        className='me-5'
                        type="text"
                        name=""
                        id=""
                        placeholder='Search...' />
                    <div className="d-flex align-items-center ms-5" >
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

                <div className="switch-wrappr d-flex align-items-center">
                    {/* <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleTileView} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div> */}
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