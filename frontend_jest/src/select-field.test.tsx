import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectForm } from "./select-field";

const setup = () => {
  const user = userEvent.setup();

  render(<SelectForm />);

  return { user };
};

test("のんびりというセレクトが表示される", () => {
  setup();

  expect(screen.getByRole("combobox", { name: "のんびり" })).toBeVisible();
});

test("のんびりというセレクトの初期値は未設定である", () => {
  setup();

  expect(screen.getByRole("combobox", { name: "のんびり" })).toHaveTextContent(
    "未設定",
  );
});

test("のんびりというセレクトの選択肢が仕様通りである", async () => {
  const { user } = setup();

  const select = screen.getByRole("combobox", { name: "のんびり" });

  await user.click(select);

  const list = await screen.findByRole("listbox");
  expect(list).toBeVisible();

  const items = within(list).getAllByRole("option");

  const expected = ["未設定", "のんびり", "マイペース"];

  items.forEach((item, index) => {
    expect(item).toHaveTextContent(expected[index]);
  });
});

test("のんびりというセレクトでのんびりを選択できる", async () => {
  const { user } = setup();

  const select = screen.getByRole("combobox", { name: "のんびり" });

  await user.click(select);

  await user.click(screen.getByRole("option", { name: "のんびり" }));

  expect(select).toHaveTextContent("のんびり");
});
