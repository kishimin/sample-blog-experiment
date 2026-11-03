import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioForm } from "./radio";

const setup = () => {
  const user = userEvent.setup();

  render(<RadioForm />);

  return { user };
};

test("のんびりというラジオの選択肢と初期値が表示される", () => {
  setup();

  expect(screen.getByRole("radiogroup", { name: "のんびり" })).toBeVisible();
  expect(screen.getByRole("radio", { name: "未設定" })).toBeChecked();
  expect(screen.getByRole("radio", { name: "のんびり" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "マイペース" })).not.toBeChecked();
});

test("のんびりというラジオの選択を切り替えることができる", async () => {
  const { user } = setup();

  await user.click(screen.getByRole("radio", { name: "のんびり" }));

  expect(screen.getByRole("radio", { name: "のんびり" })).toBeChecked();
  expect(screen.getByRole("radio", { name: "未設定" })).not.toBeChecked();

  await user.click(screen.getByRole("radio", { name: "マイペース" }));

  expect(screen.getByRole("radio", { name: "マイペース" })).toBeChecked();
  expect(screen.getByRole("radio", { name: "のんびり" })).not.toBeChecked();
});

test("のんびりというラジオのヘルパーテキストが表示される", () => {
  setup();

  expect(screen.getByRole("radiogroup", { name: "のんびり" })).toHaveAccessibleDescription("のんびり");
});
