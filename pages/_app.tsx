import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  // When the component mounts and updates, check local storage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  // Use useEffect to update the body's class and local storage when darkMode changes
  useEffect(() => {
    const className = 'dark';
    if (darkMode) {
      document.documentElement.classList.add(className);
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove(className);
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div className="container mx-auto px-4 bg-white dark:bg-black">
      <header className="flex justify-between items-center py-6 font-quicksand">
        {/* Left side of the nav */}
        <nav className="flex-grow">
        
        </nav>
        {/* Right side of the nav - Dark mode toggle */}
        <div>
            <Link href="/values" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">About</span></Link>
            <Link href="/blog" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Blog</span></Link>
            <Link href="/projects" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Projects</span></Link>
            <Link href="/photography" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Photography</span></Link>
          </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="container mx-auto px-4 bg-white dark:bg-black">
        <Component {...pageProps} />
      </main>
      <footer className="text-center py-6 bg-white dark:bg-black">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Avi Sehgal</p>
      </footer>
    </div>
  );
}

export default MyApp;
