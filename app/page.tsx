import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 text-gray-900">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg mx-auto space-y-6">
                <h1 className="text-4xl font-extrabold text-gray-800 text-center">
                    Welcome to Our Platform
                </h1>
                <p className="text-lg text-gray-600 text-center">
                    Start exploring the app and discover all its features. Choose an option below to begin.
                </p>
                <nav className="space-y-6">
                    <Link href="/pages/login">
                        <div className="block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-center cursor-pointer transform">
                            Log In to Your Account
                        </div>
                    </Link>
                    <Link href="/ssr">
                        <div className="block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-center cursor-pointer transform">
                            Explore SSR Content
                        </div>
                    </Link>
                    <Link href="/ssg">
                        <div className="block px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 text-center cursor-pointer transform">
                            View SSG Content
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;