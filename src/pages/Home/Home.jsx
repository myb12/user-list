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
    const [paginatedData, setPaginatedData] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPage, setNumberOfPage] = useState(5);

    let dataPerPage = 10;

    useEffect(() => {
        setNumberOfPage(userData?.length / dataPerPage)
    }, [userData]) // eslint-disable-line

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    const handleSearch = () => {

        if (searchText === '') {
            setNumberOfPage(5);
            setUsers(userData);
            setPaginatedData(userData?.slice(pageFrom, pageTo));
        } else {
            let filteredUser;
            if (gender === 'all') {
                filteredUser = userData?.filter(item =>
                    item?.name?.last?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                    item?.name?.first?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                    item?.email.toLowerCase()?.includes(searchText.toLowerCase()));
            } else {
                filteredUser = userData?.filter(item =>
                    (item?.name?.last?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                        item?.name?.first?.toLowerCase()?.includes(searchText.toLowerCase()) ||
                        item?.email.toLowerCase()?.includes(searchText.toLowerCase())) &&
                    item?.gender === gender
                );

            }
            setUsers(filteredUser);

            setPageFrom(0);
            setPageTo(dataPerPage);
            setPage(1);
            if (page === 1) {
                setPaginatedData(filteredUser.slice(pageFrom, pageTo));
                let number = filteredUser && filteredUser.length > dataPerPage ? Math.ceil(filteredUser.length / dataPerPage) : 1;
                setNumberOfPage(number);
            } else {
                setPaginatedData(filteredUser);
            }
        }
    }
    useEffect(() => {
        handleSearch();
        let number;
        if (searchText.length && page > 1) {

            setTimeout(() => {
                number = paginatedData && users.length > 10 ? Math.ceil(users.length / dataPerPage) : 1;
            }, [1000])

            setNumberOfPage(number);
            return;
        }
    }, [searchText, userData]); // eslint-disable-line

    useEffect(() => {
        if (searchText.length) {
            let number = paginatedData && users.length > dataPerPage ? Math.ceil(users.length / dataPerPage) : 1;
            setNumberOfPage(number);
            return;
        } else {
            if (gender === 'all') {
                setPaginatedData(userData?.slice(pageFrom, pageTo));
                let number = userData && userData.length > dataPerPage ? Math.ceil(userData.length / dataPerPage) : 1;
                setNumberOfPage(number);

            } else {
                let filteredData = userData?.filter(item => item.gender.toLowerCase() === gender)?.slice(pageFrom, pageTo);
                setPaginatedData(filteredData);
                let number = paginatedData && users.length > dataPerPage ? Math.ceil(users.length / dataPerPage) : 1;
                setNumberOfPage(number);
            }
        }
    }, [pageFrom, pageTo, gender, searchText]); // eslint-disable-line

    useEffect(() => {
        if (gender === 'all') {
            setPaginatedData(users.slice(pageFrom, pageTo));
        } else {
            setPaginatedData(users?.filter(item => item.gender === gender)?.slice(pageFrom, pageTo));
        }
    }, [page])  // eslint-disable-line

    useEffect(() => {

        let number = users && users.length > dataPerPage ? Math.ceil(users.length / dataPerPage) : 1;
        setNumberOfPage(number);
        setPaginatedData(users.slice(0, dataPerPage))
    }, [gender])  // eslint-disable-line

    useEffect(() => {
        if (searchText === '' && gender === 'all') {
            setNumberOfPage(5);
        } else {
            let number = users && users.length > dataPerPage ? Math.ceil(users.length / dataPerPage) : 1;
            setNumberOfPage(number);
        }
        setPaginatedData(users.slice(0, dataPerPage))

    }, [searchText])  // eslint-disable-line

    const handleGenderClicked = (e) => {
        setSearchText('');
        const genderValue = e.target.value;
        setGender(genderValue);

        if (genderValue === 'all') {
            setUsers(userData);
            setPaginatedData(userData?.slice(pageFrom, pageTo));
            setNumberOfPage(5);
            return;
        };

        setPage(1);
        let filteredUser = userData?.filter(item => item.gender.toLowerCase() === genderValue);
        let filteredPaginatedData = filteredUser?.slice(0, dataPerPage);
        setUsers(filteredUser);
        setPaginatedData(filteredPaginatedData);
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
                    <TileCardWrapper users={paginatedData} searchText={searchText} />
                    :
                    <TableComponent users={paginatedData} searchText={searchText} />
            }

            <Pagination
                pageTo={pageTo}
                pageFrom={pageFrom}
                setPageFrom={setPageFrom}
                setPageTo={setPageTo}
                numberOfPage={numberOfPage}
                dataPerPage={dataPerPage}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default Home;
