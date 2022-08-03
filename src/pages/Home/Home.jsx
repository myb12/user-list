import React, { useEffect, useState } from 'react';
import Pagination from '../../components/shared/Pagination/Pagination';
import TableHeader from '../../components/shared/TableHeader/TableHeader';
import TableComponent from '../../components/TableComponent/TableComponent';
import TileCardWrapper from '../../components/TileCardWrapper/TileCardWrapper';
import UseData from '../../hooks/UseData';

const Home = () => {
    const [tileView, setTileView] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('all');
    const userData = UseData();
    const [pageFrom, setPageFrom] = useState(0);
    const [pageTo, setPageTo] = useState(10);

    let dataPerPage = 10;
    let numberOfPage = userData?.length / dataPerPage;

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        console.log(searchText, userData?.slice(pageFrom, pageTo), users?.slice(pageFrom, pageTo).length)
        if (searchText === '') {
            setUsers(userData);
            return;
        }
        let filteredUser
        if (gender === 'all') {
            filteredUser = userData?.slice(pageFrom, pageTo)?.filter(item =>
                item?.name?.last?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                item?.name?.first?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                item?.email.toLowerCase()?.includes(searchText.toLowerCase()));
        } else {
            filteredUser = userData?.slice(pageFrom, pageTo)?.filter(item =>
                (item?.name?.last?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                    item?.name?.first?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                    item?.email.toLowerCase()?.includes(searchText.toLowerCase())) &&
                item?.gender === gender
            );
        }
        setUsers(filteredUser);
        console.log(users)
    }

    useEffect(() => {
        handleSearch();
    }, [searchText, userData]); // eslint-disable-line


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

    return (
        <div className="px-2 px-lg-5 mt-5">
            <TableHeader
                handleGenderClicked={handleGenderClicked}
                handleChange={handleChange}
                searchText={searchText}
                handleTileView={handleTileView}
            />

            {
                tileView
                    ?
                    <TileCardWrapper users={users?.slice(pageFrom, pageTo)} searchText={searchText} />
                    :
                    <TableComponent users={users?.slice(pageFrom, pageTo)} searchText={searchText} />
            }

            <Pagination
                pageTo={pageTo}
                pageFrom={pageFrom}
                setPageFrom={setPageFrom}
                setPageTo={setPageTo}
                numberOfPage={numberOfPage}
                dataPerPage={dataPerPage}
            />
        </div>
    );
};

export default Home;