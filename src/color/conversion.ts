// tslint:disable:binary-expression-operand-order

import {hslStringToHslTuple, HslTuple, hslTupleToHsl} from "./color-system/hsl";
import {hslaStringToHslaTuple, HslaTuple, hslaTupleToHsla} from "./color-system/hsla";
import {rgbStringToRgbTuple, RgbTuple, rgbTupleToRgb} from "./color-system/rgb";
import {RGB_MAX_VALUE} from "./constant";
import {rgbaStringToRgbaTuple, RgbaTuple, rgbaTupleToRgba} from "./color-system/rgba";
import {hsvStringToHsvTuple, HsvTuple, hsvTupleToHsv} from "./color-system/hsv";
import {HTML_COLOR} from "./color-system/html-color";

/**
 * Generates a HSLA color from a HSL color.
 * @param   {string} hsl       - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [alpha=1] - The alpha channel value of the HSLA color.
 * @returns {string}             The HSLA version of the color.
 * @throws  {TypeError}          If the first argument is not of type 'string'.
 * @throws  {TypeError}          If the second argument is not of type 'number'.
 */
export function hslToHsla(hsl: string, alpha: number = 1): string {
	if (typeof hsl !== "string") throw new TypeError(`first argument to 'hslToHsla' must be of type 'string'!`);
	if (typeof alpha !== "number") throw new TypeError(`second argument to 'hslToHsla' must be of type 'number'!`);
	const [H, S, L] = hslStringToHslTuple(hsl);
	return hslaTupleToHsla([H, S, L, alpha]);
}

/**
 * Converts the given HSL color to an RGB color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   hsl             - The HSL color to convert.
 * @param   {boolean}                  [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {RgbTuple}                                   The RGB color as a tuple.
 */
export function hslToRgbTuple(hsl: string, rounding: boolean = true): RgbTuple {
	return hslTupleToRgbTuple(hslStringToHslTuple(hsl), rounding);
}

/**
 * Converts the given HSL tuple to an RGB color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {HslTuple|HslaTuple}       hsl             - The HSL color to convert.
 * @param   {boolean}                  [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {RgbTuple}                                   The RGB color as a tuple.
 */
export function hslTupleToRgbTuple([HUE, SATURATION, LIGHTNESS]: HslTuple | HslaTuple, rounding: boolean = true): RgbTuple {
	// The hue is fine as it is.
	const h = HUE;

	// Convert the saturation into a floating point number (in decimals, original is given as percentage)
	const s = parseFloat(SATURATION) / 100;

	// Convert the lightness into floating point number (in decimals, original is given as percentage)
	const l = parseFloat(LIGHTNESS) / 100;

	// Initialize all rgb values to zero.
	let r = 0;
	let g = 0;
	let b = 0;

	// If there is no saturation, we only need to multiply the lightness by RGB_MAX_VALUE, the maximum span of the RGB color space.
	if (s === 0) {
		r = g = b = l * RGB_MAX_VALUE;
		return rounding ? [Math.round(r), Math.round(g), Math.round(b)] : [r, g, b];
	}

	// Depending on whether or not the lightness is less than 0.5 (50%), different formulas should be used.
	const temp1 = l < 0.5 ? l * (1 + s) : l + s - l * s;

	const temp2 = 2 * l - temp1;

	// Convert the 360 degrees in a circle to 1 by dividing the hue by 360.
	const calculatedHue = h / 360;

	let temporaryRed = calculatedHue + 1 / 3;
	let temporaryGreen = calculatedHue;
	let temporaryBlue = calculatedHue - 1 / 3;

	// All values need to be between 0 and 1. For negative values, we must add 1.
	// For negative values, we must subtract 1.
	if (temporaryRed < 0) ++temporaryRed;
	else if (temporaryRed > 1) --temporaryRed;
	if (temporaryGreen < 0) ++temporaryGreen;
	else if (temporaryGreen > 1) --temporaryGreen;
	if (temporaryBlue < 0) ++temporaryBlue;
	else if (temporaryBlue > 1) --temporaryBlue;

	// Find the 'red' value.
	if (6 * temporaryRed < 1) r = temp2 + (temp1 - temp2) * 6 * temporaryRed;
	else if (2 * temporaryRed < 1) r = temp1;
	else if (3 * temporaryRed < 2) r = temp2 + (temp1 - temp2) * (2 / 3 - temporaryRed) * 6;
	else r = temp2;

	// Find the 'green' value.
	if (6 * temporaryGreen < 1) g = temp2 + (temp1 - temp2) * 6 * temporaryGreen;
	else if (2 * temporaryGreen < 1) g = temp1;
	else if (3 * temporaryGreen < 2) g = temp2 + (temp1 - temp2) * (2 / 3 - temporaryGreen) * 6;
	else g = temp2;

	// Find the 'blue' value.
	if (6 * temporaryBlue < 1) b = temp2 + (temp1 - temp2) * 6 * temporaryBlue;
	else if (2 * temporaryBlue < 1) b = temp1;
	else if (3 * temporaryBlue < 2) b = temp2 + (temp1 - temp2) * (2 / 3 - temporaryBlue) * 6;
	else b = temp2;

	if (rounding) return [Math.round(r * RGB_MAX_VALUE), Math.round(g * RGB_MAX_VALUE), Math.round(b * RGB_MAX_VALUE)];
	else return [r * RGB_MAX_VALUE, g * RGB_MAX_VALUE, b * RGB_MAX_VALUE];
}

/**
 * Converts the given HSL color to an RGB color and returns it as a string.
 * @param   {string}   hsl            - The HSL color to convert.
 * @param   {boolean} [rounding=true] - If the r, g and b values should be rounded.
 * @returns {string}                     The RGB color as a string.
 */
export function hslToRgb(hsl: string, rounding: boolean = true): string {
	return rgbTupleToRgb(hslToRgbTuple(hsl, rounding));
}

/**
 * Converts the given HSLa color to an RGBa color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number, ALPHA: number].
 * @param   {string}                           hsla - The HSLa color to convert.
 * @returns {RgbaTuple}                        The RGBa color as a tuple.
 */
export function hslaToRgbaTuple(hsla: string): RgbaTuple {
	const [R, G, B] = hslToRgbTuple(hsla);

	// Extract the alpha value from the hsla string.
	const [, , , A] = hslaStringToHslaTuple(hsla);
	return [R, G, B, A];
}

/**
 * Converts the given HSLa color to an RGBa color and returns it as a string.
 * @param   {string} hsla - The HSLa color to convert.
 * @returns {string}        The RGBa color as a string.
 */
export function hslaToRgba(hsla: string): string {
	return rgbaTupleToRgba(hslaToRgbaTuple(hsla));
}

/**
 * Converts the given HSLa color to an HSL color and returns it as a string.
 * @param   {string} hsla - The HSLa color to convert.
 * @returns {string}       The HSL color as a string.
 */
export function hslaToHsl(hsla: string): string {
	return hslTupleToHsl(hslaStringToHslaTuple(hsla));
}

/**
 * Generates a hex representation of an RGB color.
 * @param   {string} rgbString - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @returns {string}             A hex representation of the string. For instance #f5f5f5.
 */
export function rgbToHex(rgbString: string): string {
	const [r, g, b] = rgbStringToRgbTuple(rgbString);

	const bin = (r << 16) | (g << 8) | b;
	return (function(h) {
		return `#${new Array(7 - h.length).join("0") + h}`;
	})(bin.toString(16).toLowerCase());
}

/**
 * Generates a hex representation of an RGBa color.
 * @param   {string} rgbaString      - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @param   {string} [againstColor] - If given, the generated hex color will count in interpolation between the alpha channel and the color. So, for instance, even though the alpha channel value is "0" (so its invisible), if the color below it is pure white, the visible color would still be white and the generated hex color would be '#ffffff'
 * @returns {string}                  A hex representation of the string. For instance #f5f5f5.
 * @throws  {TypeError}               If the second argument is given but is not of type 'string'.
 */
export function rgbaToHex(rgbaString: string, againstColor?: string): string {
	if (againstColor != null && typeof againstColor !== "string") throw new TypeError(`argument 'againstColor' must be of type 'string'!`);
	const [r, g, b, a] = rgbaStringToRgbaTuple(rgbaString);
	if (againstColor != null) {
		const [referenceR, referenceG, referenceB] = rgbStringToRgbTuple(toRgb(againstColor));
		return rgbToHex(rgbTupleToRgb([r * a + referenceR * (1 - a), g * a + referenceG * (1 - a), b * a + referenceB * (1 - a)]));
	} else {
		return rgbToHex(rgbTupleToRgb([r, g, b]));
	}
}

/**
 * Converts an HSV/HSB color to an RGB color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   hsv - The HSV color to convert.
 * @returns {RgbTuple}                 A tuple representation of the RGB color.
 */
export function hsvToRgbTuple(hsv: string): RgbTuple {
	const [H, S, V] = hsvStringToHsvTuple(hsv);

	const normalizedH = H === 360 ? 1 : ((H % 360) / 360) * 6;
	const normalizedS = S === 100 ? 1 : (S % 100) / 100;
	const normalizedV = V === 100 ? 1 : (V % 100) / 100;

	const hFloor = Math.floor(normalizedH);
	const hFloorDiff = normalizedH - hFloor;
	const p = normalizedV * (1 - normalizedS);
	const q = normalizedV * (1 - hFloorDiff * normalizedS);
	const t = normalizedV * (1 - (1 - hFloorDiff) * normalizedS);
	const mod = hFloor % 6;
	const R = [normalizedV, q, p, p, t, normalizedV][mod];
	const G = [t, normalizedV, normalizedV, q, p, p][mod];
	const B = [p, p, t, normalizedV, normalizedV, q][mod];
	return [Math.round(R * RGB_MAX_VALUE), Math.round(G * RGB_MAX_VALUE), Math.round(B * RGB_MAX_VALUE)];
}

/**
 * Converts a HSV color to an RGB color and returns it as a string.
 * @param   {string} hsv - The HSV color to convert.
 * @returns {string}       A string representation of the RGB color.
 */
export function hsvToRgb(hsv: string): string {
	return rgbTupleToRgb(hsvToRgbTuple(hsv));
}

/**
 * Takes a color and converts it to a hex color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized hex color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a hex color.
 */
export function toHex(color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHex()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) {
			throw new TypeError(`first argument to 'toHex()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		}
		return color;
	} else if (color.slice(0, 3) === "hsl") {
		return rgbToHex(hslToRgb(color));
	} else if (color.slice(0, 4) === "hsla") {
		return rgbaToHex(hslaToRgba(color), "white");
	} else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return rgbToHex(hsvToRgb(color));
	} else if (color.slice(0, 4) === "rgba") {
		return rgbaToHex(color, "white");
	} else if (color.slice(0, 3) === "rgb") {
		return rgbToHex(color);
	}

	const colorNameMatch = HTML_COLOR[color.toLowerCase()];
	if (colorNameMatch != null) return colorNameMatch;
	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHex()' must be a valid color. '${color}' was given!`);
		return `#${color}`;
	} else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Generates a RGB version of a hex color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}  hex              - The hex color to convert. For instance, #123456.
 * @returns {RgbTuple}                   A tuple of the red, green and blue values.
 * @throws  {TypeError}                  If the first argument is not a string.
 * @throws  {TypeError}                  If the given hex could not be decoded as a hex color.
 */
export function hexToRgbTuple(hex: string): RgbTuple {
	if (typeof hex !== "string") throw new TypeError(`first argument to 'hexToRgbTuple' must be a string!`);
	const properHex = toHex(hex);

	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	const normalizedHex = properHex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizedHex);
	if (result == null) throw new TypeError(`first argument to 'hexToRgb': '${hex}' could not be decoded as a hex color!`);

	const RED = parseInt(result[1], 16);
	const GREEN = parseInt(result[2], 16);
	const BLUE = parseInt(result[3], 16);

	return [RED, GREEN, BLUE];
}

/**
 * Generates a RGB version of a hex color and returns it as a string.
 * @param   {string}  hex - The hex color to convert. For instance, #f5f5f5.
 * @returns {string}       The RGB version of the color.
 */
export function hexToRgb(hex: string): string {
	return rgbTupleToRgb(hexToRgbTuple(toHex(hex)));
}

/**
 * Takes a color value or name and converts it to an RGB color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized RGB color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a RGB color.
 */
export function toRgb(color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toRgb()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) {
			throw new TypeError(`first argument to 'toRgb()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		}
		return hexToRgb(color);
	} else if (color.slice(0, 3) === "hsl") {
		return hslToRgb(color);
	} else if (color.slice(0, 4) === "hsla") {
		return hslToRgb(color);
	} else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return hsvToRgb(color);
	} else if (color.slice(0, 4) === "rgba") {
		return hexToRgb(rgbaToHex(color, "white"));
	} else if (color.slice(0, 3) === "rgb") {
		// Only call 'rgbStringToRgbTuple' to validate the actual rgb color. Will throw errors if something is missing.
		rgbStringToRgbTuple(color);
		return color;
	}

	const colorNameMatch = HTML_COLOR[color.toLowerCase()];
	if (colorNameMatch != null) return hexToRgb(colorNameMatch);
	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toRgb()' must be a valid color. '${color}' was given!`);
		return hexToRgb(`#${color}`);
	} else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Generates a HSL color from a hex color and returns it as a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string]
 * @param   {string}                   hex             - The hex color to convert. For instance, #123456.
 * @param   {boolean}                  [rounding=true] - If true, the h, s and l values will be rounded.
 * @returns {HslTuple}                                   A tuple of the HSL values.
 */
export function hexToHslTuple(hex: string, rounding: boolean = true): HslTuple {
	let [r, g, b] = hexToRgbTuple(toHex(hex));

	r /= RGB_MAX_VALUE;
	g /= RGB_MAX_VALUE;
	b /= RGB_MAX_VALUE;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	let l = (max + min) / 2;

	if (max === min) h = s = 0;
	else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	h = rounding ? Math.round(h * 360) : h * 360;
	s = rounding ? Math.round(s * 100) : s * 100;
	l = rounding ? Math.round(l * 100) : l * 100;

	return [h, `${s}%`, `${l}%`];
}

/**
 * Generates a HSLA color from a hex color and returns it as a tuple: [HUE, SATURATION, LIGHTNESS, ALPHA]
 * @param   {string}                           hex       - The hex color. For instance, #123456.
 * @param   {number}                           [alpha=1] - The alpha channel value of the HSLA color.
 * @returns {HslaTuple}                                    A tuple of the hue, saturation, lightness and alpha values.
 */
export function hexToHslaTuple(hex: string, alpha: number = 1): HslaTuple {
	if (typeof alpha !== "number") throw new TypeError(`second argument to 'hexToHslaTuple' must be of type 'number'!`);
	const [HUE, SATURATION, LIGHTNESS] = hexToHslTuple(hex);
	return [HUE, SATURATION, LIGHTNESS, alpha];
}

/**
 * Generates a HSLA color from a hex color and returns it as a string.
 * @param   {string}  hex      - The hex color. For instance, #123456.
 * @param   {number} [alpha=1] - The alpha channel value of the HSLA color.
 * @returns {string}             The generated HSLA color.
 */
export function hexToHsla(hex: string, alpha: number = 1): string {
	if (typeof alpha !== "number") throw new TypeError(`second argument to 'hexToHslaTuple' must be of type 'number'!`);
	return hslaTupleToHsla(hexToHslaTuple(hex, alpha));
}

/**
 * Generates a HSL color from a hex color and returns it as a string.
 * @param   {string} hex - The hex color to convert. For instance, #123456.
 * @returns {string}       The converted HSL color.
 */
export function hexToHsl(hex: string): string {
	return hslTupleToHsl(hexToHslTuple(hex));
}

/**
 * Generates a HSL color from a RGB color and returns it as a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string].
 * @param {RgbTuple}                    rgb             - The RGB color to convert.
 * @param {boolean}                     [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {HslTuple}                                    A tuple representation of the HSL color.
 */
export function rgbTupleToHslTuple([R, G, B]: RgbTuple, rounding: boolean = true): HslTuple {
	const normalizedRed = R === RGB_MAX_VALUE ? 1 : (R % RGB_MAX_VALUE) / RGB_MAX_VALUE;
	const normalizedGreen = G === RGB_MAX_VALUE ? 1 : (G % RGB_MAX_VALUE) / RGB_MAX_VALUE;
	const normalizedBlue = B === RGB_MAX_VALUE ? 1 : (B % RGB_MAX_VALUE) / RGB_MAX_VALUE;

	const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
	const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const diff = max - min;
		s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

		switch (max) {
			case normalizedRed:
				h = (normalizedGreen - normalizedBlue) / diff + (normalizedGreen < normalizedBlue ? 6 : 0);
				break;

			case normalizedGreen:
				h = (normalizedBlue - normalizedRed) / diff + 2;
				break;

			case normalizedBlue:
				h = (normalizedRed - normalizedGreen) / diff + 4;
				break;
		}
		h /= 6;
	}
	if (rounding) return [Math.round(h * 360), `${Math.round(s * 100)}%`, `${Math.round(l * 100)}%`];
	else return [h * 360, `${s * 100}%`, `${l * 100}%`];
}

/**
 * Generates a HSL color from a RGB color and returns it as a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string].
 * @param {string}                      rgb             - The RGB color to convert.
 * @param {boolean}                     [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {HslTuple}                                    A tuple representation of the HSL color.
 */
export function rgbToHslTuple(rgb: string, rounding: boolean = true): HslTuple {
	return rgbTupleToHslTuple(rgbStringToRgbTuple(rgb), rounding);
}

/**
 * Generates a HSL color from a RGB color and returns it as a string.
 * @param   {string} rgb - The RGB color to convert.
 * @returns {string}       A string representation of the HSL color.
 */
export function rgbToHsl(rgb: string): string {
	return hslTupleToHsl(rgbToHslTuple(rgb));
}

/**
 * Takes a color value or name and converts it to an HSL color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized HSL color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a HSL color.
 */
export function toHsl(color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHsl()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) {
			throw new TypeError(`first argument to 'toHsl()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		}
		return hexToHsl(color);
	} else if (color.slice(0, 3) === "hsl") {
		// Validate the HSL and add missing '%' symbols if required.
		const [H, S, L] = hslStringToHslTuple(color);
		return `hsl(${H}, ${S}, ${L})`;
	} else if (color.slice(0, 4) === "hsla") {
		return hslaToHsl(color);
	} else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return rgbToHsl(hsvToRgb(color));
	} else if (color.slice(0, 4) === "rgba") {
		return hexToHsl(rgbaToHex(color, "white"));
	} else if (color.slice(0, 3) === "rgb") {
		return rgbToHsl(color);
	}

	const colorNameMatch = HTML_COLOR[color.toLowerCase()];
	if (colorNameMatch != null) return hexToHsl(colorNameMatch);
	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHsl()' must be a valid color. '${color}' was given!`);
		return hexToHsl(`#${color}`);
	} else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Converts an RGB color to an HSV/HSB color and returns it as a tuple: [HUE: number, SATURATION: number, VALUE/BRIGHTNESS: number]
 * @param   {string}                    rgb - The RGB color to convert.
 * @returns {HsvTuple}                        A tuple representation of the HSV/HSB color.
 * @throws  {TypeError}                       If the first argument is not of type 'string'.
 */
export function rgbToHsvTuple(rgb: string): HsvTuple {
	if (typeof rgb !== "string") throw new TypeError(`first argument must be a string!`);
	const [R, G, B] = rgbStringToRgbTuple(rgb);

	const normalizedRed = R === RGB_MAX_VALUE ? 1 : (R % RGB_MAX_VALUE) / RGB_MAX_VALUE;
	const normalizedGreen = G === RGB_MAX_VALUE ? 1 : (G % RGB_MAX_VALUE) / RGB_MAX_VALUE;
	const normalizedBlue = B === RGB_MAX_VALUE ? 1 : (B % RGB_MAX_VALUE) / RGB_MAX_VALUE;

	const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
	const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
	let h = 0;
	const v = max;
	const diff = max - min;
	const s = max === 0 ? 0 : diff / max;
	if (max === min) h = 0;
	else {
		switch (max) {
			case normalizedRed:
				h = (normalizedGreen - normalizedBlue) / diff + (normalizedGreen < normalizedBlue ? 6 : 0);
				break;
			case normalizedGreen:
				h = (normalizedBlue - normalizedRed) / diff + 2;
				break;
			case normalizedBlue:
				h = (normalizedRed - normalizedGreen) / diff + 4;
				break;
		}
		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}

/**
 * Converts an RGB color to an HSV/HSB color and returns it as a string.
 * @param {string}      rgb       - The RGB color to convert.
 * @param {"hsb"|"hsv"} hsbOrHsv  - The variant of hsv/hsv to use
 * @returns {string}                A string representation of the HSV/HSB color.
 */
export function rgbToHsv(rgb: string, hsbOrHsv: "hsb" | "hsv" = "hsb"): string {
	return hsvTupleToHsv(rgbToHsvTuple(rgb), hsbOrHsv);
}

/**
 * Takes a color value or name and converts it to an HSV/HSB color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized HSV/HSB color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a HSV/HSB color.
 */
export function toHsv(color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHsv()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) {
			throw new TypeError(`first argument to 'toHsv()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		}
		return rgbToHsv(hexToRgb(color));
	} else if (color.slice(0, 3) === "hsl") {
		return rgbToHsv(hslToRgb(color));
	} else if (color.slice(0, 4) === "hsla") {
		return rgbToHsv(hexToRgb(rgbaToHex(hslaToRgba(color), "white")));
	} else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		// Only used for validating the input HSB/HSV color.
		hsvStringToHsvTuple(color);
		return color;
	} else if (color.slice(0, 4) === "rgba") {
		return rgbToHsv(hexToRgb(rgbaToHex(color, "white")));
	} else if (color.slice(0, 3) === "rgb") {
		return rgbToHsv(color);
	}

	const colorNameMatch = HTML_COLOR[color.toLowerCase()];
	if (colorNameMatch != null) return rgbToHsv(hexToRgb(colorNameMatch));
	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHsv()' must be a valid color. '${color}' was given!`);
		return rgbToHsv(hexToRgb(`#${color}`));
	} else throw new TypeError(`Couldn't decode color for input: ${color}`);
}
