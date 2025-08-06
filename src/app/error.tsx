'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-white mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
          Something went wrong!
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          An error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 