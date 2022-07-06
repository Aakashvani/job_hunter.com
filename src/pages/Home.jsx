import React, { useState, useEffect } from "react";
import JobList from "../components/JobList";
import data from "../assets/data.json";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs);

  return (
    <>
      {jobs.length === 0 ? (
        <p>Jobs are Fetching</p>
      ) : (
        jobs.map((jobs) => <JobList jobs={jobs} key={jobs.id} />)
      )}
    </>
  );
}
