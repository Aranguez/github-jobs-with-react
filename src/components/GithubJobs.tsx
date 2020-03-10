import React, { useState } from "react";

import API from "../core/jobs-api";

import JobSearch from "./JobSearch";
import JobsList from "./JobList";
import { Job, MappedJob } from "../utils/types";

const GithubJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [likedJobs, setLikedJobs] = useState<MappedJob[]>(
    JSON.parse(window.localStorage.getItem("likes")!) || []
  );

  const handleGetJobs = async (
    location: string,
    description: string,
    fulltime: string
  ) => {
    setIsLoading(true);
    API.getJobs(location, description, fulltime).then(data => {
      setIsLoading(false);
      if (data.length) {
        setJobs(data);
      } else {
        setErrorMsg("No se encontraron trabajos");
      }
    });
  };

  return (
    <div>
      <header className="container header">
        <h1>Github Jobs</h1>
      </header>
      <section className="container">
        <h1>Find your Job!</h1>
        <JobSearch getJobs={handleGetJobs} />
      </section>

      <section className="container">
        <div className="jobs-container">
          <div>
            <h3>Results</h3>
            {isLoading ? (
              <span>Loading...</span>
            ) : errorMsg ? (
              <span>{errorMsg}</span>
            ) : (
              <JobsList items={jobs} setLikedJobs={setLikedJobs} />
            )}
          </div>
          <div>
            <h3>Favorites</h3>
            <JobsList items={likedJobs} setLikedJobs={setLikedJobs} />
          </div>
        </div>

        <article id="job-info" className="job-info"></article>
      </section>
    </div>
  );
};

export default GithubJobs;
