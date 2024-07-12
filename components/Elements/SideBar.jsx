import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


const SideBar = ({closeNav, showNav}) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="flex flex-col bg-slate-100">
      <div className={`${navOpenStyle} md:w-25 w-80 h-[100vh] py-6 border border-black relative`}>
        <div className={`${navOpenStyle} flex flex-col justify-center absolute items-center sm:w-[80%]`}>
          <Link
            href="/admin/create"
            className="flex items-center gap-3 px-3 py-2 font-medium bg-teal-500 cursor-pointer rounded text-white hover:bg-teal-800 w-[80%]"
          >
            <p>Create Job</p>
          </Link>
          <Link
            href="/admin/jobslist"
            className="flex items-center gap-3 px-3 py-2 font-medium bg-teal-500 cursor-pointer rounded text-white hover:bg-teal-800 w-[80%] mt-4"
          >
            <p>View Jobs</p>
          </Link>
        </div>
        <AiFillCloseCircle onClick={closeNav} className="text-black font-bold rounded-full absolute top-[1.4rem] right-[1.4rem] cursor-pointer w-[1.6rem] h-[1.6rem] bg-white" />
      </div>

      {/* <div className={`fixed top-0 transition duration-500 transform-all z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}>
        <ul className={`fixed top-0 flex flex-col items-center justify-center text-white h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-teal-500 space-y-10 z-[10006]`}>
          <li className="text-[25px] sm:text-[30px]">
            <Link href="#">Create Job</Link>
          </li>
          <li className="text-[25px] sm:text-[30px]">
            <Link href="#">View Jobs</Link>
          </li>
          <AiFillCloseCircle className='absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white' />
        </ul>
      </div> */}
    </div>
  );
}

export default SideBar