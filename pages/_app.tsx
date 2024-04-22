import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6 font-quicksand"> {/* Added font class here */}
        <Link href="/">          
            <Image src="/avi.png" alt="Logo" width={100} height={100} />
        </Link>
        <nav>
          <Link href="/values" className="text-lg text-gray-700 hover:text-gray-900 mx-2">About</Link>
          <Link href="/blog" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Blog</Link>
          <Link href="/projects" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Projects</Link>
          <Link href="/photography" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Photography</Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="text-center py-6">
        <p className="text-gray-600">© {new Date().getFullYear()} Avi Sehgal</p>
      </footer>
    </div>
  );
}

export default MyApp;
