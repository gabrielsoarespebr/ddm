import "./style.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PaginationProps } from "../../../types/paginationProps";

export const Pagination = ({
  pageAmount,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const buttonAmountMax = 15;

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
      {/* PAGINATION FOR A SMALL NUMBER OF PAGES */}
      {pageAmount <= buttonAmountMax - 2 && (
        <>
          {[...Array(pageAmount).keys()].map((pageIndex) => (
            <li key={pageIndex + 1}>
              <button onClick={() => setCurrentPage(pageIndex + 1)}>
                {pageIndex + 1}
              </button>
            </li>
          ))}
        </>
      )}
      {/* PAGINATION FOR MANY PAGES - CURRENT PAGE AT THE EDGES */}
      {pageAmount > buttonAmountMax - 2 &&
        (currentPage <= 6 || currentPage > pageAmount - 6) && (
          <>
            {[...Array(6).keys()].map((pageIndex) => (
              <li key={pageIndex + 1}>
                <button
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={currentPage === pageIndex + 1 ? "active" : ""}
                >
                  {pageIndex + 1}
                </button>
              </li>
            ))}
            <li>
              <button disabled={true}>...</button>
            </li>
            {Array.from(
              { length: 6 },
              (_, index) => pageAmount - 6 + index
            ).map((pageIndex) => (
              <li key={pageIndex + 1}>
                <button
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={currentPage === pageIndex + 1 ? "active" : ""}
                >
                  {pageIndex + 1}
                </button>
              </li>
            ))}
          </>
        )}
      {/* PAGINATION FOR MANY PAGES - CURRENT PAGE IN THE MIDDLE */}
      {pageAmount > buttonAmountMax - 2 &&
        currentPage > 6 &&
        currentPage <= pageAmount - 6 && (
          <>
            {[...Array(3).keys()].map((pageIndex) => (
              <li key={pageIndex + 1}>
                <button onClick={() => setCurrentPage(pageIndex + 1)}>
                  {pageIndex + 1}
                </button>
              </li>
            ))}
            <li>
              <button disabled={true}>...</button>
            </li>
            {Array.from(
              { length: 5 },
              (_, index) => currentPage - 3 + index
            ).map((pageIndex) => (
              <li key={pageIndex + 1}>
                <button
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={currentPage === pageIndex + 1 ? "active" : ""}
                >
                  {pageIndex + 1}
                </button>
              </li>
            ))}
            <li>
              <button disabled={true}>...</button>
            </li>
            {Array.from(
              { length: 3 },
              (_, index) => pageAmount - 3 + index
            ).map((pageIndex) => (
              <li key={pageIndex + 1}>
                <button onClick={() => setCurrentPage(pageIndex + 1)}>
                  {pageIndex + 1}
                </button>
              </li>
            ))}
          </>
        )}
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
