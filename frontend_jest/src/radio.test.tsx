import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SampleForm } from "./radio";

const setup = () => {
  const user = userEvent.setup();

  render(<SampleForm />);

  return { user };
};

describe("Radio", () => {
  test("表示", () => {
    setup();

    expect(screen.getByRole("radiogroup", { name: "過ごし方" })).toBeVisible();
    expect(screen.getByText("のんびり")).toBeVisible();
    expect(screen.getByText("アクティブ")).toBeVisible();
  });

  test("選択", async () => {
    const { user } = setup();

    await user.click(screen.getByRole("radio", { name: "のんびり" }));

    expect(screen.getByRole("radio", { name: "のんびり" })).toBeChecked();

    await user.click(screen.getByRole("radio", { name: "アクティブ" }));

    expect(screen.getByRole("radio", { name: "アクティブ" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "のんびり" })).not.toBeChecked();
  });
});
