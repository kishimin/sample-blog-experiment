import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AutocompleteForm } from "./autocomplete";

const setup = () => {
  const user = userEvent.setup();

  render(<AutocompleteForm />);

  return { user };
};

test("のんびりというオートコンプリートが表示される", () => {
  setup();

  expect(screen.getByRole("combobox", { name: "のんびり" })).toBeVisible();
});

test("のんびりというオートコンプリートの初期値は未設定である", () => {
  setup();

  expect(screen.getByRole("combobox", { name: "のんびり" })).toHaveValue("未設定");
});

test("のんびりというオートコンプリートの選択肢が仕様通りである", async () => {
  const { user } = setup();

  const input = screen.getByRole("combobox", { name: "のんびり" });

  await user.click(input);

  const list = await screen.findByRole("listbox");
  expect(list).toBeVisible();

  const items = within(list).getAllByRole("option");
  const expected = ["未設定", "のんびり", "マイペース"];

  expect(items).toHaveLength(expected.length);
  items.forEach((item, index) => {
    expect(item).toHaveTextContent(expected[index]);
  });
});

test("のんびりというオートコンプリートでのんびりを選択できる", async () => {
  const { user } = setup();

  const input = screen.getByRole("combobox", { name: "のんびり" });

  await user.click(input);
  await user.click(screen.getByRole("option", { name: "のんびり" }));

  expect(input).toHaveValue("のんびり");
});

test("のんびりというオートコンプリートで候補を絞り込んで選択できる", async () => {
  const { user } = setup();
  const input = screen.getByRole("combobox", { name: "のんびり" });

  await user.clear(input);
  await user.type(input, "マイ");

  expect(screen.getByRole("option", { name: "マイペース" })).toBeVisible();
  expect(screen.queryByRole("option", { name: "のんびり" })).not.toBeInTheDocument();

  await user.click(screen.getByRole("option", { name: "マイペース" }));

  expect(input).toHaveValue("マイペース");
});

test("のんびりというオートコンプリートの選択をクリアできる", async () => {
  const { user } = setup();

  await user.clear(screen.getByRole("combobox", { name: "のんびり" }));

  expect(screen.getByRole("combobox", { name: "のんびり" })).toHaveValue("");
});

test("のんびりというオートコンプリートのヘルパーテキストが表示される", () => {
  setup();

  expect(
    screen.getByRole("combobox", { name: "のんびり" }),
  ).toHaveAccessibleDescription("のんびり");
});
