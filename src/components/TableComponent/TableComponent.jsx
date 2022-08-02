import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import UseData from '../../hooks/UseData';
import SmallUserCard from '../SmallUserCard/SmallUserCard';
import './TableComponent.css';

const TableComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    const userData = UseData();

    const handleChange = (e) => {
        e.preventDefault();

        setSearchText(e.target.value);
    }

    useEffect(() => {
        if (searchText === '') {
            setUsers(userData);
            return;
        }
        let filteredUser = userData?.filter(item =>
            item?.name?.last?.toLowerCase()?.match(searchText.toLowerCase()) ||
            item?.name?.first?.toLowerCase()?.match(searchText.toLowerCase()) ||
            item?.email.toLowerCase()?.match(searchText.toLowerCase())
        );
        setUsers(filteredUser);
    }, [searchText, userData]);


    const handleGenderClicked = (e) => {
        const gender = e.target.value;

        if (gender === 'all') {
            setUsers(userData);
            return;
        };

        let filteredUser = userData?.filter(item => item.gender.toLowerCase() === gender);
        setUsers(filteredUser);
    }

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
                    <p className='mb-0 me-3'>Tile View</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div >

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
                        users?.map((item, index) => <tr key={index}>
                            <td>
                                <SmallUserCard
                                    firstName={item?.name?.first}
                                    lastName={item?.name?.last}
                                    email={item?.email}
                                    image={item?.picture?.medium}
                                />
                            </td>
                            <td>
                                {(new Date(item?.registered?.date).toDateString()).toString()}
                            </td>
                            <td>
                                {item?.login?.username}
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
            {
                searchText.length > 0 && !users.length && <h3 className='text-center'>Sorry no data found!</h3>
            }
        </Container >
    );
};

export default TableComponent;