// import React from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import './pagination.scss';

// interface Props {
//     currentPage: number;
//     totalPages: number;
// }

// export default function PaginationBar({ currentPage, totalPages }: Props) {

//     const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 5));
//     const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9))

//     const numberedPageItems: JSX.Element[] = []
//     for (let page = minPage; page <= maxPage; page++) {
//         numberedPageItems.push(
//             <Link
//                 to={`?page=${page}`}
//                 key={page}
//                 className={`pagination-link ${currentPage === page ? 'active' : ''}`}
//             >{page}</Link>
//         )
//     }

//     return (
//         <div className="pagination-bar">
//             {currentPage > 1 && (
//                 <Link to={`?page=${currentPage - 1}`} className="pagination-arrow">
//                     <IoIosArrowBack className="" />
//                 </Link>
//             )}
//             {numberedPageItems}
//             {currentPage < totalPages && (
//                 <Link to={`?page=${currentPage + 1}`} className="pagination-arrow">
//                     <IoIosArrowForward className="" />
//                 </Link>
//             )}
//         </div>
//     )
// }

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import './pagination.scss';

interface Props {
    currentPage: number;
    totalPages: number;
}

export default function PaginationBar({ currentPage, totalPages }: Props) {

    // Function to calculate the range of pages to display
    const calculatePageRange = () => {
        const maxPagesToShow = 5; // Maximum number of page links to show
        const pages = [];

        // Calculate starting page based on current page
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        // Adjust startPage when nearing the end to always show maxPagesToShow links
        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        // Generate the page links
        for (let page = startPage; page <= endPage; page++) {
            pages.push(
                <Link
                    to={`?page=${page}`}
                    key={page}
                    className={`pagination-link ${currentPage === page ? 'active' : ''}`}
                >
                    {page}
                </Link>
            );
        }

        // Add ellipsis (...) if not all pages are shown
        if (startPage > 1) {
            pages.unshift(
                <span key="start-ellipsis" className="pagination-ellipsis">...</span>
            );
        }
        if (endPage < totalPages) {
            pages.push(
                <span key="end-ellipsis" className="pagination-ellipsis">...</span>
            );
        }

        return pages;
    };

    const numberedPageItems = calculatePageRange();

    return (
        <div className="pagination-bar">
            {currentPage > 1 && (
                <Link to={`?page=${currentPage - 1}`} className="pagination-arrow">
                    <IoIosArrowBack className="" />
                </Link>
            )}
            {numberedPageItems}
            {currentPage < totalPages && (
                <Link to={`?page=${currentPage + 1}`} className="pagination-arrow">
                    <IoIosArrowForward className="" />
                </Link>
            )}
        </div>
    );
}
