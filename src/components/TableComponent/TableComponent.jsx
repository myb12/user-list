import React from 'react';
import { Table, Container } from 'react-bootstrap';
import SmallUserCard from '../SmallUserCard/SmallUserCard';

const TableComponent = ({ users, searchText }) => {
    return (
        <Container>
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