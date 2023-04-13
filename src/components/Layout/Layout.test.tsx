import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a the web logo", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
