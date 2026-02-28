import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import React from "react";

describe("App", () => {
  it("renders the main page content", () => {
    render(<App />);
    expect(screen.getByText(/Connect is a Malaysia-based global workforce solutions company/i)).toBeInTheDocument();
  });
});
