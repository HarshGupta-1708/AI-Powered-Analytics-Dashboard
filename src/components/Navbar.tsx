"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, message: "New campaign data available", time: "2 min ago", read: false },
    { id: 2, message: "Revenue target achieved", time: "1 hour ago", read: false },
    { id: 3, message: "Weekly report ready", time: "3 hours ago", read: true },
  ]);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false);
  };

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    router.push("/logout");
  };

  const handleSettings = () => {
    setIsDropdownOpen(false);
    router.push("/settings");
  };

  const handleProfile = () => {
    setIsDropdownOpen(false);
    router.push("/profile");
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
      <span className="font-bold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-white">ADmyBRAND Insights</span>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          aria-label="Toggle Dark Mode"
          className="p-1.5 sm:p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (theme === "dark" ? "🌞" : "🌙")}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={handleNotificationClick}
            className="p-1.5 sm:p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors relative"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.75a6 6 0 006 6h3a6 6 0 006-6V9.75a6 6 0 00-6-6h-3z" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 py-2 z-50">
              <div className="px-3 sm:px-4 py-2 border-b border-zinc-100 dark:border-zinc-700">
                <p className="text-sm font-medium">Notifications</p>
              </div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-3 sm:px-4 py-2 sm:py-3 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <p className="text-xs sm:text-sm">{notification.message}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{notification.time}</p>
                </div>
              ))}
              <div className="px-3 sm:px-4 py-2 border-t border-zinc-100 dark:border-zinc-700">
                <button className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={handleProfileClick}
            className="flex items-center gap-1 sm:gap-2 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <div className="relative">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-600">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Profile Photo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white dark:border-zinc-800 rounded-full"></div>
            </div>
            <span className="text-xs sm:text-sm font-medium hidden sm:block text-zinc-900 dark:text-white">Harsh Gupta</span>
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Profile Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 py-2 z-50">
              <div className="px-3 sm:px-4 py-2 border-b border-zinc-100 dark:border-zinc-700">
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-white">Harsh Gupta</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">hsg99100@gmail.com</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                </div>
              </div>
              
              <button
                onClick={handleProfile}
                className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </button>
              
              <button
                onClick={handleSettings}
                className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
              
              <div className="border-t border-zinc-100 dark:border-zinc-700 mt-1">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2 text-red-600 dark:text-red-400"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(isDropdownOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsNotificationOpen(false);
          }}
        />
      )}
    </nav>
  );
}
