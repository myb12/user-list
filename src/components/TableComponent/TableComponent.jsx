import React from 'react';
import { Table, Container } from 'react-bootstrap';
import './TableComponent.css';

const TableComponent = () => {
    return (
        <Container>
            <div className="table-header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <input className='me-5' type="text" name="" id="" placeholder='Search...' />
                    <div className="d-flex align-items-center ms-5">
                        <div className='me-3'>
                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                All
                            </label>
                        </div>
                        <div className="me-3">
                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Male
                            </label>
                        </div>
                        <div className="me-3">
                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                            <label className="form-check-label" for="flexRadioDefault3">
                                Female
                            </label>
                        </div>
                    </div>
                </div>

                <div className="switch-wrappr d-flex align-items-center">
                    <p className='mb-0 me-3'>Tile View</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <Table>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Registration Date</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...new Array(6)].map((item, index) => <tr key={index}>
                            <td>Mark Boutcher</td>
                            <td>12-2-2022</td>
                            <td>mb12</td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default TableComponent;