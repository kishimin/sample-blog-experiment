import { render, screen } from "@testing-library/react";
import { SampleForm } from "./field-1";
import userEvent from "@testing-library/user-event";

const setup = () => {
  const user = userEvent.setup();

  render(<SampleForm />);

  return { user };
};

describe("SampleForm1", () => {
  describe("TextField", () => {
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
});
