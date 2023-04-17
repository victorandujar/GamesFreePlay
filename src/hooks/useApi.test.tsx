import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import MockContextProvider from "../mocks/Wrapper";
import { mockDispatch, mockGameDispatch, mockStore } from "../mocks/mockStore";
import { mockGameDiablo } from "../mocks/gameMocks/gameMocks";

const dispatch = mockDispatch;
const gameDispatch = mockGameDispatch;
const store = mockStore;

describe("Given a useApi custom hook", () => {
  describe("When it is called with the function getGames", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getGames },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await getGames();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with the function getGame", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getGame },
        },
      } = renderHook(() => useApi(), {
        wrapper: ({ children }) => {
          return (
            <MockContextProvider mockStore={store}>
              {children}
            </MockContextProvider>
          );
        },
      });

      await getGame(mockGameDiablo.id);

      expect(gameDispatch).toHaveBeenCalled();
    });
  });
});
