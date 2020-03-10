import React, { useState, FormEvent } from "react";

type FormValues = {
  location: string;
  jobDescription: string;
  fulltime: string;
};

type Props = {
  getJobs: (location: string, jobDescription: string, fulltime: string) => void;
};

const JobSearch: React.FC<Props> = ({ getJobs }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    location: "",
    jobDescription: "",
    fulltime: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { location, jobDescription, fulltime } = formValues;
    getJobs(location, jobDescription, fulltime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        onChange={handleOnChange}
        value={formValues.location}
        placeholder="Location"
        data-testid="locationInput"
      />
      <input
        name="jobDescription"
        type="text"
        value={formValues.jobDescription}
        onChange={handleOnChange}
        placeholder="Job Description"
        data-testid="descriptionInput"
      />
      <input
        name="fulltime"
        type="checkbox"
        data-testid="checkboxInput"
        value={formValues.fulltime}
        onChange={handleOnChange}
      />
      <label htmlFor="full-time">Full Time?</label>
      <button type="submit" className="submit-btn" data-testid="submitBtn">
        Search
      </button>
    </form>
  );
};

export default JobSearch;
