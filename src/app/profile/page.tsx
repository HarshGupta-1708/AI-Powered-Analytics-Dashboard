import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-600 shadow-lg">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Harsh Gupta"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online Status */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-zinc-800 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* User Information */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Harsh Gupta</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">hsg99100@gmail.com</p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Online
              </div>

              {/* User Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-50 dark:bg-zinc-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">12</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Campaigns</div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">89%</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">156</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Days Active</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/settings"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Edit Profile
                </Link>
                <Link
                  href="/logout"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 