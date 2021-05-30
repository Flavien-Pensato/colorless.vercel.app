// const hexaBase = 16

export type Units = "hex" | "rgb"
export type Color = string | Array<number>

export interface IColorlessOptions {
  unit: Units
}

export const RGBtoHEX = (red: number, green: number, blue: number): string => {
    const bin = red << 16 | green << 8 | blue;
    return "#" + (function(h){
        return new Array(7-h.length).join("0")+h;
    })(bin.toString(16).toUpperCase());
};

export const HextoRGB = (hex: string): Array<number> => {
  const hexaParse = parseInt(hex.charAt(0) === "#" ? hex.slice(1) : hex,16);
  return [hexaParse >> 16,     hexaParse >> 8 & 0xFF, hexaParse & 0xFF];
};

// export const tint = (red, green, blue, factor: number) => {
//   return RGBtoHEX(red + (255 - red) * factor, green + (255 - green) * factor, blue + (255 - blue) * factor)
// }

// const shade = (red, green, blue,factor:number) => {
//   return RGBtoHEX(red * (1 - factor), green * (1 - factor), blue * (1 - factor))
// }

class Colorless {}


// class Colorless {
//   private _color: Color
//   private options: IColorlessOptions
//   private red: number
//   private green: number
//   private blue: number

//   constructor(color: Color, options: IColorlessOptions = {unit: 'hex'}) {
//     this.color = color
//     this.options = options
//   }

//   get color(): string | number[] {
//     return this._color
//   }

//   set color(color: string | number[]) {
//     if (Array.isArray(color)) {
//       if (color.length !== 3) {
//         throw new Error(`hex (${color.join(', ')}) should have a length of 3`)
//       }

//       const colorMap = color.map(color => Number(color))

//       color.forEach(value => {
//         if (value < 0 || value > 255) {
//           throw new Error(`hex should be between 0 and 255`)
//         }
//       })

//       this.red = color[0]
//       this.green = color[1]
//       this.blue = color[2]
//       this._color = color

//       return
//     }

//     if (typeof color === 'string') {
//       const rgb = HextoRGB(color)


//       this.red = rgb[0]
//       this.green = rgb[1]
//       this.blue = rgb[2]
//       this._color = color

//       return
//     }

//     throw new Error(`A color should be provide`)
//   }



//   toBrand() {
//     return {
//       "50": tint(this.red, this.green, this.blue, 0.1),
//       "100": tint(this.red, this.green, this.blue, 0.2),
//       "200": tint(this.red, this.green, this.blue, 0.3),
//       "300": tint(this.red, this.green, this.blue, 0.4),
//       "400": tint(this.red, this.green, this.blue, 0.5),
//       "500": this._color,
//       "600": shade(this.red, this.green, this.blue, 0.1),
//       "700": shade(this.red, this.green, this.blue, 0.1),
//       "800": shade(this.red, this.green, this.blue, 0.1),
//       "900": shade(this.red, this.green, this.blue, 0.1),
//     }
//   }
// }

export default Colorless;

