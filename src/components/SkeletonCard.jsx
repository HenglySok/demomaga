// components/SkeletonCard.jsx

export default function SkeletonCard() {
    return (
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow animate-pulse">
            <div className="h-[200px] bg-gray-700 w-full"></div>
            <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
            </div>
        </div>
    );
}
