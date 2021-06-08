import Colorless, {  HextoRGB, RGBtoHEX, shade, tint } from "../src/colorless";

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
    const instance = new Colorless('#ED8936')

    expect(instance.toString()).toEqual("{\"50\":\"#FDF3EA\",\"100\":\"#FBE7D6\",\"200\":\"#F7CFAE\",\"300\":\"#F4B886\",\"400\":\"#F0A05E\",\"500\":\"#ED8936\",\"600\":\"#C9742D\",\"700\":\"#A55F25\",\"800\":\"#824B1D\",\"900\":\"#5E3615\"}");
  });
});
