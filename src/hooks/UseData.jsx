import { useCallback, useEffect, useState } from 'react';

const UseData = () => {
    const [userData, setUserData] = useState([]);

    const getData = useCallback(async () => {
        const response = await fetch('https://randomuser.me/api?results=50');
        const data = await response.json();
        setUserData(data.results);
    }, [])

    useEffect(() => {
        getData();
    }, []);


    return userData;
};

export default UseData;