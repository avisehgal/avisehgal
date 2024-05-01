import Head from 'next/head';
import Image from 'next/image';
import constructionImg from '../public/construction.svg';  // Ensure you have an SVG in your public folder

const UnderConstruction: React.FC = () => {
  return (
    <>
      <Head>
        <title>Under Construction</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <Image
          src={constructionImg}
          alt="Under Construction"
          width={192}
          height={192}
        />
        <h1 className="mt-5 text-2xl font-bold text-gray-800">Under Construction</h1>
        <p className="text-gray-600 mt-2">We're currently working on this page. Please check back later!</p>
      </div>
    </>
  );
};

export default UnderConstruction;
