const hexaBase = 16

class Colorless {
  private _color: string | number[]
  private red: number
  private green: number
  private blue: number
  
  constructor(color) {
  	this.color = color;
  }

  get color(): string | number[] {
    return this._color;
  }

  set color(color: string | number[]) {
    if (Array.isArray(color)) {
      if (color.length !== 3) {
        throw new Error(`hex (${color.join(', ')}) should have a length of 3`);
      }

      const colorMap = color.map(color => Number(color))

      color.forEach(value => {
        if (value < 0 || value > 255) {
          throw new Error(`hex should be between 0 and 255`);
        }
      })

      this.red = color[0]
      this.green = color[1]
      this.blue = color[2]
    }

    if (typeof color === 'string') {
      if (color.charAt(0) === '#') {
        throw new Error(`hex should have no #`);
      }

      if (color.length !== 6) {
        throw new Error(`hex (${color}) should have a length 6`);
      }

      const matchColor = color.match(/.{2}/g)

      this.red = parseInt(matchColor[0], hexaBase)
      this.green = parseInt(matchColor[1], hexaBase)
      this.blue = parseInt(matchColor[2], hexaBase)      
    }

    this._color = color
  }

  tint(factor) {
    this.red = this.red + (255 - this.red) * factor
    this.green = this.green + (255 - this.green) * factor
    this.blue = this.blue + (255 - this.blue) * factor
  }

  shade(factor) {
    this.red = this.red * (1 - factor)
    this.green = this.green * (1 - factor)
    this.blue = this.blue * (1 - factor)
  }

  toHEX() {
    return this.red.toString(hexaBase).padStart(2, '0').concat(this.green.toString(hexaBase).padStart(2, '0')).concat(this.blue.toString(hexaBase).padStart(2, '0'))
  }

  toRGB() {
    return [this.red, this.green, this.blue]
  }
}

export default Colorless
