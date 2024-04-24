import type { NextPage } from 'next';
import Image from 'next/image'; 

const Home: NextPage = () => {
    return (
      <div className="mx-auto px-4 relative bg-white dark:bg-black transition-colors duration-500">
        <header className="relative text-center py-6">
          <div className="cover relative h-[300px] bg-white dark:bg-black transition-colors duration-500">
            <Image
              src="https://i.ibb.co/bHC4LT0/cover.jpg"
              alt="Cover Image"
              layout="fill"
              className="image"
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-7xl text-white font-hind-madurai dark:text-stroke">Avi Sehgal</h1>
            </div>
          </div>
        </header>
      <main>
        <section className="mt-8 pt-48"> {/* Padding top to push content below the header image */}
          <h2 className="text-2xl font-semibold">Welcome</h2>
          <p className="text-md text-gray-600 mt-2">This is the home of Avi Sehgal. Explore my work and thoughts.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
