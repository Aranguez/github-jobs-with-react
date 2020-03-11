import React from 'react';
import { render } from "@testing-library/react";
import GithubJobs from './GithubJobs';

it("Render component correctly", () => {
  const component = render(<GithubJobs />)
  expect(component).toBeTruthy();
});
