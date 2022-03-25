import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import RecommendedJobs from "./index";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

afterEach(cleanup);
jest.mock("axios");

const data = {
  url: `/jobs?_start=0&_end=1`,
  method: "get",
  data: [
    {
      id: 1,
      logo: "https://1000logos.net/wp-content/uploads/2017/02/Colors-HP-Logo.jpg",
      title: "User Experience Designer",
      company: "Hp",
      location: "Hitech City,Hyderabad -500072",
      city: "Hyderabad",
      commuteMode: ["metro", "car", "bus", "bike"],
      distance: "31 - 40 kms",
      jobType: "Internship",
      datePosted: "Past week",
      experinceLevel: "Mid-Level",
      greenCommute: "No",
      skills: ["Ui Design", "Ux design"],
    },
    {
      id: 2,
      logo: "https://logowik.com/content/uploads/images/398_bmw.jpg",
      title: "User Experience Designer",
      company: "BMW",
      location: "Hitech City, Hyderabad -500072",
      commuteMode: ["bike", "car"],
      distance: "0 - 10 kms",
      jobType: "Full-Time",
      datePosted: "Past 24hrs",
      experinceLevel: "Fresher",
      greenCommute: "No",
      skills: ["Ui prototyping", "Interaction design"],
    },
  ],
};

describe("testing recommended jobs page", () => {
  it("should render textfields", () => {
    render(
      <MemoryRouter>
        <RecommendedJobs />
      </MemoryRouter>
    );
    const textFields = screen.getAllByTestId("text-field");
    expect(textFields.length).toBe(2);
  });
  it("should render filter button", () => {
    render(
      <MemoryRouter>
        <RecommendedJobs />
      </MemoryRouter>
    );
    const testImage = screen.getByTestId("button");
    expect(testImage).toBeInTheDocument();
  });
  it("should check axios call", async () => {
    render(
      <MemoryRouter>
        <RecommendedJobs />
      </MemoryRouter>
    );

    jest.mock("../../../hooks", () => ({
      __esModule: true,
      useAxios: () => ({ response: data, error: false, loading: false }),
    }));

    expect(axios.request).toHaveBeenCalled();
  });
});
