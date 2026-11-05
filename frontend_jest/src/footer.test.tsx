import { render, screen, within } from "@testing-library/react";
import { Footer } from "./footer";

test("フッターに内容が表示される", () => {
  render(<Footer><span>フッター</span></Footer>);

  expect(within(screen.getByRole("contentinfo")).getByText("フッター")).toBeVisible();
});
