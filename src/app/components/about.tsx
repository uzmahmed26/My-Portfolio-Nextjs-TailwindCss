import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-200 text-neutral-700 min-h-[100%]">
      <div className="container mx-auto flex px-3 sm:py-24 py-12 md:flex-row items-center flex-col-reverse">
        <div className="text-left sm:pl-4 lg:flex-grow md:w-1/2 lg:pl-16 md:pl-2 flex flex-col md:items-center items-center ">
          <h1 className="mb-5 mt-6 font-bold text-[30px] sm:text-4xl text-center ">
            About ME
          </h1>

          <p className="mb-8 sm:text-[18px]  text-[14px] sm:leading-8 sm:px-5 pl-1 text-justify ">
          Welcome!,My name is Uzma Ahmed, Iam a passionate web developer and designer specializing in creating interactive, responsive, and visually engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in Next.js and Tailwind CSS, I focus on crafting projects that blend functionality with a clean, modern design aesthetic.

          My journey in web development is driven by a commitment to continuous learning and skill refinement. Currently, I am expanding my knowledge in Next.js, React, and TypeScript to build more dynamic and efficient applications. Each project I take on is an opportunity not only to challenge myself but also to produce high-quality, impactful work that resonates with users.

          Thank you for exploring my portfolio. I am excited to share my work with you, and I look forward to contributing to meaningful projects that push my creative and technical boundaries even further.
          </p>
        </div>
        <div className=" lg:max-w-lg lg:w-full w-5/6 md:w-1/2 mb-8 md:mb-0 mt-20 sm:mt-2 ">
          <Image
            className="img hover:scale-105 duration-300 ease-linear mt-7 cursor-pointer rounded-full object-cover object-center mx-auto sm:w-[22rem] w-[16rem]"
            src={require("../../../public/assets/picture/3.jpeg")}
            width={400}
            height={400}
            alt={"about-logo"}
          ></Image>
        </div>
      </div>
    </section>
  );
}
