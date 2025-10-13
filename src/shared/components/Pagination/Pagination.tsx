import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PaginationProps } from "../../../types/paginationProps";

export const Pagination = ({
  pageAmount,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <ul id="pagination" className="flex">
      <li>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeft />
        </button>
      </li>
      {[...Array(pageAmount).keys()].map((pageIndex) => (
        <li key={pageIndex + 1}>
          <button onClick={() => setCurrentPage(pageIndex + 1)}>
            {pageIndex + 1}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageAmount}
        >
          <ArrowRight />
        </button>
      </li>
    </ul>
  );
};
