import React from "react";
import { PaginationProps } from "../../types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageChangeHandler = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className="flex justify-center py-4">
      <button
        onClick={() => pageChangeHandler(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-4 py-2"
        aria-label="Previous Page"
      >
        <GrFormPrevious />
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => pageChangeHandler(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-4 py-2"
        aria-label="Next Page"
      >
        <GrFormNext />
      </button>
    </div>
  );
};
export default Pagination;
