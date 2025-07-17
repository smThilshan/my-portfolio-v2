import { assets, languageList } from '@/assets/assets';
import Image from 'next/image';
import Breadcrumb from "../components/Breadcrumb";

export default function Languages() {
      const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Languages", href: "/languages" }
  ];
return (
    <div className="  px-[4%] py-8 scroll-mt-20">
          <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                     <Image src={assets.header_bg_color} alt="" className="w-full" />
                   </div>
      <Breadcrumb items={breadcrumbItems} />
      <h4 className="text-center mb-2 text-lg text-gray-500 font-ovo">My Skills</h4>
      <h2 className="text-center text-5xl font-ovo mb-12">Languages & Frameworks</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {languageList.map(({ name, icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="w-16 h-16 mb-4">
              <Image
                src={icon}
                alt={name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
