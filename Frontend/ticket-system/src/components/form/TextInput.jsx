export default function TextInput( {type="", className="", ...props}) {
    return (
        <input
        {...props}
        type={type}
        className={"text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        + className
        }
        />
    );
}