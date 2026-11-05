import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

test("ボタンを押すと処理が実行される", async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  render(<Button onClick={onClick}>{"保存"}</Button>);
  await user.click(screen.getByRole("button", { name: "保存" }));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("無効なボタンは操作できない", () => {
  render(<Button disabled>{"保存"}</Button>);

  expect(screen.getByRole("button", { name: "保存" })).toBeDisabled();
});
