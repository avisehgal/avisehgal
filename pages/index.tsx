import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Avi Sehgal</h1>
        <nav className="mt-4">
          <Link href="/about" className="text-lg text-gray-700 hover:text-gray-900 mx-2">About</Link>
          <Link href="/blog" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Blog</Link>
          <Link href="/projects" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Projects</Link>
          <Link href="/photography" className="text-lg text-gray-700 hover:text-gray-900 mx-2">Photography</Link>
        </nav>
      </header>
      <main>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Welcome</h2>
          <p className="text-md text-gray-600 mt-2">This is the home of Avi Sehgal. Explore my work and thoughts.</p>
        </section>
      </main>
      <footer className="text-center py-6">
        <p className="text-gray-600">© {new Date().getFullYear()} Avi Sehgal</p>
      </footer>
    </div>
  );
};

export default Home;
