import { Job } from "../../utils/types";
const baseUrl = "https://jobs.github.com/positions.json";

class API {
  getJobs(
    description: string,
    location: string,
    fulltimeValue: string
  ): Promise<any> {
    //const setFullTime = fulltimeValue === "on" ? "true" : "false";
    return Promise.resolve([
      {
        data: "data"
      }
    ]);

    // return fetch(
    //   `${baseUrl}?description=${description}&full_time=${setFullTime}&location=${location}`
    // )
    //   .then(res => res.json())
    //   .then(data => data);
  }

  getJob(id: string): Promise<any> {
    return Promise.resolve({
      data: "data"
    });
  }
}

export default new API();
