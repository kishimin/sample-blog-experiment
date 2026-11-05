import { render, screen, within } from "@testing-library/react";
import { Header } from "./header";

test("ヘッダーに内容が表示される", () => {
  render(<Header><a href="/">ホーム</a></Header>);

  expect(within(screen.getByRole("banner")).getByRole("link", { name: "ホーム" })).toHaveAttribute("href", "/");
});
