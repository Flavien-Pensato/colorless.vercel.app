# Colorless

Colorless is library that allow you to transform easily color _format_ and generate _shade_ or color.

## Features

- You can switch from _#000000_ to _rgb(0, 0 ,0)_ or vice versa
- You can shade or tint color with **shade()** and **tint()** functions
- You can generate from a color a palette of shade with **new Colorless(color)**

# Install

```bash
npm install colorless-core
```

or

```bash
yarn add colorless-core
```

# Usage

## Tint

Tint accept 4 arguments

- First 3 are rgb color
- The fourth is a factor of tint

```js
import { tint } from 'colorless-core'

const tintedColor = tint(255, 255, 255, 0.5)
```

## Shade

Shade accept 4 arguments

- First 3 are rgb color
- The fourth is a factor of shade

```js
import { tint } from 'colorless-core'

const shadedColor = shade(0, 0, 0, 0.5)
```

## Colorless

Colorless accept as argument a hex color

```js
import { Colorless } from 'colorless-core'

const instace = Colorless('#FF00')

instance.toString()
instance.toJSON()
instance.toMap()
```

# App

website : [Colorless](https://color-less.vercel.app)
