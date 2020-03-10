import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import API from "../../core/jobs-api";

import JobSearch from "./JobSearch";

jest.mock("../../core/jobs-api");

const setup = () => {
  return render(<JobSearch getJobs={API.getJobs} />);
};

it("renders component correctly", () => {
  const component = setup();
  expect(component).toBeDefined();
});

describe("JobSearch", () => {
  it("Complete form and search for jobs", async () => {
    const { getByTestId } = setup();

    const locationInput = getByTestId("locationInput");
    const descriptionInput = getByTestId("descriptionInput");
    const checkboxInput = getByTestId("checkboxInput");
    const submitBtn = getByTestId("submitBtn");

    fireEvent.change(locationInput, {
      target: {
        value: "New York",
      },
    });

    // await wait(() => expect(locationInput.nodeValue).toBe("New York"));

    fireEvent.change(descriptionInput, {
      target: {
        value: "Javascript",
      },
    });

    //await wait(() => expect(descriptionInput.nodeValue).toBe("Javascript"));

    fireEvent.change(checkboxInput, {
      target: {
        value: true,
      },
    });

    //await wait(() => expect(checkboxInput.nodeValue).toBe(true));

    // fireEvent.click(submitBtn);

    // await wait(() => {
    //   expect(API.getJobs).toBeCalled();
    // });
  });
});
