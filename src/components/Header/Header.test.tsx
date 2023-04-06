import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the header text 'FreeGames Collection'", () => {
      const headerText = "FreeGames Collection";

      render(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
