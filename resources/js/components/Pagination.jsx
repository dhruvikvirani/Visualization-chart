// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange }) => {
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const startItem = (currentPage - 1) * 10 + 1;
    const endItem = Math.min(startItem + 9, totalItems);

    return (
        <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
                <span>Showing {startItem} to {endItem} of {totalItems} results</span>
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination mb-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePreviousClick}>
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                            <button className="page-link" onClick={() => onPageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handleNextClick}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
