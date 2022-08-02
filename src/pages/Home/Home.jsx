import React, { useCallback, useEffect, useState } from 'react';
import TableHeader from '../../components/shared/TableHeader/TableHeader';
import TableComponent from '../../components/TableComponent/TableComponent';
import UseData from '../../hooks/UseData';

const Home = () => {
    const [tileView, setTileView] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('all');
    const userData = UseData();

    const handleChange = (e) => {
        e.preventDefault();

        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        if (searchText === '') {
            setUsers(userData);
            return;
        }
        let filteredUser = userData?.filter(item =>
            (item?.name?.last?.toLowerCase()?.match(searchText.toLowerCase()) ||
                item?.name?.first?.toLowerCase()?.match(searchText.toLowerCase()) ||
                item?.email.toLowerCase()?.match(searchText.toLowerCase())) &&
            item?.gender === gender
        );
        setUsers(filteredUser);
    }

    useEffect(() => {
        handleSearch();
    }, [searchText, userData]);


    const handleGenderClicked = (e) => {
        const genderValue = e.target.value;
        setGender(genderValue);
        if (genderValue === 'all') {
            setUsers(userData);
            return;
        };

        let filteredUser = userData?.filter(item => item.gender.toLowerCase() === genderValue);
        setUsers(filteredUser);
    }


    const handleTileView = (e) => {
        setTileView(!tileView);
    };

    console.log('tileView')

    return (
        <div>
            <TableHeader
                handleGenderClicked={handleGenderClicked}
                handleChange={handleChange}
                searchText={searchText}
                handleTileView={handleTileView}
            />

            {
                tileView ? <h1>This is a tile view</h1> : <TableComponent users={users} searchText={searchText} />
            }
        </div>
    );
};

export default Home;