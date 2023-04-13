import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FormSearch from "./FormSearch";

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

  describe("When the user writes in the 'Search' input", () => {
    test("Then it should changes the value of this input", async () => {
      const textWritten = "League of Legends";
      const placeHolderText = "Find your game";

      render(<FormSearch />);

      const targetInput = screen.getByPlaceholderText(placeHolderText);

      await act(async () => await userEvent.type(targetInput, textWritten));

      expect(targetInput).toHaveValue(textWritten);
    });
  });
});
