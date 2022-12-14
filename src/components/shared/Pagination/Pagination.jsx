import React, { memo, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { MdOutlineDoubleArrow } from 'react-icons/md';


const Pagination = ({ dataPerPage, numberOfPage, setPageFrom, setPageTo, pageFrom, pageTo, page, setPage }) => {

    const handlePagination = useCallback((pageInput) => {
        setPage(pageInput);
        let from = dataPerPage * pageInput - 10;
        let to = dataPerPage * pageInput;
        setPageFrom(from);
        setPageTo(to);
    }, []) // eslint-disable-line

    const handleNexPrev = (type) => {
        if (type === 'next') {
            if (page === numberOfPage) return;

            if (page <= numberOfPage) {
                setPage((page) => page + 1);
            }
            setPageFrom(pageFrom + dataPerPage);
            setPageTo(pageTo + dataPerPage);
        } else {
            if (page === 1) return;

            if (page >= 0) {
                setPage((page) => page - 1);
            }
            setPageFrom(pageFrom - dataPerPage);
            setPageTo(pageTo - dataPerPage);
        }
    }
    return (
        <Container>
            <div className="pagination mt-2 d-flex justify-content-center justify-content-lg-end align-items-center">
                <MdOutlineDoubleArrow
                    className="rotate-180 me-3 me-lg-4"
                    onClick={() => handleNexPrev('prev')}
                    style={{ color: page === 1 ? '#69686859' : '#121212' }}
                />

                {
                    [...Array(numberOfPage)].map((el, i) => <span
                        onClick={() => handlePagination(i + 1)}
                        className={`px-4 py-2 pagination-item ${page === i + 1 ? 'active-page' : ''}`}
                        key={i} >{i + 1}</span>)
                }
                <MdOutlineDoubleArrow
                    className='ms-3 ms-lg-4'
                    onClick={() => handleNexPrev('next')}
                    style={{ color: page === numberOfPage ? '#69686859' : '#121212' }} />
            </div>
        </Container>
    );
};

export default memo(Pagination);
