"use client";
import React, { useState, useMemo } from "react";

interface TableDataItem {
  [key: string]: string | number;
}

interface Props {
  data: TableDataItem[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState<keyof TableDataItem>("campaign");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Increased for better pagination

  const filtered = useMemo(() => {
    return data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      
      // Handle numeric values
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortAsc ? aVal - bVal : bVal - aVal;
      }
      
      // Handle string values
      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      
      if (aStr < bStr) return sortAsc ? -1 : 1;
      if (aStr > bStr) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortAsc]);

  const paginated = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sorted.slice(startIndex, startIndex + itemsPerPage);
  }, [sorted, currentPage]);

  const totalPages = Math.ceil(sorted.length / itemsPerPage);

  const handleSort = (key: keyof TableDataItem) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-4 mt-4">
      <div className="mb-4">
        <input
          className="border rounded px-3 py-2 w-full dark:bg-zinc-800 dark:text-white"
          placeholder="Filter campaigns..."
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
            setCurrentPage(1); // Reset to first page when filtering
          }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {Object.keys(data[0]).map(key => (
                <th
                  key={key}
                  className="cursor-pointer px-2 sm:px-3 py-3 text-left font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs sm:text-sm"
                  onClick={() => handleSort(key as keyof TableDataItem)}
                >
                  <div className="flex items-center gap-1">
                    <span className="hidden sm:inline">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="sm:hidden">{key.charAt(0).toUpperCase()}</span>
                    {sortKey === key && (
                      <span className="text-blue-500 text-xs">
                        {sortAsc ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-700">
                {Object.values(row).map((val, i) => (
                  <td key={i} className="px-2 sm:px-3 py-3 text-xs sm:text-sm">{String(val)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Enhanced Pagination - Mobile Responsive */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sorted.length)} of {sorted.length} results
          </div>
          
          {/* Mobile Pagination */}
          <div className="flex items-center gap-1 sm:hidden">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 text-xs rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              ←
            </button>
            
            <span className="px-2 py-1 text-xs">
              {currentPage} / {totalPages}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 text-xs rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              →
            </button>
          </div>
          
          {/* Desktop Pagination */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              Previous
            </button>
            
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                disabled={page === '...'}
                className={`px-3 py-1 rounded border transition-colors text-sm ${
                  page === currentPage
                    ? "bg-blue-500 text-white border-blue-500"
                    : page === '...'
                    ? "cursor-default"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
