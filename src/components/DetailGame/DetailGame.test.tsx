import { render, screen } from "@testing-library/react";
import DetailGame from "./DetailGame";
import { mockGameDiablo } from "../../mocks/gameMocks/gameMocks";
import "@testing-library/jest-dom";

describe("Given a DetailGame component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Diablo'", () => {
      const gameHeading = "Diablo";

      render(<DetailGame game={mockGameDiablo} />);

      const expectedHeading = screen.getByRole("heading", {
        name: gameHeading,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
