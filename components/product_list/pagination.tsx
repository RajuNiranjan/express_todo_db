"use client";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md border ${
          currentPage === 1 ? "text-gray-300" : "text-gray-700"
        }`}>
        <MdChevronLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 text-[12px] rounded-md ${
            page === currentPage
              ? "bg-blue-500 text-white "
              : "border text-gray-700"
          }`}>
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md border ${
          currentPage === totalPages ? "text-gray-300 " : "text-gray-700"
        }`}>
        <MdChevronRight />
      </button>
    </div>
  );
};

export default function PaginationTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
