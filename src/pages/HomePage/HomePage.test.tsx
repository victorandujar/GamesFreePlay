import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import MockContextProvider from "../../mocks/Wrapper";
import { mockStore } from "../../mocks/mockStore";
import GlobalStyles from "../../styles/GlobalStyles";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const store = mockStore;

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'All games'", () => {
      const titleText = "All games";

      render(
        <BrowserRouter>
          <MockContextProvider mockStore={store!}>
            <GlobalStyles />
            <HomePage />
          </MockContextProvider>
        </BrowserRouter>
      );

      const expectedHeader = screen.getByRole("heading", { name: titleText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <BrowserRouter>
          <MockContextProvider mockStore={store!}>
            <HomePage />
          </MockContextProvider>
        </BrowserRouter>
      );

      const expectedOutput = screen.getByRole("list");

      expect(expectedOutput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Search'", () => {
      const textButton = "Search";

      render(
        <BrowserRouter>
          <MockContextProvider mockStore={store!}>
            <HomePage />
          </MockContextProvider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show the text 'Find your game and start playing.'", () => {
      const text = "Find your game and start playing.";

      render(
        <BrowserRouter>
          <MockContextProvider mockStore={store!}>
            <HomePage />
          </MockContextProvider>
        </BrowserRouter>
      );

      const expectedTitle = screen.getByRole("heading", { name: text });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
