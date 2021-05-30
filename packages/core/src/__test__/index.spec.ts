import {HextoRGB, RGBtoHEX} from "../colorless";

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
