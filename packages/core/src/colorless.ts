// const hexaBase = 16

export type Units = "hex" | "rgb"
export type Color = string | Array<number>

export interface IColorlessOptions {
  unit: Units
}

export const RGBtoHEX = (red: number, green: number, blue: number): string => {
  const bin = (red << 16) | (green << 8) | blue;
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(bin.toString(16).toUpperCase())
  );
};

export const HextoRGB = (hex: string): Array<number> => {
  const hexaParse = parseInt(hex.charAt(0) === "#" ? hex.slice(1) : hex, 16);
  return [hexaParse >> 16, (hexaParse >> 8) & 0xff, hexaParse & 0xff];
};

export const tint = (
  red: number,
  green: number,
  blue: number,
  factor: number
): string => {
  return RGBtoHEX(
    red + (255 - red) * factor,
    green + (255 - green) * factor,
    blue + (255 - blue) * factor
  );
};

export const shade = (
  red: number,
  green: number,
  blue: number,
  factor: number
): string => {
  return RGBtoHEX(red * (1 - factor), green * (1 - factor), blue * (1 - factor));
};

export const toGrid = (color: string): Record<string, string> => {
  const rgb = HextoRGB(color);
  const grid = [
    { type: "tint", value: 0.9, label: "50" },
    { type: "tint", value: 0.8, label: "100" },
    { type: "tint", value: 0.6, label: "200" },
    { type: "tint", value: 0.4, label: "300" },
    { type: "tint", value: 0.2, label: "400" },
    { type: "shade", value: 0, label: "500" },
    { type: "shade", value: 0.2, label: "600" },
    { type: "shade", value: 0.4, label: "700" },
    { type: "shade", value: 0.6, label: "800" },
    { type: "shade", value: 0.8, label: "900" }
  ];

  return grid.reduce((acc, { label, type, value }) => {
    const transform = type === "shade" ? shade : tint;

    console.log(...rgb, value);

    acc[label] = transform(...rgb, value);

    return acc;
  }, {});
};

class Colorless {}

export default Colorless;
