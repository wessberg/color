import {addLightnessToHslTuple, hslStringToHslTuple, hslTupleToHsl} from "./color-system/hsl";
import {hexToRgb, hslTupleToRgbTuple, hsvToRgb, rgbToHex, rgbToHslTuple, rgbToHsv, rgbTupleToHslTuple, toHsl} from "./conversion";
import {rgbaStringToRgbaTuple, rgbaTupleToRgba} from "./color-system/rgba";
import {rgbTupleToRgb} from "./color-system/rgb";
import {hslaStringToHslaTuple, hslaTupleToHsla} from "./color-system/hsla";

/**
 * Changes the lightness of a HSL color.
 * @param   {string} hsl              - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [percentage=10]  - The percentage with which to lighten the color.
 * @returns {string}                    The new HSL color.
 */
export function lightenHsl(hsl: string, percentage: number = 10): string {
	return hslTupleToHsl(addLightnessToHslTuple(hslStringToHslTuple(hsl), percentage));
}

/**
 * Changes the lightness of a HSLa color.
 * @param   {string} hsla              - The HSLa color. For instance, hsla(50, 100%, 100%, 0.5).
 * @param   {number} [percentage=10]  - The percentage with which to lighten the color.
 * @returns {string}                    The new HSLa color.
 */
export function lightenHsla(hsla: string, percentage: number = 10): string {
	return hslaTupleToHsla(addLightnessToHslTuple(hslaStringToHslaTuple(hsla), percentage));
}

/**
 * Changes the lightness of a RGB color.
 * @param   {string} rgb             - The RGB color. For instance, rgb(255, 80, 30).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new RGB color.
 */
export function lightenRgb(rgb: string, percentage: number = 10): string {
	return rgbTupleToRgb(hslTupleToRgbTuple(addLightnessToHslTuple(rgbToHslTuple(rgb), percentage)));
}

/**
 * Changes the lightness of a RGBa color.
 * @param   {string} rgba            - The RGBa color. For instance, rgba(255, 80, 30, 0.5).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new RGBa color.
 */
export function lightenRgba(rgba: string, percentage: number = 10): string {
	const [R, G, B, A] = rgbaStringToRgbaTuple(rgba);
	const [newR, newG, newB] = hslTupleToRgbTuple(addLightnessToHslTuple(rgbTupleToHslTuple([R, G, B]), percentage));
	return rgbaTupleToRgba([newR, newG, newB, A]);
}

/**
 * Changes the lightness of a HEX color.
 * @param   {string} hex             - The hex color. For instance, #f5f5f5
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new hex color.
 */
export function lightenHex(hex: string, percentage: number = 10): string {
	return rgbToHex(lightenRgb(hexToRgb(hex), percentage));
}

/**
 * Changes the lightness of a HSV/HSB color.
 * @param   {string} hsv             - The HSV/HSB color. For instance, hsb(15, 30, 55).
 * @param   {number} [percentage=10] - The percentage with which to lighten the color.
 * @returns {string}                   The new HSV/HSB color.
 */
export function lightenHsv(hsv: string, percentage: number = 10): string {
	return rgbToHsv(lightenRgb(hsvToRgb(hsv), percentage), hsv.slice(0, 3) === "hsb" ? "hsb" : "hsv");
}

/**
 * Changes the lightness of the given color. Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to darken the color instead.
 * @param {string} color           - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to lighten the color in percent.
 * @returns {string}                 The new color.
 */
export function lighten(color: string, percentage: number = 10): string {
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
export function isLight(color: string): boolean {
	const luminance = parseFloat(hslStringToHslTuple(toHsl(color))[2]);
	return luminance > 40;
}
