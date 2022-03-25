import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import EnterJobSkillsPage from "./index";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);
jest.mock("axios");

describe("testing UserLocation", () => {
  it("renders UserLocation page", () => {
    render(
      <MemoryRouter>
        <EnterJobSkillsPage />
      </MemoryRouter>
    );
    const landingPageElement = screen.queryByTestId("LandingPage");
    //expect(landingPageElement).toBeInTheDocument();
  });

  it("should check axios call", async () => {
    render(
      <MemoryRouter>
        <EnterJobSkillsPage />
      </MemoryRouter>
    );

    jest.mock("../../../hooks", () => ({
      __esModule: true,
      useAxios: () => ({}),
    }));
  });
});
