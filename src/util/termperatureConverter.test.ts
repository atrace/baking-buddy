import {
  roundToNearestTen,
  farenheightToCelcius,
  celciusToFan,
} from "./termperatureConverter";

describe("roundToNearestTen", () => {
  it("should round values with <5 units down", () => {
    expect(roundToNearestTen(10)).toEqual(10);
    expect(roundToNearestTen(21)).toEqual(20);
    expect(roundToNearestTen(32)).toEqual(30);
    expect(roundToNearestTen(43)).toEqual(40);
    expect(roundToNearestTen(54)).toEqual(50);
  });

  it("should round values with >5 units up", () => {
    expect(roundToNearestTen(65)).toEqual(70);
    expect(roundToNearestTen(76)).toEqual(80);
    expect(roundToNearestTen(87)).toEqual(90);
    expect(roundToNearestTen(98)).toEqual(100);
    expect(roundToNearestTen(109)).toEqual(110);
  });
});

describe("farenheightToCelcius", () => {
  it.each([
    [225, 110],
    [300, 150],
    [375, 190],
    [400, 200],
  ])(
    "should convert %d degrees farenheight to %s degrees celcius",
    (farenheight: number, celcius: number) => {
      expect(farenheightToCelcius(farenheight)).toEqual(celcius);
    }
  );
});

describe("celciusToFan", () => {
  it.each([
    [180, 160],
    [250, 230],
  ])(
    "should convert %d degrees celcius to %s degrees (fan)",
    (celcius: number, fanTemp: number) => {
      expect(celciusToFan(celcius)).toEqual(fanTemp);
    }
  );
});
