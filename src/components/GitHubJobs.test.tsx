import React from 'react';
import { render } from "@testing-library/react";
import GithubJobs from './GithubJobs';

const setup = () => {
  return render(<GithubJobs />);
};

it("renders component correctly", () => {
  const component = setup();
  expect(component).toBeDefined();
});
