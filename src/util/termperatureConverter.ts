export const roundToNearestTen = (n: number): number => {
  const remainder = n % 10;
  if (remainder < 5) {
    return n - remainder;
  }
  return n + 10 - remainder;
};

export const farenheightToCelcius = (farenheight: number): number =>
  roundToNearestTen(((farenheight - 32) * 5) / 9);

export const celciusToFan = (celcius: number) => celcius - 20;
