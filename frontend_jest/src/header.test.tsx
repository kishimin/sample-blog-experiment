import { render, screen, within } from "@testing-library/react";
import { Header } from "./header";

const setup = () => {
  render(
    <Header>
      <a href={"/"}>{"ホーム"}</a>
    </Header>,
  );
};

test("ヘッダーにホームへのリンクが表示される", () => {
  setup();

  const header = screen.getByRole("banner");

  expect(within(header).getByRole("link", { name: "ホーム" })).toHaveAttribute(
    "href",
    "/",
  );
});
