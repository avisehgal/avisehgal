import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


function MyApp({ Component, pageProps }: AppProps) {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDarkMode);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('darkMode', darkMode.toString());
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    return (
      <div className="container mx-auto px-4 bg-white dark:bg-black transition-colors duration-500">
        <header className="flex justify-between items-center py-6 font-quicksand">
        <div>
            <Link href="/values" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">About</span></Link>
            <Link href="/blog" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Blog</span></Link>
            <Link href="/projects" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Projects</span></Link>
            <Link href="/photography" passHref><span className="text-lg text-gray-700 hover:text-gray-900 mx-2 cursor-pointer">Photography</span></Link>
        </div>
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-800 dark:text-gray-200 px-3 py-1 rounded">
            <IconContext.Provider value={{ size: "1.5em" }}>
              {darkMode ? <IoSunny /> : <IoMoon />}
            </IconContext.Provider>
          </button>
        </header>
        <main className="bg-white dark:bg-black transition-colors duration-500">
          <Component {...pageProps} />
        </main>
        <footer className="text-center py-6 bg-white dark:bg-black transition-colors duration-500">
          <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Avi Sehgal</p>
        </footer>
      </div>
    );
  }

export default MyApp;
