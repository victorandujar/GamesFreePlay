import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";
import GamesContextProvider from "../../store/contexts/GamesContextProvider";
import "@testing-library/jest-dom";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'See details'", () => {
      const headerText = `See details`;

      render(
        <GamesContextProvider>
          <DetailPage />
        </GamesContextProvider>
      );

      const expectedTitle = screen.getByRole("heading", { name: headerText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
