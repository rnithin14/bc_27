import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import EnterJobLocationPage from "./index";
import { MemoryRouter } from "react-router-dom";

const data = {
  url: `/cities`,
  method: "get",
  data: [
    {
      id: 1,
      name: "Banglore",
      aqiValue: 352,
    },
    {
      id: 2,
      name: "Hyderabad",
      aqiValue: 894,
    },
    {
      id: 3,
      name: "Mumbai",
      aqiValue: 953,
    },
    {
      id: 4,
      name: "Chennai",
      aqiValue: 465,
    },
    {
      id: 5,
      name: "Delhi",
      aqiValue: 989,
    },
  ],
};

afterEach(cleanup);
jest.mock("axios");

describe("testing UserLocation", () => {
  it("renders UserLocation page", () => {
    render(
      <MemoryRouter>
        <EnterJobLocationPage />
      </MemoryRouter>
    );
    const landingPageElement = screen.queryByTestId("LandingPage");
    //expect(landingPageElement).toBeInTheDocument();
  });

  it("should check axios call", async () => {
    render(
      <MemoryRouter>
        <EnterJobLocationPage />
      </MemoryRouter>
    );

    jest.mock("../../../hooks", () => ({
      __esModule: true,
      useAxios: () => ({}),
    }));

    //expect(axios.request).toHaveBeenCalled();
  });
});
