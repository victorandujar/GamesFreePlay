import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { mockGameOverWatch } from "../../mocks/gameMocks/gameMocks";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image", () => {
      render(
        <BrowserRouter>
          <Card game={mockGameOverWatch} />
        </BrowserRouter>
      );

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a title with the text 'OverWatch 2'", () => {
      const title = "OverWatch 2";

      render(
        <BrowserRouter>
          <Card game={mockGameOverWatch} />
        </BrowserRouter>
      );

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Game details'", () => {
      const buttonText = "Game details";

      render(
        <BrowserRouter>
          <Card game={mockGameOverWatch} />
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("link", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
