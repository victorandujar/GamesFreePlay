import { render, screen } from "@testing-library/react";
import ButtonForm from "./ButtonForm";
import "@testing-library/jest-dom";

describe("Given a ButtonForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Search'", () => {
      const textButton = "Search";

      render(<ButtonForm className="" isDisabled={false} text={textButton} />);

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
