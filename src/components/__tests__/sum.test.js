import sum from "../sum";

test("Accept 2 numbers & return sum of those", () => {
  const res = sum(10, 9);

  expect(res).toBe(19);
})