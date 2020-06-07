import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (phoneData, handlePageClick) => (
  <div className="pagination">
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={phoneData.totalPages === 39 ? phoneData.totalPages - 1:phoneData.totalPages  }
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  </div>
);

export default Pagination;
