import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AutocompleteForm } from "./autocomplete";

const setup = () => {
  const user = userEvent.setup();

  render(<AutocompleteForm />);

  return { user };
};

test("のんびりというオートコンプリートの初期値は未設定である", () => {
  setup();

  expect(screen.getByRole("combobox", { name: "のんびり" })).toHaveValue("未設定");
});
