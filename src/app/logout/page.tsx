"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Show success message after a brief delay
    const timer = setTimeout(() => {
      setShowSuccess(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showSuccess, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Company Logo/Name */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            ADmyBRAND
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">Insights Dashboard</p>
        </div>

        {/* Logout Success Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 text-center">
          {showSuccess ? (
            <>
              {/* Success Animation */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Logout Successful!
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  You have been successfully logged out of your account.
                </p>
              </div>

              {/* Redirect Message */}
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-blue-800 dark:text-blue-400 text-sm">
                  Redirecting to login page in <span className="font-bold">{countdown}</span> seconds...
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Go to Login
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Stay Logged In
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Loading Animation */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <svg className="animate-spin w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Logging Out...
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Please wait while we securely log you out.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2024 ADmyBRAND. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
} 