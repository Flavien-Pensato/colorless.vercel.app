import { HextoRGB, RGBtoHEX, shade, tint, toGrid } from "../colorless";

describe("HextoRGB()", () => {
  it("should return rgb", () => {
    expect(HextoRGB("000")).toEqual([0, 0, 0]);
    expect(HextoRGB("#000000")).toEqual([0, 0, 0]);
    expect(HextoRGB("#FFFFFF")).toEqual([255, 255, 255]);
    expect(HextoRGB("FFFFFF")).toEqual([255, 255, 255]);
    expect(HextoRGB("ffffff")).toEqual([255, 255, 255]);
  });
});

describe("RGBtoHEX()", () => {
  it("should return hexa", () => {
    expect(RGBtoHEX(255, 255, 255)).toEqual("#FFFFFF");
    expect(RGBtoHEX(0, 0, 0)).toEqual("#000000");
  });
});

describe("shade()", () => {
  it("should shade white", () => {
    expect(shade(255, 255, 255, 0)).toEqual("#FFFFFF");
    expect(shade(255, 255, 255, 0.5)).toEqual("#7F7F7F");
    expect(shade(255, 255, 255, 1)).toEqual("#000000");
  });
});

describe("tint()", () => {
  it("should tint black", () => {
    expect(tint(0, 0, 0, 0)).toEqual("#000000");
    expect(tint(0, 0, 0, 0.5)).toEqual("#7F7F7F");
    expect(tint(0, 0, 0, 1)).toEqual("#FFFFFF");
  });
});

describe("toGrid()", () => {
  it("should get grid for #ED8936", () => {
    expect(toGrid("#ED8936")).toEqual({
      "50": "#FDF3EA",
      "100": "#FBE7D6",
      "200": "#F7CFAE",
      "300": "#F4B886",
      "400": "#F0A05E",
      "500": "#ED8936",
      "600": "#BD6D2B",
      "700": "#8E5220",
      "800": "#5E3615",
      "900": "#2F1B0A"
    });
  });
});
