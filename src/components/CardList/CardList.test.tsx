import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import "@testing-library/jest-dom";
import { mockListOfGames } from "../../mocks/gameMocks/gameMocks";
import { BrowserRouter } from "react-router-dom";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a card with the title 'OverWatch 2'", () => {
      const cardTitle = "OverWatch 2";

      render(
        <BrowserRouter>
          <CardList
            games={{
              games: mockListOfGames!,
              game: {
                description: "",
                developer: "",
                game_url: "",
                genre: "",
                id: 0,
                minimum_system_requirements: {
                  graphics: "",
                  memory: "",
                  os: "",
                  processor: "",
                  storage: "",
                },
                platform: "",
                publisher: "",
                release_date: "",
                screenshots: [{ image: "" }, { image: "" }, { image: "" }],
                short_description: "",
                thumbnail: "",
                title: "",
              },
            }}
          />
        </BrowserRouter>
      );

      const expectedTitle = screen.getByRole("heading", { name: cardTitle });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
