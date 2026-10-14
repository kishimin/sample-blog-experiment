import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SampleForm } from "./field-2";

const setup = () => {
  const user = userEvent.setup();

  render(<SampleForm />);

  return { user };
};
describe("OutlinedInput", () => {
  test("表示", () => {
    setup();

    expect(screen.getByRole("textbox", { name: "のんびり" })).toBeVisible();
  });

  test("文字入力", async () => {
    const { user } = setup();

    await user.type(
      screen.getByRole("textbox", { name: "のんびり" }),
      "のんびり",
    );

    expect(screen.getByRole("textbox", { name: "のんびり" })).toHaveValue(
      "のんびり",
    );
  });

  test("ヘルパーテキスト", () => {
    setup();

    expect(
      screen.getByRole("textbox", { name: "のんびり" }),
    ).toHaveAccessibleDescription("のんびり");
  });
});
