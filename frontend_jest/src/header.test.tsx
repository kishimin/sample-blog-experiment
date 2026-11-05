import { render, screen, within } from "@testing-library/react";
import { Header } from "./header";

const setup = () => {
  render(<Header />);
};

test("ヘッダーにサイト名とホームへのリンクが表示される", () => {
  setup();

  const header = screen.getByRole("banner");

  expect(within(header).getByRole("link", { name: "のんびり" })).toHaveAttribute(
    "href",
    "/",
  );
});
