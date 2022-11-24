import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("full app test", () => {
  it("should render correctly", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", { name: /magic match/i });
    expect(titleElement).toBeInTheDocument();
  });
  it("should start a new game", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("button");
    const modal = screen.getByTestId("modal");
    const turnsElement = screen.getByTestId("turns");
    fireEvent.click(buttonElement);
    expect(modal).not.toBeVisible();
    expect(turnsElement.textContent).toBe("Turns: ");
  });
});
