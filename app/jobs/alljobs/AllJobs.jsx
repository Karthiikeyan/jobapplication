"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
import axios from "axios";
import Image from "next/image";

const AllJobs = () => {
  const [jobsList, setJobsList] = useState([]);

  const fetchJobsList = async () => {
    const response = await axios.get("/api/job");
    setJobsList(response.data.jobsList);
  };

  useEffect(() => {
    fetchJobsList();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-500">Featured Jobs</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 px-10 mb-8 md:grid-cols-2">
        {jobsList.map((job) => {
          return (
            <Link href={`/jobs/${job._id}`} key={job._id}>
              <div className="relative flex items-center p-4 overflow-hidden transition duration-300 ease-in-out transform bg-teal-100 rounded-lg cursor-pointer group hover:shadow-xl hover:scale-105">
                <Image
                  src={job.image}
                  alt="Card Image"
                  className="w-16 h-16 mr-4 rounded-full"
                  width={30}
                  height={30}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-sm">{job.location}</p>
                  <div className="flex mt-2">
                    <span className="px-2 py-1 mr-2 text-white bg-teal-500 rounded-full">
                      {job.jobtype}
                    </span>
                    <span className="px-2 py-1 text-white bg-teal-500 rounded-full">
                      {job.salary}
                    </span>
                  </div>
                </div>
                <FiBookmark className="absolute top-0 right-0 w-5 h-5 mt-2 mr-2" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllJobs;
