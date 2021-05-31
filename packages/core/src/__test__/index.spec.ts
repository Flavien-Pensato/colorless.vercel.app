import {HextoRGB, RGBtoHEX, shade, tint} from "../colorless";

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
