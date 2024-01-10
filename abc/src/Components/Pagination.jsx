import React, { useState } from 'react';
import '../CSS/pagination.css';
import { IoArrowBack , IoArrowForward  } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className="pagination">
            <button
                className={`previous-page ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <IoArrowBack  />
            </button>
            {generatePageNumbers().map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`${currentPage === pageNumber ? 'active' : ''} ${currentPage === 1 ? 'first-page' : ''} 
                                ${currentPage === totalPages ? 'next-page' : ''}`}
                    onClick={() => handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                className={`next-page ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <IoArrowForward  />
            </button>
        </div>
    );
};

export default Pagination;
