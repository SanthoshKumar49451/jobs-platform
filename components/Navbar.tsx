"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons
import { useSession } from "next-auth/react";
import { logout } from "@/lib/auth-actions";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {data:session}=useSession()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Job Board Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Job Board
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse Jobs
            </Link>
           {session?<>
           <Link
              href="/jobs/post"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Post a Job
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <button onClick={logout} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" >
              SignOut
            </button>
           
           </>: <Link
              href="/auth/signin"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-white ">
          <div className="fixed top-0 left-0 h-full w-full shadow-lg p-6 flex flex-col space-y-6">
            
            {/* Close button inside menu */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu links */}
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-gray-900 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Jobs
            </Link>
            
            {/* Conditional rendering based on session for mobile */}
            {session ? (
              <>
                <Link
                  href="/jobs/post"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Post a Job
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-gray-900 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }} 
                  className="text-gray-700 hover:text-gray-900 text-lg text-left"
                >
                  SignOut
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

