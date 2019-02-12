import {addSaturationToToHslTuple, hslStringToHslTuple, hslTupleToHsl} from "./color-system/hsl";
import {hslaStringToHslaTuple, hslaTupleToHsla} from "./color-system/hsla";
import {rgbTupleToRgb} from "./color-system/rgb";
import {rgbaStringToRgbaTuple, rgbaTupleToRgba} from "./color-system/rgba";
import {hexToRgb, hslTupleToRgbTuple, hsvToRgb, rgbToHex, rgbToHslTuple, rgbToHsv, rgbTupleToHslTuple} from "./conversion";

/**
 * Changes the saturation of a HSL color.
 * @param   {string} hsl              - The HSL color. For instance, hsl(50, 100%, 100%).
 * @param   {number} [percentage=10]  - The percentage with which to saturate the color.
 * @returns {string}                    The new HSL color.
 */
export function saturateHsl(hsl: string, percentage: number = 10): string {
	return hslTupleToHsl(addSaturationToToHslTuple(hslStringToHslTuple(hsl), percentage));
}

/**
 * Changes the saturation of a HSLa color.
 * @param   {string} hsla              - The HSLa color. For instance, hsla(50, 100%, 100%, 0.5).
 * @param   {number} [percentage=10]  - The percentage with which to saturate the color.
 * @returns {string}                    The new HSLa color.
 */
export function saturateHsla(hsla: string, percentage: number = 10): string {
	return hslaTupleToHsla(addSaturationToToHslTuple(hslaStringToHslaTuple(hsla), percentage));
}

/**
 * Changes the saturation of a RGB color.
 * @param   {string} rgb             - The RGB color. For instance, rgb(RGB_MAX_VALUE, 80, 30).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new RGB color.
 */
export function saturateRgb(rgb: string, percentage: number = 10): string {
	return rgbTupleToRgb(hslTupleToRgbTuple(addSaturationToToHslTuple(rgbToHslTuple(rgb), percentage)));
}

/**
 * Changes the saturation of a RGBa color.
 * @param   {string} rgba            - The RGBa color. For instance, rgba(255, 80, 30, 0.5).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new RGBa color.
 */
export function saturateRgba(rgba: string, percentage: number = 10): string {
	const [R, G, B, A] = rgbaStringToRgbaTuple(rgba);
	const [newR, newG, newB] = hslTupleToRgbTuple(addSaturationToToHslTuple(rgbTupleToHslTuple([R, G, B]), percentage));
	return rgbaTupleToRgba([newR, newG, newB, A]);
}

/**
 * Changes the saturation of a HEX color.
 * @param   {string} hex             - The hex color. For instance, #f5f5f5
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new hex color.
 */
export function saturateHex(hex: string, percentage: number = 10): string {
	return rgbToHex(saturateRgb(hexToRgb(hex), percentage));
}

/**
 * Changes the saturation of a HSV/HSB color.
 * @param   {string} hsv             - The HSV/HSB color. For instance, hsb(15, 30, 55).
 * @param   {number} [percentage=10] - The percentage with which to saturate the color.
 * @returns {string}                   The new HSV/HSB color.
 */
export function saturateHsv(hsv: string, percentage: number = 10): string {
	return rgbToHsv(saturateRgb(hsvToRgb(hsv), percentage), hsv.slice(0, 3) === "hsb" ? "hsb" : "hsv");
}

/**
 * Changes the saturation of the given color. Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to desaturate the color instead.
 * @param {string} color           - The color to saturate. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to saturate the color in percent.
 * @returns {string}                 The new color.
 */
export function saturate(color: string, percentage: number = 10): string {
	if (color.slice(0, 4) === "rgba") return saturateRgba(color, percentage);
	if (color.slice(0, 4) === "hsla") return saturateHsla(color, percentage);
	if (color.slice(0, 3) === "rgb") return saturateRgb(color, percentage);
	if (color.slice(0, 3) === "hsl") return saturateHsl(color, percentage);
	if (color.slice(0, 3) === "hsb") return saturateHsv(color, percentage);
	if (color.slice(0, 3) === "hsv") return saturateHsv(color, percentage);
	else return saturateHex(color, percentage);
}
