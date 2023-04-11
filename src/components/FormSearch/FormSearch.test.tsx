import { render, screen } from "@testing-library/react";
import FormSearch from "./FormSearch";
import "@testing-library/jest-dom";

describe("Given a FormSearch component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Search'", () => {
      const textButton = "Search";

      render(<FormSearch />);

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show an input with a placeholder text 'Find your game'", () => {
      const text = "Find your game";

      render(<FormSearch />);

      const expectedInput = screen.getByPlaceholderText(text);

      expect(expectedInput).toBeInTheDocument();
    });
  });
});
