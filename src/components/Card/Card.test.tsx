import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { mockGame } from "../../mocks/CardMocks";
import "@testing-library/jest-dom";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      render(<Card game={mockGame} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a title with the text 'OverWatch 2'", () => {
      const title = "OverWatch 2";

      render(<Card game={mockGame} />);

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Game details'", () => {
      const buttonText = "Game details";

      render(<Card game={mockGame} />);

      const expectedButton = screen.getByRole("link", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
