export default function Table({ columns, data }) {
    return (
        <div className="overflow-x-auto">
            <div className="h-48 hover:overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.accessor}
                                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400 sticky top-0 bg-gray-100 dark:bg-gray-700"
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.accessor}
                                        className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {column.render
                                            ? column.render(row[column.accessor])
                                            : row[column.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


