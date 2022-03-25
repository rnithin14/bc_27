import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import SavedJobsPage from "./index";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

afterEach(cleanup);
jest.mock("axios");

describe("testing saved jobs page", () => {
  it("should check axios call", async () => {
    render(
      <MemoryRouter>
        <SavedJobsPage />
      </MemoryRouter>
    );

    jest.mock("../../../hooks", () => ({
      __esModule: true,
      useAxios: () => ({}),
    }));

    expect(axios.request).toHaveBeenCalled();
  });
});
