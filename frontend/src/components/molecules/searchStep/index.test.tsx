import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import SearchStep from "./index";
import tick from "../../../assets/icons/tick.svg";

describe("testing searchStep", () => {
  it("renders a SearchStep notdone component", () => {
    render(
      <SearchStep
        heading="your location"
        status="notdone"
        number={1}
        icon={tick}
      />
    );
    const ReactElement = screen.queryByTestId("notdone");

    waitFor(() => expect(ReactElement).toBeInTheDocument());
  });
  it("renders a SearchStep current component", () => {
    render(
      <SearchStep
        heading="your location"
        status="current"
        number={1}
        icon={tick}
      />
    );
    const ReactElement = screen.queryByTestId("current");
    waitFor(() => expect(ReactElement).toBeInTheDocument());
  });
  it("renders a SearchStep done component", () => {
    render(
      <SearchStep
        heading="your location"
        status="done"
        number={1}
        icon={tick}
      />
    );
    const ReactElement = screen.queryByTestId("done");
    waitFor(() => expect(ReactElement).toBeInTheDocument());
  });
});
