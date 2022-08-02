import React, { memo, useCallback, useState } from 'react';
import { Container } from 'react-bootstrap';

const Pagination = ({ dataPerPage, numberOfPage, setPageFrom, setPageTo, pageFrom, pageTo }) => {
    const [page, setPage] = useState(1);

    const handlePagination = useCallback((pageInput) => {
        setPage(pageInput);
        let from = dataPerPage * pageInput - 10;
        let to = dataPerPage * pageInput;
        setPageFrom(from);
        setPageTo(to);
    }, []) // eslint-disable-line

    const handleNexPrev = (type) => {
        if (type === 'next') {
            if (pageTo === 50) return;
            if (page <= numberOfPage) {
                setPage((page) => page + 1)
            }
            setPageFrom(pageFrom + dataPerPage)
            setPageTo(pageTo + dataPerPage)
        } else {
            if (pageFrom === 0) return;

            if (page >= 0) {
                setPage((page) => page - 1)
            }
            setPageFrom(pageFrom - dataPerPage)
            setPageTo(pageTo - dataPerPage)
        }
    }
    return (
        <Container>
            <div className="pagination d-flex justify-content-end align-items-center">
                <span onClick={() => handleNexPrev('prev')} >{'<'}</span>
                {
                    [...Array(numberOfPage)].map((el, i) => <span
                        onClick={() => handlePagination(i + 1)}
                        className={`px-4 py-2 pagination-item ${page === i + 1 ? 'active-page' : ''}`}
                        key={i} >{i + 1}</span>)
                }
                <span onClick={() => handleNexPrev('next')}>{'>'}</span>
            </div>
        </Container>
    );
};

export default memo(Pagination);