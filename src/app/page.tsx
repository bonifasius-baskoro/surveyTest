import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <Link
        className="px-8 py-4 text-white text-lg font-semibold bg-blue-400 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
        href="/survey"
      >
        Go to Survey
      </Link>
    </div>
  );
}
