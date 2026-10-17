import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckboxForm } from "./checkbox";

const setup = () => {
  const user = userEvent.setup();

  render(<CheckboxForm />);

  return { user };
};

test("のんびりというチェックボックスが表示される", () => {
  setup();

  expect(
    screen.getByRole("checkbox", { name: "のんびり" }),
  ).toBeInTheDocument();
});

test("のんびりというチェックボックスを切り替えることができる", async () => {
  const { user } = setup();

  const checkbox = screen.getByRole("checkbox", { name: "のんびり" });

  expect(checkbox).not.toBeChecked();

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
});

test("のんびりというチェックボックスのヘルパーテキストが表示される", () => {
  setup();

  expect(
    screen.getByRole("checkbox", { name: "のんびり" }),
  ).toHaveAccessibleDescription("のんびり");
});
