import Image from "next/image";
import { assets, projectsList } from "@/assets/assets";
import Breadcrumb from "../components/Breadcrumb";


export default function Projects() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" }
  ];
  return (
    <div className="">
    
    <div className="px-[4%] py-8 scroll-mt-20">
          <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                     <Image src={assets.header_bg_color} alt="" className="w-full" />
                   </div>
        <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-center text-4xl sm:text-5xl font-ovo mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsList.map((project, i) => (
          <div
            key={i}
            className="flex flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 bg-white"
          >
            <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-500 mb-4 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.remarks && (
                <p className="text-xs text-gray-400 mb-4 italic">⭐ {project.remarks}</p>
              )}

              <div className="mt-auto flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
