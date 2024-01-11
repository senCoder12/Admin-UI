import React, { useState } from 'react';
import '../CSS/pagination.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxButtons = 4;

        let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
        let endPage = startPage + maxButtons - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxButtons + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
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
                <FaArrowLeft />
            </button>
            {generatePageNumbers().map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`${currentPage === pageNumber ? 'active' : ''}`}
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
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
