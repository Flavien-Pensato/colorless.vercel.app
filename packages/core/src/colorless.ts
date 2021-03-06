export type RGB = [number, number, number]
export type HEX = string
export type Label = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type Transformer = 'shade' | 'tint'
export interface Shade {
  label: Label
  value: HEX
}

export interface ShadeConfig {
  type: Transformer
  value: number
  label: Label
}

export const isValideHex = (color: string) => {
  if (!color ) {
    return false
  }

  const lowerColor = color.charAt(0) === '#' ? color.slice(1).toLowerCase() : color.toLowerCase();
  const numberColor = parseInt(lowerColor, 16);

  return numberColor.toString(16) === lowerColor;
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

export const HextoRGB = (hex: string): RGB => {
  const hexaParse = parseInt(hex.charAt(0) === "#" ? hex.slice(1) : hex, 16);
  return [hexaParse >> 16, (hexaParse >> 8) & 0xff, hexaParse & 0xff];
};

export const tint = (
  red: number,
  green: number,
  blue: number,
  factor: number
): HEX => {
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
): HEX => {
  return RGBtoHEX(red * (1 - factor), green * (1 - factor), blue * (1 - factor));
};

export class Colorless {
  private _grid: Record<Label, HEX>
  private _color: HEX
  private _gridConfig: ShadeConfig[] = [
    { type: "tint", value: 0.9, label: "50" },
    { type: "tint", value: 0.8, label: "100" },
    { type: "tint", value: 0.6, label: "200" },
    { type: "tint", value: 0.4, label: "300" },
    { type: "tint", value: 0.2, label: "400" },
    { type: "shade", value: 0, label: "500" },
    { type: "shade", value: 0.15, label: "600" },
    { type: "shade", value: 0.3, label: "700" },
    { type: "shade", value: 0.45, label: "800" },
    { type: "shade", value: 0.6, label: "900" }
  ]
  
  constructor(color:HEX) {
    if (isValideHex(color)) {
      this._color = color;
      this._grid = this.toGrid()
    } else {
      throw new Error('color is not valid')
    }
  }

  private toGrid(): Record<Label, HEX> {
    const rgb = HextoRGB(this._color);
  
    return this._gridConfig.reduce((acc, { label, type, value }) => {
      const transform = type === "shade" ? shade : tint;
  
      acc[label] = transform(...rgb, value);
  
      return acc;
    }, <Record<Label, HEX>>{});
  };

  toJSON(): Record<Label, string> {
    return this._grid
  }


  toString(): string {
    return JSON.stringify(this._grid)
  }

  toArray(): Shade[] {
    const labels = Object.keys(this._grid) as Array<Label>

    const array = labels.map<Shade>((label) => {
      return {
        label: label,
        value: this._grid[label]
      }
    })

    return array
  }
}
