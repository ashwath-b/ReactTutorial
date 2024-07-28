import Contact from "../Contact";
import { screen, render } from "@testing-library/react";

describe("Contact Us page", () => {
  test("Should include 2 text boxes", () => {
    render(<Contact />);
  
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
  })
})
