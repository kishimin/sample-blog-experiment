import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconButton } from "./icon-button";

const setup = () => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  render(
    <IconButton aria-label={"閉じる"} onClick={onClick}>
      <span aria-hidden={true}>{"×"}</span>
    </IconButton>,
  );

  return { user, onClick };
};

test("閉じるというアイコンボタンが表示される", () => {
  setup();

  expect(screen.getByRole("button", { name: "閉じる" })).toBeVisible();
});

test("閉じるというアイコンボタンを押すと処理が実行される", async () => {
  const { user, onClick } = setup();

  await user.click(screen.getByRole("button", { name: "閉じる" }));

  expect(onClick).toHaveBeenCalledTimes(1);
});
