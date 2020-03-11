import React from "react";
import { render } from "@testing-library/react";
import JobList from "./JobList";

import { localStorageMock } from "../../utils/browserMocks";

localStorageMock.setItem(
  "likes",
  JSON.stringify([
    {
      id: "1",
      title: "Job",
      company: "Company"
    }
  ])
);

const props = {
  items: [
    {
      id: "1",
      title: "Job",
      company: "Company"
    },
    {
      id: "2",
      title: "Job2",
      company: "Company2"
    }
  ],
  setLikedJobs: jest.fn()
};

it("renders component correctly", () => {
  const component = render(<JobList {...props} />);
  expect(component).toBeTruthy();
});
