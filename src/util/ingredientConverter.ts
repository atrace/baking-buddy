type Ingredient = "flour" | "granulated_sugar" | "caster_sugar" | "icing_sugar";

const cupInGrams = {
  flour: 125,
  granulated_sugar: 200,
  caster_sugar: 200,
  icing_sugar: 125,
  butter: 225,
};

export const cupsToGrams = (ingredient: Ingredient, cups: number) =>
  cups * cupInGrams[ingredient];
