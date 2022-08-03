import React from 'react';
import { Table, Container } from 'react-bootstrap';
import SmallUserCard from '../SmallUserCard/SmallUserCard';

const TableComponent = ({ users, searchText }) => {
    return (
        <Container className="table-component">
            <Table responsive>
                <thead>
                    <tr>
                        <th className="ps-4">
                            <div className="table-heading">
                                Name
                            </div>
                        </th>
                        <th>
                            <div className="table-heading">
                                Registration Date
                            </div>
                        </th>
                        <th>
                            <div className="table-heading">
                                Username
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((item, index) => <tr key={index}>
                            <td className="ps-4">
                                <SmallUserCard
                                    firstName={item?.name?.first}
                                    lastName={item?.name?.last}
                                    email={item?.email}
                                    image={item?.picture?.medium}
                                />
                            </td>
                            <td>
                                <div className="d-flex mt-4 registered">
                                    {(new Date(item?.registered?.date).toDateString()).toString()}
                                </div>
                            </td>
                            <td className="pe-2">
                                <div className="d-flex mt-4 username">
                                    {item?.login?.username}
                                </div>
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