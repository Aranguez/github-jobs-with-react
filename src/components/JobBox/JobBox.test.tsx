import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import JobBox from "./JobBox";
import { Props as PropsTypes } from "./JobBox";

const setup = (props: PropsTypes) => {
  return render(<JobBox {...props} />);
};

it("renders component correctly", () => {
  const component = setup({
    item: {
      id: "1",
      title: "Job Title",
      company: "Company name",
    },
    setLikedJobs: jest.fn(),
    isLiked: false,
  });
  expect(component).toBeDefined();
});

describe("JobBox", () => {
  it("render a not liked job", () => {
    const MockComponent = setup({
      item: {
        id: "1",
        title: "Job Title",
        company: "Company name",
      },
      setLikedJobs: jest.fn(),
      isLiked: false,
    });

    const { getByText, container } = MockComponent;

    const idNumber = container.getElementsByClassName("content")[0].id;
    const like = container.getElementsByClassName("fa-heart-o")[0];
    const jobTitle = getByText("Job Title");
    const companyName = getByText("Company name");

    expect(idNumber).toBe("1");
    expect(like).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
  });

  it("render a liked job", () => {
    const MockComponent = setup({
      item: {
        id: "1",
        title: "Job Title",
        company: "Company name",
      },
      setLikedJobs: jest.fn(),
      isLiked: true,
    });

    const { getByText, baseElement } = MockComponent;

    const idNumber = baseElement.getElementsByClassName("content")[0].id;
    const like = baseElement.getElementsByClassName("fa-heart")[0];
    const jobTitle = getByText("Job Title");
    const companyName = getByText("Company name");

    expect(idNumber).toBe("1");
    expect(like).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
  });

  it("render a not liked job", async () => {
    const MockComponent = setup({
      item: {
        id: "1",
        title: "Job Title",
        company: "Company name",
      },
      setLikedJobs: jest.fn(),
      isLiked: false,
    });

    const { getByText, container, getByTestId } = MockComponent;

    const idNumber = container.getElementsByClassName("content")[0].id;
    const likeIconBtn = getByTestId('likeBtn');
    const jobTitle = getByText("Job Title");
    const companyName = getByText("Company name");

    expect(idNumber).toBe("1");
    expect(likeIconBtn.classList.contains('fa-heart-o')).toBeTruthy();
    expect(jobTitle).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();

    fireEvent.click(likeIconBtn)

    await wait(() => {
      expect(likeIconBtn.classList.contains('fa-heart')).toBeTruthy();
    })
  });
});
