import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButtonExample } from "./icon-button";

const setup = () => {
  const user = userEvent.setup();

  render(<IconButtonExample />);

  return { user };
};

test("お気に入りというアイコンボタンが表示される", () => {
  setup();

  expect(screen.getByRole("button", { name: "お気に入り" })).toBeVisible();
});

test("お気に入りというアイコンボタンを切り替えることができる", async () => {
  const { user } = setup();
  const button = screen.getByRole("button", { name: "お気に入り" });

  expect(button).toHaveAttribute("aria-pressed", "false");

  await user.click(button);

  expect(button).toHaveAttribute("aria-pressed", "true");

  await user.click(button);

  expect(button).toHaveAttribute("aria-pressed", "false");
});
