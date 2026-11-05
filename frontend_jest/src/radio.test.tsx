import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioForm } from "./radio";

const setup = () => {
  const user = userEvent.setup();

  render(<RadioForm />);

  return { user };
};

test("のんびりというラジオが表示される", () => {
  setup();

  expect(screen.getByRole("radiogroup", { name: "のんびり" })).toBeVisible();
});

test("のんびりというラジオの初期値は未設定である", () => {
  setup();

  expect(screen.getByRole("radio", { name: "未設定" })).toBeChecked();
});

test("のんびりというラジオの選択肢が仕様通りである", () => {
  setup();

  const group = screen.getByRole("radiogroup", { name: "のんびり" });
  const items = within(group).getAllByRole("radio");
  const expected = ["未設定", "のんびり", "マイペース"];

  expect(items).toHaveLength(expected.length);
  items.forEach((item, index) => {
    expect(item).toHaveAccessibleName(expected[index]);
  });
});

test("のんびりというラジオでのんびりを選択できる", async () => {
  const { user } = setup();

  await user.click(screen.getByRole("radio", { name: "のんびり" }));

  expect(screen.getByRole("radio", { name: "のんびり" })).toBeChecked();
  expect(screen.getByRole("radio", { name: "未設定" })).not.toBeChecked();
});

test("のんびりというラジオのヘルパーテキストが表示される", () => {
  setup();

  expect(
    screen.getByRole("radiogroup", { name: "のんびり" }),
  ).toHaveAccessibleDescription("のんびり");
});
