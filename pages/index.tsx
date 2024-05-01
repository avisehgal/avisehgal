import type { NextPage } from 'next';
import Image from 'next/image';  // Correct import statement

const MyComponent = () => {
  return (
    <Image
      src="/path/to/image.jpg"
      alt="Description"
      width={500}  // Specify width
      height={500}  // Specify height
      layout="responsive"  // Optional: Defines how the image should scale
    />
  );
};

import { DiPython, DiMongodb, DiNodejsSmall, DiReact } from 'react-icons/di';
import { SiJenkins , SiDassaultsystemes , SiGnubash , SiPowershell , SiKubernetes , SiAzurefunctions , SiAzuredevops , SiExpress, SiFlask, SiNextdotjs, SiTypescript, SiTerraform } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { TbFileTypeSql } from "react-icons/tb";
import { FaDocker , FaGitSquare } from "react-icons/fa";
import { FaFigma , FaAws } from "react-icons/fa6";

const TechIcons = () => {
  const icons = [
    { icon: <DiPython />, name: 'Python' },
    { icon: <VscAzure />, name: 'Azure' },
    { icon: <DiMongodb />, name: 'MongoDB' },
    { icon: <DiNodejsSmall />, name: 'Node.js' },
    { icon: <TbFileTypeSql />, name: 'SQL' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <DiReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiTerraform />, name: 'Terraform' },
    { icon: <FaGitSquare />, name: 'Git' },
    { icon: <SiAzuredevops />, name: 'Az DevOps' },
    { icon: <SiJenkins />, name: 'Jenkins' },
    { icon: <SiAzurefunctions />, name: 'Functions' },
    { icon: <SiGnubash />, name: 'Bash' },
    //{ icon: <SiKubernetes />, name: 'K8s' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <SiDassaultsystemes />, name: 'Dassault' },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer">
          <div className="text-3xl hover:text-gray-500">{item.icon}</div>
          <span className="text-xs mt-2">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
    return (
        <div className="relative bg-`var(--background-color)` transition-colors duration-500">
        <header className=" text-center py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-32 p-2">
          <div className="text-left md:flex-1">
            <h1 className="text-3xl font-hind-madurai mb-4">Hello, I'm Avi 👨🏽‍💻</h1>
            <p className="text-xl">
              A software developer, hobbyist photographer and home cook. I love writing code with python, designing elastic backends and drinking coffee. Explore my work and thoughts. Fun fact: I've been working the remote dev life for 6+ years!
            </p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-48 relative">
            <Image
              src="https://i.ibb.co/sFr1xbZ/avi.jpg"
              alt="Avi Sehgal"
              width={300}
              height={400}
              className="rounded shadow-2xl"
              quality={40}
            />
          </div>
          
        </div>
          {/* <div > */}
            {/* <Image
              src="https://i.ibb.co/bHC4LT0/cover.jpg"
              alt="Cover Image"
              layout="fill"
              className="image"
              quality={100}
            /> */}
            {/* <div className="flex items-center justify-center">
              <h1 className="text-3xl font-hind-madurai dark:text-stroke">Hello, I'm Avi 👨🏽‍💻</h1>
            </div>
          </div> */}
        </header>
        <main >
          <section> {/* Keep padding top to push content below the header image */}
            {/* <p className="text-xl">A software developer, hobbyist photographer and home cook. I love writing code with python, designing elastic backends and drinking coffee. Explore my work and thoughts. Fun fact: I've been working the remote dev life for 6+ years!</p> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className="text-left flex items-center justify-left p-2">
            <p className="text-3xl font-hind-madurai mb-4">My favourite tools 🛠️</p>
            </div>
            <br></br>
            <div className="flex flex-wrap justify-center gap-4">
            <TechIcons />
            </div>
          </section>
        </main>
      </div>
          
  );
};

export default Home;
