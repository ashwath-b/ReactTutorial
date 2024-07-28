import { BrowserRouter } from "react-router-dom";
import RestaurantInfo from "../RestaurantInfo";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "./mocks/restaurantInfoMock.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"
import Header from "../Header";
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
})

it("should load restaurant info", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantInfo />
        <Cart />
      </Provider>
    </BrowserRouter>
  ));

  let header = screen.getByText("Recommended (20)");
  fireEvent.click(header);
  let items = screen.getAllByTestId("menu-items");

  expect(header).toBeInTheDocument();
  expect(items.length).toBe(20);

  let addBtn = screen.getAllByRole("button", { name: "Add +"});
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - 1 item(s)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - 2 item(s)")).toBeInTheDocument();

  let cartItems = screen.getAllByTestId("menu-items");

  expect(cartItems.length).toBe(22);

  let clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
  cartItems = screen.getAllByTestId("menu-items");

  expect(cartItems.length).toBe(20);
})