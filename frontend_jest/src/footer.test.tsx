import { render, screen, within } from "@testing-library/react";
import { Footer } from "./footer";

const setup = () => {
  render(
    <Footer>
      <span>{"フッター"}</span>
    </Footer>,
  );
};

test("フッターに内容が表示される", () => {
  setup();

  const footer = screen.getByRole("contentinfo");

  expect(within(footer).getByText("フッター")).toBeVisible();
});
