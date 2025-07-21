import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-ovo">
        Explore a selection of projects that highlight my expertise in full-stack development. 
        From intuitive user interfaces to robust backend systems, these works reflect my 
        commitment to delivering clean, scalable, and high-performance applications across 
        web and mobile platforms.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5  left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="send-icon" className="w-5" />
            </div>
            </div>
          </div>
        ))}
      </div>
      <a href="/projects" className="w-max flex items-center justify-center gap-2 text-gray-500 border-[0.5px] border-gray-500 rounded-full py-3 px-10 mx-auto my-20 bg-primary-hover duration-500">Show more
        <Image src={assets.right_arrow_bold} alt="right-arrow" className="w-4"/>
      </a>
    </div>
  );
};

export default Work;
