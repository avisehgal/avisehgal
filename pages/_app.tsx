import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
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
        <div className="" style={{
            padding: `var(--padding-base)`,
            backgroundColor: `var(--background-color)`,
            color: `var(--text-color)`,
            transition: 'all 0.5s ease'
        }}> <Head>
                <title>Avi Sehgal</title>
                <link rel="icon" href="/favicon1.ico" type="image/x-icon"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#317EFB"/> 
            </Head>
            <header className="mx-auto max-w-5xl flex justify-between items-center py-6 font-quicksand">
                {/* Left side of the nav - Logo */}
                <Link href="/" passHref>
                <img
                    src="https://i.ibb.co/FJ0Q2hw/logo-png.png" 
                    alt="Logo"
                    className={`cursor-pointer ${darkMode ? "invert" : ""}`}
                    width="100" 
                    height="100"
                />
                </Link>
                {/* Right side of the nav - Pages and Dark mode toggle */}
                <div className="flex items-center">
                {/* Pages */}
                <nav>
                    <Link href="/values" passHref><span className="text-lg hover:text-gray-900 mx-2 cursor-pointer">values</span></Link>
                    <Link href="/blog" passHref><span className="text-lg hover:text-gray-900 mx-2 cursor-pointer">blog</span></Link>
                    <Link href="/projects" passHref><span className="text-lg  hover:text-gray-900 mx-2 cursor-pointer">projects</span></Link>
                    <Link href="/photography" passHref><span className="text-lg  hover:text-gray-900 mx-2 cursor-pointer">photography</span></Link>
                </nav>
                {/* Dark mode toggle button */}
                <button onClick={() => setDarkMode(!darkMode)} className="text-gray-800 dark:text-gray-200 px-3 py-1 rounded ml-4">
                    <IconContext.Provider value={{ size: "1.6em" }}>
                    {darkMode ? <IoSunny /> : <IoMoon />}
                    </IconContext.Provider>
                </button>
                </div>
            </header>
            <main className="mx-auto max-w-5xl">
                <Component {...pageProps} />
            </main>
            <footer className="text-center py-6  transition-colors duration-500">
                <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Avi Sehgal</p>
            </footer>
        </div>
     
    );
  }

export default MyApp;
