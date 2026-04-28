function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="flex flex-col items-center gap-3">
            {/* Spinner */}
            <svg className="size-8 animate-spin text-theme" viewBox="0 0 24 24">
            <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
            />
            <path
                className="opacity-80"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
            </svg>

            {/* Text */}
            <p className="text-sm text-gray-500">Loading...</p>
        </div>
        </div>
    );
}

export default LoadingSpinner;
