export default function Pagination() {
    return (
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <label htmlFor="entries" className="text-sm text-gray-600 dark:text-gray-300">
            Show
          </label>
          <select id="entries" className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            entries
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm text-gray-600 bg-white border rounded-md hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700" disabled>
            Previous
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page 1 of 10
          </span>
          <button className="px-3 py-1 text-sm text-gray-600 bg-white border rounded-md hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700">
            Next
          </button>
        </div>
      </div>
    );
}