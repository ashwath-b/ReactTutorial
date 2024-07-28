import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/restaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
})

it("should search restaurant as per serach text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchInput = screen.getByPlaceholderText("Search for restaurants");
  const searchBtn = screen.getByRole("button", { name: "search" })
  const allCards = screen.getAllByTestId("rest-card");

  expect(allCards.length).toBe(20);
  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "pizza" }});
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("rest-card");

  expect(cards.length).toBe(4);
})

it("should search top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // const searchInput = screen.getByPlaceholderText("Search for restaurants");
  const ratedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" })
  const allCards = screen.getAllByTestId("rest-card");

  expect(allCards.length).toBe(20);
  expect(ratedBtn).toBeInTheDocument();

  fireEvent.click(ratedBtn);

  const cards = screen.getAllByTestId("rest-card");
  expect(cards.length).toBe(13);
});