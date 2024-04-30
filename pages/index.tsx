import type { NextPage } from 'next';
import { DiPython, DiMongodb, DiNodejsSmall, DiReact } from 'react-icons/di';
import { SiExpress, SiFlask, SiNextdotjs, SiTypescript, SiTerraform } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { TbFileTypeSql } from "react-icons/tb";

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
    { icon: <SiTerraform />, name: 'Terraform' }
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
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
                <br></br>
                <br></br>
                <br></br>
            <div className="flex items-center justify-center">
            <p className="text-2xl">Tech I'm good with</p>
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
