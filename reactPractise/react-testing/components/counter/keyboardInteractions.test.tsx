import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("keyboard_interactions_utility_test", () => {
  test("clear", async () => {
    render(<textarea defaultValue="Hello, World!"></textarea>);
    await user.clear(screen.getByRole("textbox"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("selectOptions", async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );
    await user.selectOptions(screen.getByRole("listbox"), ["1", "C"]);
    expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "B" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "C" }).selected).toBe(true);
  });

  test("deselectOptions", async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2" selected>
          B
        </option>
        <option value="3">C</option>
      </select>
    );
    await user.deselectOptions(screen.getByRole("listbox"), "2");
    expect(screen.getByText("B").selected).toBe(false);
  });

  test("upload file", async () => {
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input id="file-uploader" type="file"></input>
      </div>
    );
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText(/upload file/i);
    await user.upload(input, file);
    expect(input.files[0]).toBe(file);
    expect(input.files.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });
});
