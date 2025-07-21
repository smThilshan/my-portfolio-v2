import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto mb-4">
          <Image src={assets.mail_icon} alt="" className="w-6 " />
          thilshan.dev@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 px-3 py-3">
        <p>© 2025 Thilshan Mohamed. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-4 sm:mt-0 text-sm sm:text-base">
            <li><a target="_blank" href="https://github.com/smThilshan">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/thilshan-mohamed/">LinkedIn</a></li>
            <li><a target="_blank" href="https://wa.me/971503586360">Whatsapp</a></li>
            <li><a target="_blank" href="https://www.instagram.com/mohamed_thilshan/profilecard/?igsh=cWpnMmh5bTFnZGFh">Instagram</a></li>
            <li><a target="_blank" href="https://www.facebook.com/share/wUeRVRSTczgxaBof/?mibextid=qi2Omg">Facebook</a></li>
            <li><a target="_blank" href="https://x.com/Thilshan20?t=utZ1BHaW2caPFjSmj0hpPQ&s=08">X</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
