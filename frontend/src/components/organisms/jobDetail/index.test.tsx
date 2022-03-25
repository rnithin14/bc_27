import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import JobDetail from ".";
import { jobDetailData } from "./props";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@storybook/testing-library";
import axios from "axios";

afterEach(cleanup);
jest.mock("axios");

describe("Job detail tab", () => {
  it("Renders job detail tabs", () => {
    render(
      <MemoryRouter>
        <JobDetail {...jobDetailData}></JobDetail>
      </MemoryRouter>
    );
    jest.mock("../../../hooks/", () => ({
      __esModule: true,
      useAxios: () => ({}),
    }));

    expect(axios.request).toHaveBeenCalled();

    userEvent.click(screen.getAllByTestId("button")[2]);
    expect(screen.getByText("Common Routes")).toBeInTheDocument();

    userEvent.click(screen.getAllByTestId("button")[4]);
    expect(screen.getAllByTestId("card").length).toBe(4);
  });
});
