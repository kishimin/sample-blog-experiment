import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonExample } from "./button";

const setup = () => {
  const user = userEvent.setup();

  render(<ButtonExample />);

  return { user };
};

test("のんびりというボタンが表示される", () => {
  setup();

  expect(screen.getByRole("button", { name: "のんびり" })).toBeVisible();
});

test("のんびりというボタンを押すとメッセージが表示される", async () => {
  const { user } = setup();

  await user.click(screen.getByRole("button", { name: "のんびり" }));

  expect(screen.getByText("のんびりしました")).toBeVisible();
});
