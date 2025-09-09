"use client"

import { login } from "@/lib/auth-actions";

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="bg-white p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-lg md:shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 leading-tight">
              Welcome to JobList
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
              Sign in to post jobs or apply for opportunities
            </p>
          </div>

          {/* GitHub button */}
          <div className="mb-4 sm:mb-6">
            <button className="w-full max-w-sm mx-auto px-2 py-1  flex items-center justify-center gap-2  border border-gray-300 rounded-lg sm:rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]" onClick={login} >
              <svg
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium">
                Continue with GitHub
              </span>
            </button>
          </div>


        

          {/* Footer */}
          <div className="text-center text-xs xs:text-sm md:text-base text-gray-500 leading-relaxed px-1 sm:px-0">
            By signing in, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500 underline underline-offset-2 transition-colors duration-200">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500 underline underline-offset-2 transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}
