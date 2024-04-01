import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const liElement = screen.getByRole("list");
    expect(liElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("render login button correctly", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(loginButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    //screen.debug();
    const loginButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(loginButton).toBeInTheDocument();
  });
});
