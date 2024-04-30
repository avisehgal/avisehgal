import type { NextPage } from 'next';
import Image from 'next/image'; 

const Home: NextPage = () => {
    return (
        <div className="relative bg-`var(--background-color)` transition-colors duration-500">
        <header className=" text-center py-6">
          <div >
            {/* <Image
              src="https://i.ibb.co/bHC4LT0/cover.jpg"
              alt="Cover Image"
              layout="fill"
              className="image"
              quality={100}
            /> */}
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-hind-madurai dark:text-stroke">Hello, I'm Avi 👨🏽‍💻</h1>
            </div>
          </div>
        </header>
        <main >
          <section> {/* Keep padding top to push content below the header image */}
            <p className="text-xl">A software developer, hobbyist photographer and home cook. I love writing code with python, designing elastic backends and drinking coffee. Explore my work and thoughts.</p>
          </section>
        </main>
      </div>
          
  );
};

export default Home;
