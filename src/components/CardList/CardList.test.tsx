import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import "@testing-library/jest-dom";
import { mockListOfGames } from "../../mocks/gameMocks/CardMocks";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card with the title 'OverWatch 2'", () => {
      const cardTitle = "OverWatch 2";

      render(<CardList games={mockListOfGames} />);

      const expectedTitle = screen.getByRole("heading", { name: cardTitle });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
