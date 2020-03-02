import { Job } from "../utils/types";
const baseUrl = "https://jobs.github.com/positions.json";

class API {
  getJobs(
    description: string,
    location: string,
    fulltimeValue: string
  ): Promise<Job[]> {
    const setFullTime = fulltimeValue === 'on' ? 'true' : 'false';
    return fetch(
      `${baseUrl}?description=${description}&full_time=${setFullTime}&location=${location}`
    )
      .then(res => res.json())
      .then(data => data);
  }

  getJob(id: string): Promise<Job> {
    return fetch(`https://jobs.github.com/positions/${id}.json`)
      .then(res => res.json())
      .then(data => data);
  }
}

export default new API();
