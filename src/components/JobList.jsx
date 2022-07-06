import React from "react";
import { Link } from "react-router-dom";
import Apply from "../pages/Apply";

export default function JobList({
  jobs: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) {
  const langAndTools = [];

  if (languages) {
    langAndTools.push(...languages);
  }
  if (tools) {
    langAndTools.push(...tools);
  }

  return (
    <div className="flex bg-white shadow-md my-4 container mx-auto p-10 justify-between items-center">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt={company} />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="font-thin text-black text">{company}</h3>
          <h2 className="font-semibold text-xl">{position}</h2>
          <p className="text-gray-700">
            {postedAt} &#183; {contract} &#183; {location}
          </p>
        </div>
      </div>

      <div className=" flex items-center ">
        {langAndTools
          ? langAndTools.map((langAndTools) => (
              <span className="text-black bg-blue-300 font-bold m-2 p-2 rounded">
                {langAndTools}
              </span>
            ))
          : ""}
      </div>

      <Link to="/apply" path={<Apply/>}>
        <button className="text-white bg-blue-600 font-bold  p-4  rounded">
          Apply Now
        </button>
      </Link>
    </div>
  );
}
