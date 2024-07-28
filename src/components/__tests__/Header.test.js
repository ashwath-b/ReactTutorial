import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
// import { BrowserRouter } from "react-router-dom";

it("should should include Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const button = screen.getByRole("button", { name: 'Login' });
  expect(button).toBeInTheDocument();
})

it("should switch between login & logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const button = screen.getByRole("button", { name: 'Login' });
  fireEvent.click(button);
  const logOutbutton = screen.getByRole("button", { name: 'Logout' });
  expect(logOutbutton).toBeInTheDocument();
})