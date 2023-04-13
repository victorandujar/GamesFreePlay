import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the header text 'FreeGames Collection'", () => {
      const headerText = "FreeGames Collection";

      render(
        <Router>
          <Header />
        </Router>
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
