import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import CloseIcon from "@mui/icons-material/Close";
import Chip from ".";
import { fireEvent, userEvent } from "@storybook/testing-library";

afterEach(cleanup);

describe("testing chip", () => {
  it("should render chip", () => {
    render(<Chip label="chiptest" />);
    expect(screen.getByTestId("chip-tag")).toBeInTheDocument();
  });
  it("should render chip label", () => {
    render(<Chip label="testlabel" />);
    expect(screen.getByTestId("chip-tag")).toHaveTextContent("testlabel");
  });
  it("should fire event on clicking delete icon", () => {
    const handleDelete = jest.fn();
    render(<Chip label="testlabel" handleDelete={handleDelete} />);
    const deleteIcon = screen.getByTestId("delete-icon");
    expect(deleteIcon).toBeInTheDocument();
    userEvent.click(deleteIcon);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
