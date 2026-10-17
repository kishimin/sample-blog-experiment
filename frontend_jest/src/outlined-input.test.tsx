import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OutlinedInputForm } from "./outlined-input";

const setup = () => {
  const user = userEvent.setup();

  render(<OutlinedInputForm />);

  return { user };
};

test("のんびりというテキスト入力が表示される", () => {
  setup();

  expect(screen.getByRole("textbox", { name: "のんびり" })).toBeVisible();
});

test("のんびりというテキスト入力にのんびりと入力するとのんびりという値が表示される", async () => {
  const { user } = setup();

  await user.type(
    screen.getByRole("textbox", { name: "のんびり" }),
    "のんびり",
  );

  expect(screen.getByRole("textbox", { name: "のんびり" })).toHaveValue(
    "のんびり",
  );
});

test("のんびりというテキスト入力のヘルパーテキストが表示される", () => {
  setup();

  expect(
    screen.getByRole("textbox", { name: "のんびり" }),
  ).toHaveAccessibleDescription("のんびり");
});
