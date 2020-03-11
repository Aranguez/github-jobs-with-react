import React from "react";
import { render } from "@testing-library/react";
import JobBox from "./JobBox";

const props = {
  item: {
    id: "1",
    title: "Job",
    company: "Company"
  },
  setLikedJobs: jest.fn(),
  isLiked: false
};

it("renders component correctly", () => {
  const component = render(<JobBox {...props} />);
  expect(component).toBeTruthy();
});
