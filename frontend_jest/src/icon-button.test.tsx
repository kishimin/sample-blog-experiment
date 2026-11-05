import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./icon-button";

test("アイコンボタンを名前で識別して操作できる", async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  render(<IconButton aria-label="閉じる" onClick={onClick}><span aria-hidden="true">×</span></IconButton>);
  await user.click(screen.getByRole("button", { name: "閉じる" }));

  expect(onClick).toHaveBeenCalledTimes(1);
});
