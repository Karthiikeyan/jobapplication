'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Page = ({params}) => {
  const [data, setData] = useState(null);

   const fetchData = async () => {
     try {
       const response = await axios.get("/api/job", {
         params: {
           id: params.id,
         },
       });
       setData(response.data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   useEffect(() => {
     fetchData();
   }, [params.id]);


  return (
    <div className="flex flex-col items-center justify-center w-full p-20">
      {data !== null ? (
        <>
          <div className="bg-white rounded-lg shadow-md w-[70%] p-6">
            <div className="flex items-center justify-center">
              <h1 className="mb-4 text-3xl font-bold text-teal-500">
                {data.title}
              </h1>
            </div>

            <div className="flex items-center justify-between w-full p-4 overflow-hidden bg-teal-100 rounded-lg group ">
              <img
                src={data.image}
                alt="Card Image"
                className="w-16 h-16 mr-4 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <p className="text-sm">{data.location}</p>
                <div className="flex mt-2">
                  <span className="px-2 py-1 mr-2 text-white bg-teal-500 rounded-full">
                    {data.jobtype}
                  </span>
                  <span className="px-2 py-1 text-white bg-teal-500 rounded-full">
                    {data.salary}
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 mt-4 text-white bg-teal-500 rounded-md cursor-pointer">
                Apply Now
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <p className="font-bold">Job Description: </p>
              <p className="mb-4 text-lg">{data.title}</p>
              <ul className="pl-4 mb-4 list-disc">
                <li>{data.description}</li>
              </ul>
              <p className="mb-2 font-bold">
                About the Company: {data.company}
              </p>
              <ul className="pl-4 list-disc">
                <li>{data.companydescription}</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Page