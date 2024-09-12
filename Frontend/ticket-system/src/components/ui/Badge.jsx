export default function Badge({ text = "", className = "" }) {
    return (
        <span className={`inline-block min-w-[80px] text-center text-sm font-medium me-2 px-4 py-0.5 rounded ${className}`}>
            {text}
        </span>
    );
}
