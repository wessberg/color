# @wessberg/color
[![NPM version][npm-version-image]][npm-version-url]
[![License-mit][license-mit-image]][license-mit-url]

<a href="https://www.patreon.com/bePatron?u=11315442"><img height="30" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" /></a>

[license-mit-url]: https://opensource.org/licenses/MIT
[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[npm-version-url]: https://www.npmjs.com/package/@wessberg/color
[npm-version-image]: https://badge.fury.io/js/%40wessberg%2Fcolor.svg

## Installation
Simply do: `npm install @wessberg/color`.

## Description

This is a collection of helper functions for working with colors and converting between color systems. Simple functions are provided such as `toHex()`, `toHsl()`, `toHsv()`, `toRgb()`, `saturate()`, `lighten()` and much more.
The library takes care of figuring out which color system your input string comes from, so you can just use the library and not care about the rest.

Supported color systems:
- RGB/RGBa
- Hex
- HSV/HSB
- HSL/HSLa
- HTML color names.

At the time of writing, 389 tests has been written for the library methods. I'd say you can use it in production today.

Have fun!

## Examples

```typescript
import {toHsl, lighten, saturate, isLight, randomHexColor} from "@wessberg/color";

toHsl("#DC143C")          // returns 'hsl(348, 83%, 47%)'
toHsl("DC143C")           // returns 'hsl(348, 83%, 47%)'
toHsl("rgb(220, 20, 60)") // returns 'hsl(348, 83%, 47%)'
toHsl("crimson")          // returns 'hsl(348, 83%, 47%)'
toHsl("hsb(348, 91, 86)") // returns 'hsl(348, 83%, 47%)'

lighten("#DDACED", 10)        // lightens the color 10% and returns the new value: #EACDF4.
saturate("brown", 100)        // saturates the HTML color 'brown' an additional 100%.
isLight("rgb(234, 205, 244)") // returns true, that's a pretty light color.
randomHexColor();             // returns a random hex color.
```

## Usage
Import it in your project like this:

```typescript
import {saturate, toRgb, toHex, ...} from "@wessberg/color";
```

## Backers

[Become a backer](https://www.patreon.com/bePatron?c=1770586) and get your name, logo, and link to your site listed here. Your help is greatly appreciated!

## Converting from RGBa to color systems without alpha channels

Many color system conversion libraries will discard the alpha channel when converting from colors that has an alpha channel.
This means that converting from, say, `rgba(0,0,0,.5)` to RGB would normally become `rgb(0,0,0)`, but that is far from the same
color, unless it is painted against a pure black background.

This library, however, will assume a white background for such conversions (such as is the default on the web) and thus generate colors
that look identical to the RGBa color for all color systems, as long as they are painted against a white background.

## Documentation

### `#isLight()`

*Determines if the given color is light or not.*

**Signature:**

```typescript
isLight (color: string): boolean
```

**Arguments**:

- `color: string` - The color to check. Can be any of the color systems CSS can handle with the addition of HSB/HSV.

**Returns**:

`boolean`         - Returns true if the color is light, false otherwise.

#### Example
```typescript
isLight("rgb(234, 205, 244)") // returns true, that's a pretty light color.
```

### `#lighten()`

*Changes the lightness of the given color. Will automatically determine the type of color and how to handle it. Pass negative values to darken the color instead.*

**Signature:**

```typescript
lighten (color: string, percentage: number = 10): string
```

**Arguments**:

- `color: string`        - The color to lighten. Can be any of the color systems CSS can handle with the addition of HSB/HSV.

- `percentage?: number`  - Optionally, the amount of percentage to lighten the color. Pass a negative value to darken the color instead. `Default = 10`

**Returns**:

`string` - The lightened/darkened color.

#### Example
```typescript
lighten("#DDACED", 10) // lightens the color 10% and returns the new value: #EACDF4.
lighten("#DDACED", -90) // darkens the color 90% and returns the new value: #1B0721.
```

### `#saturate()`

*Changes the saturation of the given color. Will automatically determine the type of color and how to handle it. Pass a negative percentage value to desaturate the color instead.*

**Signature:**

```typescript
saturate (color: string, percentage: number = 10): string
```

**Arguments**:

- `color: string`        - The color to saturate. Can be any of the color systems CSS can handle with the addition of HSB/HSV.

- `percentage?: number`  - Optionally, the amount of percentage to saturate the color. Pass a negative value to desaturate the color instead. `Default = 10`

**Returns**:

`string` - The saturated/desaturated color.

#### Example
```typescript
saturate("brown", 100)  // saturates the HTML color 'brown' an additional 100%.
saturate("brown", -100) // desaturates the HTML color 'brown' 100%.
```

### `#toHex()`

*Takes a color and converts it to a hex color.*

**Signature:**

```typescript
toHex (color: string): string
```

**Arguments**:

- `color: string`        - The color to convert to a hex color. Can be any of the color systems CSS can handle with the addition of HSB/HSV. If a hex color is given, a hex color will be returned.

**Returns**:

`string` - The hex representation of the given color. Will always have a '#' in front of it.

**Throws**:

- `TypeError` - If the first argument is not of type 'string'.
- `TypeError` - If the given color appears to be a hex color but is of invalid length.
- `TypeError` - If the method didn't succeed in normalizing the given argument into a hex color.

#### Example
```typescript
toHex("#DC143C")          // returns '#DC143C'
toHex("DC143C")           // returns '#DC143C'
toHex("rgb(220, 20, 60)") // returns '#DC143C'
toHex("crimson")          // returns '#DC143C'
toHex("hsb(348, 91, 86)") // returns '#DC143C'
```

### `#toRgb()`

*Takes a color and converts it to an RGB color.*

**Signature:**

```typescript
toRgb (color: string): string
```

**Arguments**:

- `color: string`        - The color to convert to an RGB color. Can be any of the color systems CSS can handle with the addition of HSB/HSV. If an RGB color is given, an RGB color will be returned.

**Returns**:

`string` - The RGB representation of the given color.

**Throws**:

- `TypeError` - If the first argument is not of type 'string'.
- `TypeError` - If the given color appears to be a hex color but is of invalid length.
- `TypeError` - If the method didn't succeed in normalizing the given argument into an RGB color.

#### Example
```typescript
toRgb("#DC143C")          // returns 'rgb(220, 20, 60)'
toRgb("DC143C")           // returns 'rgb(220, 20, 60)'
toRgb("rgb(220, 20, 60)") // returns 'rgb(220, 20, 60)'
toRgb("crimson")          // returns 'rgb(220, 20, 60)'
toRgb("hsb(348, 91, 86)") // returns 'rgb(220, 20, 60)'
```

### `#toHsl()`

*Takes a color and converts it to an HSL color.*

**Signature:**

```typescript
toRgb (color: string): string
```

**Arguments**:

- `color: string`        - The color to convert to an HSL color. Can be any of the color systems CSS can handle with the addition of HSB/HSV. If an HSL color is given, an HSL color will be returned.

**Returns**:

`string` - The HSL representation of the given color.

**Throws**:

- `TypeError` - If the first argument is not of type 'string'.
- `TypeError` - If the given color appears to be a hex color but is of invalid length.
- `TypeError` - If the method didn't succeed in normalizing the given argument into an HSL color.

#### Example
```typescript
toHsl("hsl(348, 83%, 47%)") // returns 'hsl(348, 83%, 47%)'
toHsl("#DC143C")            // returns 'hsl(348, 83%, 47%)'
toHsl("DC143C")             // returns 'hsl(348, 83%, 47%)'
toHsl("rgb(220, 20, 60)")   // returns 'hsl(348, 83%, 47%)'
toHsl("crimson")            // returns 'hsl(348, 83%, 47%)'
toHsl("hsb(348, 91, 86)")   // returns 'hsl(348, 83%, 47%)'
```

### `#toHsv()`

*Takes a color and converts it to an HSV/HSB color.*

**Signature:**

```typescript
toRgb (color: string): string
```

**Arguments**:

- `color: string`        - The color to convert to an HSV/HSB color. Can be any of the color systems CSS can handle with the addition of HSB/HSV. If an HSV/HSB color is given, an HSV/HSB color will be returned.

**Returns**:

`string` - The HSV/HSB representation of the given color.

**Throws**:

- `TypeError` - If the first argument is not of type 'string'.
- `TypeError` - If the given color appears to be a hex color but is of invalid length.
- `TypeError` - If the method didn't succeed in normalizing the given argument into an HSVB/HSB color.

#### Example
```typescript
toHsv("hsb(348, 91, 86)")   // returns 'hsb(348, 91, 86)'
toHsv("hsv(348, 91, 86)")   // returns 'hsv(348, 91, 86)'
toHsv("hsl(348, 83%, 47%)") // returns 'hsb(348, 91, 86)'
toHsv("#DC143C")            // returns 'hsb(348, 91, 86)'
toHsv("DC143C")             // returns 'hsb(348, 91, 86)'
toHsv("rgb(220, 20, 60)")   // returns 'hsb(348, 91, 86)'
toHsv("crimson")            // returns 'hsb(348, 91, 86)'
```

### `#randomHexColor()`

*Generates a random hex color and returns it.*

**Signature:**

```typescript
randomHexColor (): string
```

**Returns**:

`string` - A random hex color. Always starts with '#'.

#### Example
```typescript
setInterval(() => document.body.style.backgroundColor = randomHexColor(), 100);

// Makes the background of the body element change to a new random color every 100ms. Welcome back to web 1.0!
```

### `#randomRgbColor()`

*Generates a random RGB color and returns it.*

**Signature:**

```typescript
randomRgbColor (): string
```

**Returns**:

`string` - A random RGB color.

#### Example
```typescript
setInterval(() => document.body.style.backgroundColor = randomRgbColor(), 100);

// Makes the background of the body element change to a new random color every 100ms. Welcome back to web 1.0!
```

### `#randomHslColor()`

*Generates a random HSL color and returns it.*

**Signature:**

```typescript
randomHslColor (): string
```

**Returns**:

`string` - A random HSL color.

#### Example
```typescript
setInterval(() => document.body.style.backgroundColor = randomHslColor(), 100);

// Makes the background of the body element change to a new random color every 100ms. Welcome back to web 1.0!
```

### `#randomHsvColor()`

*Generates a random HSV color and returns it.*

**Signature:**

```typescript
randomHsvColor (): string
```

**Returns**:

`string` - A random HSV color.

#### Example
```typescript
setInterval(() => document.body.style.backgroundColor = randomHsvColor(), 100);

// Makes the background of the body element change to a new random color every 100ms. Welcome back to web 1.0!
```


### Other methods
There's a lot of them. The above was the highlights. Everything is well-documented in the source code. Here's a quick overview of the methods that isn't included in this *readme*:

- **`hslStringToHslTuple`:**
	-	Converts a string-represented HSL color to a tuple of the values.

- **`hslToHsla`:**
	-	Generates a HSLA color from a HSL color.

- **`hslaStringToHslaTuple`:**
	-	Converts a string-represented HSLa color to a tuple of the values.

- **`hslToRgbTuple`:**
	-	Converts the given HSL color to an RGB color and returns it as a tuple of the values.

- **`hslToRgb`:**
	-	Converts the given HSL color to an RGB color and returns it as a string.

- **`hslaToRgbaTuple`:**
	-	Converts the given HSLa color to an RGBa color and returns it as a tuple of the values.

- **`hslaToRgba`:**
	-	Converts the given HSLa color to an RGBa color and returns it as a string.

- **`hslaToHsl`:**
	-	Converts the given HSLa color to an HSL color and returns it as a string.

- **`rgbStringToRgbTuple`:**
	-	Generates a tuple-representation of an RGB color.

- **`rgbaStringToRgbaTuple`:**
	-	Generates a tuple-representation of an RGBa color.

- **`rgbToHex`:**
	-	Generates a hex representation of an RGB color.

- **`rgbaToHex`:**
	-	Generates a hex representation of an RGBa color.

- **`hsvStringToHsvTuple`:**
	-	Generates a tuple-representation of an HSV/HSB color.

- **`hsvToRgbTuple`:**
	-	Converts an HSV/HSB color to an RGB color and returns it as a tuple of the values.

- **`hsvToRgb`:**
	-	Converts a HSV color to an RGB color and returns it as a string.

- **`hexToRgbTuple`:**
	-	Generates a RGB version of a hex color and returns it as a tuple of the values.

- **`hexToRgb`:**
	-	Generates a RGB version of a hex color and returns it as a string.

- **`hexToHslTuple`:**
	-	Generates a HSL color from a hex color and returns it as a tuple.

- **`hexToHslaTuple`:**
	-	Generates a HSLA color from a hex color and returns it as a tuple.

- **`hexToHsla`:**
	-	Generates a HSLA color from a hex color and returns it as a string.

- **`hexToHsl`:**
	-	Generates a HSL color from a hex color and returns it as a string.

- **`rgbToHslTuple`:**
	-	Generates a HSL color from a RGB color and returns it as a tuple of the values.

- **`rgbToHsl`:**
	-	Generates a HSL color from a RGB color and returns it as a string.

- **`rgbToHsvTuple`:**
	-	Converts an RGB color to an HSV/HSB color and returns it as a tuple of the values.

- **`rgbToHsv`:**
	-	Converts an RGB color to an HSV/HSB color and returns it as a string.

- **`randomRgbColor`:**
	-	Generates a random RGB color and returns it.

- **`randomHslColor`:**
	-	Generates a random HSL color and returns it.

- **`randomHsvColor`:**
	-	Generates a random HSV/HSB color and returns it.
