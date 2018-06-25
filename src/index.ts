// tslint:disable:no-magic-numbers
// tslint:disable:binary-expression-operand-order

/**
 * The maximum possible RGB value
 * @type {number}
 */
const RGB_MAX_VALUE: number = 255;

/**
 * A map between HTML color names and their hex values.
 * @type {Object}
 */
export const COLOR_NAMES: { [key: string]: string } = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	gold: "#ffd700",
	goldenrod: "#daa520",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	"indianred ": "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavender: "#e6e6fa",
	lavenderblush: "#fff0f5",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgrey: "#d3d3d3",
	lightgreen: "#90ee90",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370d8",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#d87093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
};

/**
 * Converts a string-represented HSL color to a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string].
 * @param {string}                     hsl - The HSL color to convert.
 * @returns {[number, string, string]}       The HSL color in a tuple representation.
 * @throws  {TypeError}                      If the first argument is not of type 'string'.
 * @throws  {TypeError}                      If the 'hue' couldn't be decoded from the given string.
 * @throws  {TypeError}                      If the 'saturation' couldn't be decoded from the given string.
 * @throws  {TypeError}                      If the 'lightness' couldn't be decoded from the given string.
 */
export function hslStringToHslTuple (hsl: string): [number, string, string] {
	if (typeof hsl !== "string") throw new TypeError(`first argument to 'hslStringToHslTuple' must be of type 'string'!`);

	const result = hsl.slice(hsl.indexOf("(") + 1, hsl.lastIndexOf(")")).split(",");

	const HUE = parseInt(result[0]);
	const SATURATION = result[1].trim();
	const LIGHTNESS = result[2].trim();

	if (isNaN(HUE)) throw new TypeError(`Couldn't decode the 'hue' value for the given hsl color: ${hsl}`);
	if (isNaN(parseInt(SATURATION))) throw new TypeError(`Couldn't decode the 'saturation' value for the given hsl color: ${hsl}`);
	if (isNaN(parseInt(LIGHTNESS))) throw new TypeError(`Couldn't decode the 'lightness' value for the given hsl color: ${hsl}`);

	return [
		HUE,
		SATURATION.slice(SATURATION.length - 1) !== "%" ? `${SATURATION}%` : SATURATION,
		LIGHTNESS.slice(LIGHTNESS.length - 1) !== "%" ? `${LIGHTNESS}%` : LIGHTNESS
	];
}

/**
 * Generates a HSLA color from a HSL color.
 * @param   {string} hsl       - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [alpha=1] - The alpha channel value of the HSLA color.
 * @returns {string}             The HSLA version of the color.
 * @throws  {TypeError}          If the first argument is not of type 'string'.
 * @throws  {TypeError}          If the second argument is not of type 'number'.
 */
export function hslToHsla (hsl: string, alpha: number = 1): string {
	if (typeof hsl !== "string") throw new TypeError(`first argument to 'hslToHsla' must be of type 'string'!`);
	if (typeof alpha !== "number") throw new TypeError(`second argument to 'hslToHsla' must be of type 'number'!`);
	const [H, S, L] = hslStringToHslTuple(hsl);
	return `hsla(${H}, ${S}, ${L}, ${alpha})`;
}

/**
 * Converts a string-represented HSLa color to a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string, ALPHA: number].
 * @param {string}                             hsla - The HSLA color to convert.
 * @returns {[number, string, string, number]} The HSLA color in a tuple representation.
 * @throws  {TypeError}                        If the 'alpha' couldn't be decoded from the given string.
 */
export function hslaStringToHslaTuple (hsla: string): [number, string, string, number] {
	if (typeof hsla !== "string") throw new TypeError(`first argument to 'hslaStringToHslaTuple' must be of type 'string'!`);

	const [HUE, SATURATION, LIGHTNESS] = hslStringToHslTuple(hsla);
	const result = hsla.slice(hsla.indexOf("(") + 1, hsla.lastIndexOf(")")).split(",");
	const ALPHA = parseFloat(result[result.length - 1]);

	if (isNaN(ALPHA)) throw new TypeError(`Couldn't decode the 'alpha' value for the given hsla color: ${hsla}`);

	return [
		HUE,
		SATURATION.slice(SATURATION.length - 1) !== "%" ? `${SATURATION}%` : SATURATION,
		LIGHTNESS.slice(LIGHTNESS.length - 1) !== "%" ? `${LIGHTNESS}%` : LIGHTNESS,
		ALPHA
	];
}

/**
 * Converts the given HSL color to an RGB color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   hsl             - The HSL color to convert.
 * @param   {boolean}                  [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {[number, number, number]}                   The RGB color as a tuple.
 */
export function hslToRgbTuple (hsl: string, rounding: boolean = true): [number, number, number] {

	const [HUE, SATURATION, LIGHTNESS] = hslStringToHslTuple(hsl);

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
	const temp1 = l < 0.5
		? l * (1 + s)
		: l + s - l * s;

	const temp2 = 2 * l - temp1;

	// Convert the 360 degrees in a circle to 1 by dividing the hue by 360.
	const calculatedHue = h / 360;

	let temporaryRed = calculatedHue + (1 / 3);
	let temporaryGreen = calculatedHue;
	let temporaryBlue = calculatedHue - (1 / 3);

	// All values need to be between 0 and 1. For negative values, we must add 1.
	// For negative values, we must subtract 1.
	if (temporaryRed < 0) ++temporaryRed;
	else if (temporaryRed > 1) --temporaryRed;
	if (temporaryGreen < 0) ++temporaryGreen;
	else if (temporaryGreen > 1) --temporaryGreen;
	if (temporaryBlue < 0) ++temporaryBlue;
	else if (temporaryBlue > 1) --temporaryBlue;

	// Find the 'red' value.
	if ((6 * temporaryRed) < 1) r = temp2 + (temp1 - temp2) * 6 * temporaryRed;
	else if ((2 * temporaryRed) < 1) r = temp1;
	else if ((3 * temporaryRed) < 2) r = temp2 + (temp1 - temp2) * ((2 / 3) - temporaryRed) * 6;
	else r = temp2;

	// Find the 'green' value.
	if ((6 * temporaryGreen) < 1) g = temp2 + (temp1 - temp2) * 6 * temporaryGreen;
	else if ((2 * temporaryGreen) < 1) g = temp1;
	else if ((3 * temporaryGreen) < 2) g = temp2 + (temp1 - temp2) * ((2 / 3) - temporaryGreen) * 6;
	else g = temp2;

	// Find the 'blue' value.
	if ((6 * temporaryBlue) < 1) b = temp2 + (temp1 - temp2) * 6 * temporaryBlue;
	else if ((2 * temporaryBlue) < 1) b = temp1;
	else if ((3 * temporaryBlue) < 2) b = temp2 + (temp1 - temp2) * ((2 / 3) - temporaryBlue) * 6;
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
export function hslToRgb (hsl: string, rounding: boolean = true): string {
	const [R, G, B] = hslToRgbTuple(hsl, rounding);
	return `rgb(${R}, ${G}, ${B})`;
}

/**
 * Converts the given HSLa color to an RGBa color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number, ALPHA: number].
 * @param   {string}                           hsla - The HSLa color to convert.
 * @returns {[number, number, number, number]}       The RGBa color as a tuple.
 */
export function hslaToRgbaTuple (hsla: string): [number, number, number, number] {
	const [R, G, B] = hslToRgbTuple(hsla);

	// Extract the alpha value from the hsla string.
	const result = hslaStringToHslaTuple(hsla);
	return [R, G, B, result[3]];
}

/**
 * Converts the given HSLa color to an RGBa color and returns it as a string.
 * @param   {string} hsla - The HSLa color to convert.
 * @returns {string}       The RGBa color as a string.
 */
export function hslaToRgba (hsla: string): string {
	const [R, G, B, A] = hslaToRgbaTuple(hsla);
	return `rgba(${R}, ${G}, ${B}, ${A})`;
}

/**
 * Converts the given HSLa color to an HSL color and returns it as a string.
 * @param   {string} hsla - The HSLa color to convert.
 * @returns {string}       The HSL color as a string.
 */
export function hslaToHsl (hsla: string): string {
	const [H, S, L] = hslaStringToHslaTuple(hsla);
	return `hsl(${H}, ${S}, ${L})`;
}

/**
 * Generates a tuple-representation of an RGB color: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   rgbString - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @returns {[number, number, number]}             A tuple representation of the RGB color.
 * @throws  {TypeError}                            If the first argument is not of type 'string'.
 * @throws  {TypeError}                            If an RGB color couldn't be extracted from the given string.
 */
export function rgbStringToRgbTuple (rgbString: string): [number, number, number] {
	if (typeof rgbString !== "string") throw new TypeError(`first argument must be of type 'string'!`);
	const rgb = rgbString.match(/rgb\((.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	if (rgb == null) throw new TypeError(`'rgbToHex()' couldn't decode an RGB color from the given input: ${rgbString}`);

	const r = parseFloat(rgb[1]);
	const g = parseFloat(rgb[2]);
	const b = parseFloat(rgb[3]);

	if (isNaN(r)) throw new TypeError(`'rgbToString()' couldn't decode the 'red' value of the given RGB color: '${rgbString}'.`);
	if (isNaN(g)) throw new TypeError(`'rgbToString()' couldn't decode the 'green' value of the given RGB color: '${rgbString}'.`);
	if (isNaN(b)) throw new TypeError(`'rgbToString()' couldn't decode the 'blue' value of the given RGB color: '${rgbString}'.`);

	return [r, g, b];
}

/**
 * Generates a tuple-representation of an RGBa color: [RED: number, GREEN: number, BLUE: number, ALPHA: number].
 * @param   {string}                           rgbaString - An RGBa string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE, 0.4).
 * @returns {[number, number, number, number]}              A tuple representation of the RGBa color.
 * @throws  {TypeError}                                     If the first argument is not of type 'string'.
 * @throws  {TypeError}                                     If an RGBa color couldn't be extracted from the given string.
 */
export function rgbaStringToRgbaTuple (rgbaString: string): [number, number, number, number] {
	if (typeof rgbaString !== "string") throw new TypeError(`first argument must be of type 'string'!`);
	const rgba = rgbaString.match(/rgba\((.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	if (rgba == null) throw new TypeError(`Couldn't decode an RGBa color from the given input: ${rgbaString}`);

	const r = parseFloat(rgba[1]);
	const g = parseFloat(rgba[2]);
	const b = parseFloat(rgba[3]);
	const a = parseFloat(rgba[4]);

	if (isNaN(r)) throw new TypeError(`Couldn't decode the 'red' value of the given RGBa color: '${rgbaString}'.`);
	if (isNaN(g)) throw new TypeError(`Couldn't decode the 'green' value of the given RGBa color: '${rgbaString}'.`);
	if (isNaN(b)) throw new TypeError(`Couldn't decode the 'blue' value of the given RGBa color: '${rgbaString}'.`);
	if (isNaN(a)) throw new TypeError(`Couldn't decode the 'alpha' value of the given RGBa color: '${rgbaString}'.`);

	return [r, g, b, a];
}

/**
 * Generates a hex representation of an RGB color.
 * @param   {string} rgbString - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @returns {string}             A hex representation of the string. For instance #f5f5f5.
 */
export function rgbToHex (rgbString: string): string {
	const [r, g, b] = rgbStringToRgbTuple(rgbString);

	const bin = r << 16 | g << 8 | b;
	return (function (h) {
		return `#${new Array(7 - h.length).join("0") + h }`;
	})(bin.toString(16).toLowerCase());
}

/**
 * Generates a hex representation of an RGBa color.
 * @param   {string} rgbaString      - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @param   {string} [againstColor] - If given, the generated hex color will count in interpolation between the alpha channel and the color. So, for instance, even though the alpha channel value is "0" (so its invisible), if the color below it is pure white, the visible color would still be white and the generated hex color would be '#ffffff'
 * @returns {string}                  A hex representation of the string. For instance #f5f5f5.
 * @throws  {TypeError}               If the second argument is given but is not of type 'string'.
 */
export function rgbaToHex (rgbaString: string, againstColor?: string) {
	if (againstColor != null && typeof againstColor !== "string") throw new TypeError(`argument 'againstColor' must be of type 'string'!`);
	const [r, g, b, a] = rgbaStringToRgbaTuple(rgbaString);
	if (againstColor != null) {
		const [referenceR, referenceG, referenceB] = rgbStringToRgbTuple(toRgb(againstColor));
		return rgbToHex(`rgb(${r * a + referenceR * (1 - a)}, ${g * a + referenceG * (1 - a)}, ${b * a + referenceB * (1 - a)})`);
	}
	else return rgbToHex(`rgb(${r}, ${g}, ${b})`);
}

/**
 * Generates a tuple-representation of an HSV/HSB color.
 * @param   {string}                   hsvString - An HSV/HSB string. For instance, hsb(5, 10, 20).
 * @returns {[number, number, number]}             A tuple representation of the HSV color.
 * @throws  {TypeError}                            If the first argument is not of type 'string'.
 * @throws  {TypeError}                            If an HSV color couldn't be extracted from the given string.
 */
export function hsvStringToHsvTuple (hsvString: string): [number, number, number] {
	if (typeof hsvString !== "string") throw new TypeError(`first argument must be of type 'string'!`);
	let hsv = hsvString.match(/hsv\((.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	if (hsv == null) hsv = hsvString.match(/hsb\((.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);

	if (hsv == null) throw new TypeError(`Couldn't decode an HSV color from the given input: ${hsvString}`);

	const h = parseFloat(hsv[1]);
	const s = parseFloat(hsv[2]);
	const v = parseFloat(hsv[3]);

	if (isNaN(h)) throw new TypeError(`Couldn't decode the 'Hue' value of the given HSV color: '${hsvString}'.`);
	if (isNaN(s)) throw new TypeError(`Couldn't decode the 'Saturation' value of the given HSV color: '${hsvString}'.`);
	if (isNaN(v)) throw new TypeError(`Couldn't decode the 'Value/Brightness' value of the given HSV color: '${hsvString}'.`);

	return [h, s, v];
}

/**
 * Converts an HSV/HSB color to an RGB color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   hsv - The HSV color to convert.
 * @returns {[number, number, number]}       A tuple representation of the RGB color.
 */
export function hsvToRgbTuple (hsv: string): [number, number, number] {
	const [H, S, V] = hsvStringToHsvTuple(hsv);

	const normalizedH = (H === 360) ? 1 : (H % 360 / 360 * 6);
	const normalizedS = (S === 100) ? 1 : (S % 100 / 100);
	const normalizedV = (V === 100) ? 1 : (V % 100 / 100);

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
export function hsvToRgb (hsv: string): string {
	const [R, G, B] = hsvToRgbTuple(hsv);
	return `rgb(${R}, ${G}, ${B})`;
}

/**
 * Takes a color and converts it to a hex color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized hex color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a hex color.
 */
export function toHex (color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHex()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) throw new TypeError(`first argument to 'toHex()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		return color;
	}

	else if (color.slice(0, 3) === "hsl") {
		return rgbToHex(hslToRgb(color));
	}

	else if (color.slice(0, 4) === "hsla") {
		return rgbaToHex(hslaToRgba(color), "white");
	}

	else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return rgbToHex(hsvToRgb(color));
	}

	else if (color.slice(0, 4) === "rgba") {
		return rgbaToHex(color, "white");
	}

	else if (color.slice(0, 3) === "rgb") {
		return rgbToHex(color);
	}

	const colorNameMatch = COLOR_NAMES[color.toLowerCase()];
	if (colorNameMatch != null) return colorNameMatch;

	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHex()' must be a valid color. '${color}' was given!`);
		return `#${color}`;
	}

	else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Generates a RGB version of a hex color and returns it as a tuple: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}  hex              - The hex color to convert. For instance, #123456.
 * @returns {[number, number, number]}   A tuple of the red, green and blue values.
 * @throws  {TypeError}                  If the first argument is not a string.
 * @throws  {TypeError}                  If the given hex could not be decoded as a hex color.
 */
export function hexToRgbTuple (hex: string): [number, number, number] {
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
export function hexToRgb (hex: string): string {
	const [RED, GREEN, BLUE] = hexToRgbTuple(toHex(hex));
	return `rgb(${RED}, ${GREEN}, ${BLUE})`;
}

/**
 * Takes a color value or name and converts it to an RGB color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized RGB color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a RGB color.
 */
export function toRgb (color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toRgb()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) throw new TypeError(`first argument to 'toRgb()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		return hexToRgb(color);
	}

	else if (color.slice(0, 3) === "hsl") {
		return hslToRgb(color);
	}

	else if (color.slice(0, 4) === "hsla") {
		return hslToRgb(color);
	}

	else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return hsvToRgb(color);
	}

	else if (color.slice(0, 4) === "rgba") {
		return hexToRgb(rgbaToHex(color, "white"));
	}

	else if (color.slice(0, 3) === "rgb") {
		// Only call 'rgbStringToRgbTuple' to validate the actual rgb color. Will throw errors if something is missing.
		rgbStringToRgbTuple(color);
		return color;
	}

	const colorNameMatch = COLOR_NAMES[color.toLowerCase()];
	if (colorNameMatch != null) return hexToRgb(colorNameMatch);

	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toRgb()' must be a valid color. '${color}' was given!`);
		return hexToRgb(`#${color}`);
	}

	else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Generates a HSL color from a hex color and returns it as a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string]
 * @param   {string}                   hex             - The hex color to convert. For instance, #123456.
 * @param   {boolean}                  [rounding=true] - If true, the h, s and l values will be rounded.
 * @returns {[number, string, string]}                   A tuple of the HSL values.
 */
export function hexToHslTuple (hex: string, rounding: boolean = true): [number, string, string] {
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
 * @returns {[number, string, string, number]}             A tuple of the hue, saturation, lightness and alpha values.
 */
export function hexToHslaTuple (hex: string, alpha: number = 1): [number, string, string, number] {
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
export function hexToHsla (hex: string, alpha: number = 1): string {
	if (typeof alpha !== "number") throw new TypeError(`second argument to 'hexToHslaTuple' must be of type 'number'!`);
	const [HUE, SATURATION, LIGHTNESS, ALPHA] = hexToHslaTuple(hex, alpha);
	return `hsla(${HUE}, ${SATURATION}, ${LIGHTNESS}, ${ALPHA})`;
}

/**
 * Generates a HSL color from a hex color and returns it as a string.
 * @param   {string} hex - The hex color to convert. For instance, #123456.
 * @returns {string}       The converted HSL color.
 */
export function hexToHsl (hex: string): string {
	const [HUE, SATURATION, LIGHTNESS] = hexToHslTuple(hex);
	return `hsl(${HUE}, ${SATURATION}, ${LIGHTNESS})`;
}

/**
 * Generates a HSL color from a RGB color and returns it as a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string].
 * @param {string}                      rgb             - The RGB color to convert.
 * @param {boolean}                     [rounding=true] - If true, the r, g and b values will be rounded.
 * @returns {[number, string, string]}                    A tuple representation of the HSL color.
 */
export function rgbToHslTuple (rgb: string, rounding: boolean = true): [number, string, string] {
	const [R, G, B] = rgbStringToRgbTuple(rgb);

	const normalizedRed = (R === RGB_MAX_VALUE) ? 1 : (R % RGB_MAX_VALUE / RGB_MAX_VALUE);
	const normalizedGreen = (G === RGB_MAX_VALUE) ? 1 : (G % RGB_MAX_VALUE / RGB_MAX_VALUE);
	const normalizedBlue = (B === RGB_MAX_VALUE) ? 1 : (B % RGB_MAX_VALUE / RGB_MAX_VALUE);

	const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
	const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const diff = max - min;
		s = l > 0.5
			? diff / (2 - max - min)
			: diff / (max + min);

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
 * Generates a HSL color from a RGB color and returns it as a string.
 * @param   {string} rgb - The RGB color to convert.
 * @returns {string}       A string representation of the HSL color.
 */
export function rgbToHsl (rgb: string): string {
	const [H, S, L] = rgbToHslTuple(rgb);
	return `hsl(${H}, ${S}, ${L})`;
}

/**
 * Takes a color value or name and converts it to an HSL color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized HSL color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a HSL color.
 */
export function toHsl (color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHsl()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) throw new TypeError(`first argument to 'toHsl()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		return hexToHsl(color);
	}

	else if (color.slice(0, 3) === "hsl") {
		// Validate the HSL and add missing '%' symbols if required.
		const [H, S, L] = hslStringToHslTuple(color);
		return `hsl(${H}, ${S}, ${L})`;
	}

	else if (color.slice(0, 4) === "hsla") {
		return hslaToHsl(color);
	}

	else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		return rgbToHsl(hsvToRgb(color));
	}

	else if (color.slice(0, 4) === "rgba") {
		return hexToHsl(rgbaToHex(color, "white"));
	}

	else if (color.slice(0, 3) === "rgb") {
		return rgbToHsl(color);
	}

	const colorNameMatch = COLOR_NAMES[color.toLowerCase()];
	if (colorNameMatch != null) return hexToHsl(colorNameMatch);

	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHsl()' must be a valid color. '${color}' was given!`);
		return hexToHsl(`#${color}`);
	}

	else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Converts an RGB color to an HSV/HSB color and returns it as a tuple: [HUE: number, SATURATION: number, VALUE/BRIGHTNESS: number]
 * @param   {string}                    rgb - The RGB color to convert.
 * @returns {[number, number, number]}        A tuple representation of the HSV/HSB color.
 * @throws  {TypeError}                       If the first argument is not of type 'string'.
 */
export function rgbToHsvTuple (rgb: string): [number, number, number] {
	if (typeof rgb !== "string") throw new TypeError(`first argument must be a string!`);
	const [R, G, B] = rgbStringToRgbTuple(rgb);

	const normalizedRed = (R === RGB_MAX_VALUE) ? 1 : (R % RGB_MAX_VALUE / RGB_MAX_VALUE);
	const normalizedGreen = (G === RGB_MAX_VALUE) ? 1 : (G % RGB_MAX_VALUE / RGB_MAX_VALUE);
	const normalizedBlue = (B === RGB_MAX_VALUE) ? 1 : (B % RGB_MAX_VALUE / RGB_MAX_VALUE);

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
 * @param   {string} rgb - The RGB color to convert.
 * @returns {string}       A string representation of the HSV/HSB color.
 */
export function rgbToHsv (rgb: string): string {
	const [H, S, V] = rgbToHsvTuple(rgb);
	return `hsb(${H}, ${S}, ${V})`;
}

/**
 * Takes a color value or name and converts it to an HSV/HSB color.
 * @param   {string} color - The color to normalize.
 * @returns {string}          The normalized HSV/HSB color.
 * @throws  {TypeError}      If the first argument is not of type 'string'.
 * @throws  {TypeError}      If the given color appears to be a hex color but is of invalid length.
 * @throws  {TypeError}      If the method didn't succeed in normalizing the given argument into a HSV/HSB color.
 */
export function toHsv (color: string): string {
	if (typeof color !== "string") throw new TypeError(`first argument to 'toHsv()' must be a string!`);

	if (color[0] === "#") {
		if (color.length !== 4 && color.length !== 7) throw new TypeError(`first argument to 'toHsv()' must be a valid color. What appears to be a hex color was given: '${color}', but it doesn't have a valid amount of characters!`);
		return rgbToHsv(hexToRgb(color));
	}

	else if (color.slice(0, 3) === "hsl") {
		return rgbToHsv(hslToRgb(color));
	}

	else if (color.slice(0, 4) === "hsla") {
		return rgbToHsv(hexToRgb(rgbaToHex(hslaToRgba(color), "white")));
	}

	else if (color.slice(0, 3) === "hsb" || color.slice(0, 3) === "hsv") {
		// Only used for validating the input HSB/HSV color.
		hsvStringToHsvTuple(color);
		return color;
	}

	else if (color.slice(0, 4) === "rgba") {
		return rgbToHsv(hexToRgb(rgbaToHex(color, "white")));
	}

	else if (color.slice(0, 3) === "rgb") {
		return rgbToHsv(color);
	}

	const colorNameMatch = COLOR_NAMES[color.toLowerCase()];
	if (colorNameMatch != null) return rgbToHsv(hexToRgb(colorNameMatch));

	else if (/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i.test(color)) {
		// Must be a hex color without a '#' in front of it.
		if (color.length !== 3 && color.length !== 6) throw new TypeError(`first argument to 'toHsv()' must be a valid color. '${color}' was given!`);
		return rgbToHsv(hexToRgb(`#${color}`));
	}

	else throw new TypeError(`Couldn't decode color for input: ${color}`);
}

/**
 * Generates a random hex color and returns it.
 * @returns {string} a hex color.
 */
export function randomHexColor (): string {
	const color = (Math.random() * 0xFFFFFF << 0).toString(16);
	if (color.length < 6) return randomHexColor();
	else return `#${color}`;
}

/**
 * Generates a random RGB color and returns it.
 * @returns {string} an RGB color.
 */
export function randomRgbColor (): string {
	return hexToRgb(randomHexColor());
}

/**
 * Generates a random HSL color and returns it.
 * @returns {string} an HSL color.
 */
export function randomHslColor (): string {
	return hexToHsl(randomHexColor());
}

/**
 * Generates a random HSV/HSB color and returns it.
 * @returns {string} an HSV/HSB color.
 */
export function randomHsvColor (): string {
	return rgbToHsv(randomRgbColor());
}

/**
 * Changes the saturation of a HSL color.
 * @param   {string} hsl              - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [percentage=10]  - The percentage with which to saturate the color.
 * @returns {string}                    The new HSL color.
 */
export function saturateHsl (hsl: string, percentage: number = 10): string {
	const [H, S, L] = hslStringToHslTuple(hsl);
	return `hsl(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(S) / 100))}%, ${L})`;
}

/**
 * Changes the lightness of a HSL color.
 * @param   {string} hsl              - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [percentage=10]  - The percentage with which to lighten the color.
 * @returns {string}                    The new HSL color.
 */
export function lightenHsl (hsl: string, percentage: number = 10): string {
	const [H, S, L] = hslStringToHslTuple(hsl);
	return `hsl(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))}%)`;
}

/**
 * Changes the saturation of a HSLa color.
 * @param   {string} hsla              - The HSLa color. For instance, hsla(50, 100%, 100%, 0.5).
 * @param   {number} [percentage=10]  - The percentage with which to saturate the color.
 * @returns {string}                    The new HSLa color.
 */
export function saturateHsla (hsla: string, percentage: number = 10): string {
	const [H, S, L, A] = hslaStringToHslaTuple(hsla);
	return `hsla(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(S) / 100))}%, ${L}, ${A})`;
}

/**
 * Changes the lightness of a HSLa color.
 * @param   {string} hsla              - The HSLa color. For instance, hsla(50, 100%, 100%, 0.5).
 * @param   {number} [percentage=10]  - The percentage with which to lighten the color.
 * @returns {string}                    The new HSLa color.
 */
export function lightenHsla (hsla: string, percentage: number = 10): string {
	const [H, S, L, A] = hslaStringToHslaTuple(hsla);
	return `hsla(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))}%, ${A})`;
}

/**
 * Changes the saturation of a RGB color.
 * @param   {string} rgb             - The RGB color. For instance, rgb(RGB_MAX_VALUE, 80, 30).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new RGB color.
 */
export function saturateRgb (rgb: string, percentage: number = 10): string {
	const [H, S, L] = rgbToHslTuple(rgb);
	return hslToRgb(`hsl(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(S) / 100))}%, ${L})`);
}

/**
 * Changes the lightness of a RGB color.
 * @param   {string} rgb             - The RGB color. For instance, rgb(255, 80, 30).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new RGB color.
 */
export function lightenRgb (rgb: string, percentage: number = 10): string {
	const [H, S, L] = rgbToHslTuple(rgb);
	return hslToRgb(`hsl(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))}%)`);
}

/**
 * Changes the saturation of a RGBa color.
 * @param   {string} rgba            - The RGBa color. For instance, rgba(255, 80, 30, 0.5).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new RGBa color.
 */
export function saturateRgba (rgba: string, percentage: number = 10): string {
	const [R, G, B, A] = rgbaStringToRgbaTuple(rgba);
	const [H, S, L] = rgbToHslTuple(`rgb(${R}, ${G}, ${B})`);
	const [NEW_R, NEW_G, NEW_B] = hslToRgbTuple(`hsl(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(S) / 100))}%, ${L})`);
	return `rgba(${NEW_R}, ${NEW_G}, ${NEW_B}, ${A})`;
}

/**
 * Changes the lightness of a RGBa color.
 * @param   {string} rgba            - The RGBa color. For instance, rgba(255, 80, 30, 0.5).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new RGBa color.
 */
export function lightenRgba (rgba: string, percentage: number = 10): string {
	const [R, G, B, A] = rgbaStringToRgbaTuple(rgba);
	const [H, S, L] = rgbToHslTuple(`rgb(${R}, ${G}, ${B})`);
	const [NEW_R, NEW_G, NEW_B] = hslToRgbTuple(`hsl(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))}%)`);
	return `rgba(${NEW_R}, ${NEW_G}, ${NEW_B}, ${A})`;
}

/**
 * Changes the saturation of a HEX color.
 * @param   {string} hex             - The hex color. For instance, #f5f5f5
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new hex color.
 */
export function saturateHex (hex: string, percentage: number = 10): string {
	const [H, S, L] = hexToHslTuple(hex);
	return rgbToHex(hslToRgb(`hsl(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(S) / 100))}%, ${L})`));
}

/**
 * Changes the lightness of a HEX color.
 * @param   {string} hex             - The hex color. For instance, #f5f5f5
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new hex color.
 */
export function lightenHex (hex: string, percentage: number = 10): string {
	const [H, S, L] = hexToHslTuple(hex);
	return rgbToHex(hslToRgb(`hsl(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))}%)`));
}

/**
 * Changes the saturation of a HSV/HSB color.
 * @param   {string} hsv             - The HSV/HSB color. For instance, hsb(15, 30, 55).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new HSV/HSB color.
 */
export function saturateHsv (hsv: string, percentage: number = 10): string {
	const [H, S, V] = hsvStringToHsvTuple(hsv);
	const hsbOrHsv = hsv.slice(0, 3) === "hsb" ? "hsb" : "hsv";
	return `${hsbOrHsv}(${H}, ${Math.max(0, Math.min(100, (100 + percentage) * S / 100))}, ${V})`;
}

/**
 * Changes the lightness of a HSV/HSB color.
 * @param   {string} hsv             - The HSV/HSB color. For instance, hsb(15, 30, 55).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new HSV/HSB color.
 */
export function lightenHsv (hsv: string, percentage: number = 10): string {
	const [H, S, L] = rgbToHslTuple(hsvToRgb(hsv));
	return rgbToHsv(hslToRgb(`hsl(${H}, ${S}, ${Math.max(0, Math.min(100, (100 + percentage) * parseFloat(L) / 100))})`));
}

/**
 * Changes the saturation of the given color. Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to desaturate the color instead.
 * @param {string} color           - The color to saturate. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to saturate the color in percent.
 * @returns {string}                 The new color.
 */
export function saturate (color: string, percentage: number = 10): string {
	if (color.slice(0, 4) === "rgba") return saturateRgba(color, percentage);
	if (color.slice(0, 4) === "hsla") return saturateHsla(color, percentage);
	if (color.slice(0, 3) === "rgb") return saturateRgb(color, percentage);
	if (color.slice(0, 3) === "hsl") return saturateHsl(color, percentage);
	if (color.slice(0, 3) === "hsb") return saturateHsv(color, percentage);
	if (color.slice(0, 3) === "hsv") return saturateHsv(color, percentage);
	else return saturateHex(color, percentage);
}

/**
 * Changes the lightness of the given color. Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to darken the color instead.
 * @param {string} color           - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to lighten the color in percent.
 * @returns {string}                 The new color.
 */
export function lighten (color: string, percentage: number = 10): string {
	if (color.slice(0, 4) === "rgba") return lightenRgba(color, percentage);
	if (color.slice(0, 4) === "hsla") return lightenHsla(color, percentage);
	if (color.slice(0, 3) === "rgb") return lightenRgb(color, percentage);
	if (color.slice(0, 3) === "hsl") return lightenHsl(color, percentage);
	if (color.slice(0, 3) === "hsb") return lightenHsv(color, percentage);
	if (color.slice(0, 3) === "hsv") return lightenHsv(color, percentage);
	else return lightenHex(color, percentage);
}

/**
 * Determines if the given color is light or not.
 * @param   {string} color - The color to check. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @returns {boolean}        Whether or not the color is light.
 */
export function isLight (color: string): boolean {
	const luminance = parseFloat(hslStringToHslTuple(toHsl(color))[2]);
	return luminance > 40;
}
