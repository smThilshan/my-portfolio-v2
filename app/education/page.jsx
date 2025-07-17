import Image from "next/image";
import { educationList, certificationList, assets } from "@/assets/assets";
import Breadcrumb from "../components/Breadcrumb";

export default function Education() {
          const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Education", href: "/education" }
  ];
  return (
    <div className=" px-[4%] py-8 scroll-mt-20">
             <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
               <Image src={assets.header_bg_color} alt="" className="w-full" />
             </div>
       <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-center text-4xl sm:text-5xl font-ovo mb-12">Education & Certifications</h2>

      {/* Degrees */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Degrees & Diplomas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              {edu.logo && (
                <div className="flex justify-center mb-4">
                  <Image src={edu.logo} alt={edu.institution} width={120} height={120} className="object-contain" />
                </div>
              )}
              <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.title}</h4>
              <p className="text-gray-500">{edu.institution}</p>
              <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {certificationList.map((cert, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              {cert.logo && (
                <div className="flex justify-center mb-4">
                  <Image src={cert.logo} alt={cert.issuer} width={64} height={64} className="object-contain" />
                </div>
              )}
              <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
              <p className="text-gray-500">{cert.issuer}</p>
              {cert.year && <p className="text-gray-400 text-sm mt-1">{cert.year}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
