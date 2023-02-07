import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  it("Deve conter a prop color com valor danger", async () => {
    render(<Header />);

    const title = await screen.findByText(/Integração contínua/i);
    expect(title).toBeInTheDocument();
  });
});
