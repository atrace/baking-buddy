import { cupsToGrams } from "./calcs";

describe("cupsToGrams", () => {
  it("should give the weight of two cups of flour in grams correctly", () => {
    expect(cupsToGrams("flour", 2)).toEqual(250);
  });

  it("should give the weight of half a cup of granulated sugar in grams correctly", () => {
    expect(cupsToGrams("granulated_sugar", 0.5)).toEqual(100);
  });
});
