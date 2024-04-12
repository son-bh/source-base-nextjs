import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Pagination from 'react-js-pagination';

const PaginationComponent = ({ activePage, itemsCountPerPage = 10, totalItemsCount, pageRangeDisplayed = 5, handlePageChange }) => {
  return (
    <div className="pt-4 flex justify-end">
      <Pagination
        innerClass="flex gap-x-1"
        itemClass="w-[32px] h-[32px] font-semibold"
        linkClass="w-full h-full text-center flex items-center justify-center hover:bg-[#0068FF] hover:opacity-80 rounded-full hover:text-white"
        activeLinkClass="bg-[#0068FF] text-white rounded-full"
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        firstPageText={<ChevronDoubleLeftIcon className="w-5 h-5" />}
        lastPageText={<ChevronDoubleRightIcon className="w-5 h-5" />}
        prevPageText={<ChevronLeftIcon className="w-5 h-5" />}
        nextPageText={<ChevronRightIcon className="w-5 h-5" />}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComponent;
