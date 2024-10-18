export default function FileInput({ type="file", className="", ...props }){
    return (
        <input
            {...props}
            type={type}
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
    );
}