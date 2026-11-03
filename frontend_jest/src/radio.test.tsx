import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SampleForm } from "./radio";

test("ラジオボタンで選択肢を一つ選べる", async () => {
  const user = userEvent.setup();
  render(<SampleForm />);

  const first = screen.getByRole("radio", { name: "のんびり" });
  const second = screen.getByRole("radio", { name: "アクティブ" });
  expect(screen.getByRole("radiogroup", { name: "過ごし方" })).toBeVisible();
  await user.click(first);
  expect(first).toBeChecked();
  await user.click(second);
  expect(second).toBeChecked();
  expect(first).not.toBeChecked();
});
