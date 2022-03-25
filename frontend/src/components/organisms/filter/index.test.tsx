import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Filter from "./index";


describe("testing filter organism", () => {

  it("should render filter button",()=>{
     render(<Filter/>);
    const testImage = screen.getByTestId("button");
    expect(testImage).toBeInTheDocument();
  })
  it("should fire dialog",()=>{
    render(<Filter/>);
    const testImage = screen.getByTestId("button");
    fireEvent.click(testImage);
    const dialog = screen.getByTestId("dialog");
    expect(dialog).toBeInTheDocument();
  })

it("should close the dialog on click of cross",()=>{
      render(<Filter/>);
        const testImage = screen.getByTestId("button");
        fireEvent.click(testImage);
        const dialog = screen.getByTestId("dialog");
        const cross = screen.getByTestId("cross");
        fireEvent.click(cross);
        expect(testImage).toBeInTheDocument();
        })})

