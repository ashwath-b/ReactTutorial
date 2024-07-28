import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMockData";

it("should render with props", () => {
  render(
    <RestaurantCard resData={MOCK_DATA} />
  )

  let cuisines = [
    "Tibetan",
    "Healthy Food",
    "Asian",
    "Chinese",
    "Snacks",
    "Continental",
    "Desserts",
    "Beverages"
  ]
  const name = screen.getByText("Wow! Momo");
  expect(name).toBeInTheDocument();
  const uiCuisines = screen.getByText(cuisines.join(", "));
  expect(uiCuisines).toBeInTheDocument();
})