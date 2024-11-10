"use client"

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-900 text-white">
        <div className="container border-t-0 border-gray-300 flex justify-center sm:px-4 py-9 mx-auto items-center w-[100%]">
          <ul className="flex gap-4 sm:gap-9 text-[20px] sm:text-[25px]  ">
            <li className="animate  hover:text-blue-500 rounded-full p-2 bg-gray-800">
              <Link
                className=" rounded-xl"
                target="_blank"
                href={
                  "https://www.linkedin.com/in/uzma-ahmed-3557402ba/"
                }
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="animate hover:text-gray-400  rounded-full p-2 bg-gray-800">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"https://github.com/uzmahmed26"}
              >
                <FaGithub />
              </Link>
            </li>
            <li className="animate hover:text-rose-500  rounded-full p-2 bg-gray-800">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"mailto: uzmahmed26.uk@gmail.com"}
              >
                <MdEmail />
              </Link>
            </li>

            <li className="animate rounded-full p-2 bg-gray-800">
              <Link className="rounded-xl  hover:text-blue-500"
               target="_blank"
               href={"https://www.facebook.com/uzmahmed"}>
                <FaSquareFacebook />
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-center pb-7 text-[12px] sm:text-[16px]">Copyright &copy; 2024 Designed by UzmaAhmed(GIAIC-2024) All right Reserved</p>
      </footer> 
    </div>
  );
};

export default Footer;
