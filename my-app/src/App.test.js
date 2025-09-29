import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main title", () => {
  render(<App />);
  expect(
    screen.getByText(/Створення та робота з компонентами\. Робота з props/i)
  ).toBeInTheDocument();
});
