import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am a passionate full-stack developer with experience in building
            modern, responsive web and mobile applications. I enjoy solving
            complex problems, learning new technologies, and creating clean,
            maintainable code. My goal is to deliver high-quality software that
            provides a great user experience and helps businesses grow.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(
              ({ icon, iconDark, title, description, route }, index) => (
                <Link key={index} href={route}>
                  <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer bg-primary-hover hover:-translate-y-1 duration-500 relative group">
                    {/* Arrow in corner */}
                    <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300">
                      <Image
                        src={assets.arrow_icon}
                        alt="arrow"
                        className="w-4 h-4"
                      />
                    </span>

                    <Image src={icon} alt={title} className="w-7 mt-3" />
                    <h3 className="my-4 font-semibold text-gray-500">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm">{description}</p>
                  </li>
                </Link>
              )
            )}
          </ul>
          <h4 className="my-6 text-gray-500 font-ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
