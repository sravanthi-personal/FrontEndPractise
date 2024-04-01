import { render, screen } from "@testing-library/react";
import { TextMatch } from "./TextMatch";

describe("TextMatch_with_string_type", () => {
  test("string_type_fullStringMatch_test", () => {
    render(<TextMatch />);
    const fullStringMatch = screen.getByText("Hello World");
    expect(fullStringMatch).toBeInTheDocument();
  });

  test("string_type_subStringMatch_test", () => {
    render(<TextMatch />);
    const subStringMatch = screen.getByText("llo Worl", { exact: false });
    expect(subStringMatch).toBeInTheDocument();
  });

  test("string_type_ignoreCase_test", () => {
    render(<TextMatch />);
    const ignoreCase = screen.getByText("hello world", { exact: false });
    expect(ignoreCase).toBeInTheDocument();
  });
});

describe("TextMatch_with_regex-type", () => {
  test("regex_type_fullStringMatch_ignore_case_test", () => {
    render(<TextMatch />);
    const fullStringMatchIgnoreCase = screen.getByText(/^hello world$/i);
    expect(fullStringMatchIgnoreCase).toBeInTheDocument();
  });

  test("regex_type_subString_ignore_case_test", () => {
    render(<TextMatch />);
    const subStringMatchIgnoreCase = screen.getByText(/world/i);
    expect(subStringMatchIgnoreCase).toBeInTheDocument();
  });

  test("regex_type_subString_test", () => {
    render(<TextMatch />);
    const subStringMatch = screen.getByText(/World/);
    expect(subStringMatch).toBeInTheDocument();
  });
});

describe("custom function", () => {
  test("match_test", () => {
    render(<TextMatch />);
    const result = screen.getByText((content) => content.startsWith("Hello"));
    expect(result).toBeInTheDocument();
  });
});
