import { render, screen, within } from "@testing-library/react";
import { Footer } from "./footer";

const setup = () => {
  render(<Footer />);
};

test("フッターにサイト名が表示される", () => {
  setup();

  const footer = screen.getByRole("contentinfo");

  expect(within(footer).getByText("© のんびり")).toBeVisible();
});
