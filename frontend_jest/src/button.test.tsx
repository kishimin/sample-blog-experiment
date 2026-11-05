import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

const setup = (disabled = false) => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  render(<Button disabled={disabled} onClick={onClick}>{"保存"}</Button>);

  return { user, onClick };
};

test("保存というボタンが表示される", () => {
  setup();

  expect(screen.getByRole("button", { name: "保存" })).toBeVisible();
});

test("保存というボタンを押すと処理が実行される", async () => {
  const { user, onClick } = setup();

  await user.click(screen.getByRole("button", { name: "保存" }));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("保存というボタンを無効にできる", () => {
  setup(true);

  expect(screen.getByRole("button", { name: "保存" })).toBeDisabled();
});
