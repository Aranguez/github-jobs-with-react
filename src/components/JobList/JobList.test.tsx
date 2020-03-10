import React from "react";
import { render } from "@testing-library/react";

import JobsList, { Props as PropsTypes } from "./JobList";

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

const setup = (props: PropsTypes) => {
  return render(<JobsList {...props} />);
};

const mockProps = {
  items: [
    {
      id: "1",
      title: "Job Title 1",
      company: "Company name 1"
    },
    {
      id: "2",
      title: "Job Title 2",
      company: "Company name 2"
    },
    {
      id: "3",
      title: "Job Title 3",
      company: "Company name 3"
    },
  ],
  setLikedJobs: jest.fn()
};

it("renders component correctly", () => {
  const component = setup(mockProps);
  expect(component).toBeDefined();
});

describe("JobList", () => {
  it("Render a list of jobs", () => {
    const MockComponent = setup(mockProps);

    const { getByText, container } = MockComponent;

    const idNumberOne = container.getElementsByClassName("content")[0].id;
    const idNumberTwo = container.getElementsByClassName("content")[1].id;
    const idNumberThree = container.getElementsByClassName("content")[2].id;

    const jobTitleOne = getByText("Job Title 1");
    const jobTitleTwo = getByText("Job Title 2");
    const jobTitleThree = getByText("Job Title 3");

    const companyNameOne = getByText("Company name 1");
    const companyNameTwo = getByText("Company name 2");
    const companyNameThree = getByText("Company name 3");

    expect(idNumberOne).toBe("1");
    expect(idNumberTwo).toBe("2");
    expect(idNumberThree).toBe("3");

    expect(jobTitleOne).toBeInTheDocument();
    expect(jobTitleTwo).toBeInTheDocument();
    expect(jobTitleThree).toBeInTheDocument();

    expect(companyNameOne).toBeInTheDocument();
    expect(companyNameTwo).toBeInTheDocument();
    expect(companyNameThree).toBeInTheDocument();
  });
});
