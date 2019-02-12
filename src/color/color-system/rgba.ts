import {RgbTuple} from "./rgb";

export type RgbaTuple = [number, number, number, number];

/**
 * Converts the given RGBa Tuple into a proper RGBa color
 * @param {RgbaTuple|RgbTuple} tuple
 * @return {string}
 */
export function rgbaTupleToRgba([R, G, B, A]: RgbTuple | RgbaTuple): string {
	return `rgba(${R}, ${G}, ${B}, ${A})`;
}

/**
 * Generates a tuple-representation of an RGBa color: [RED: number, GREEN: number, BLUE: number, ALPHA: number].
 * @param   {string}                           rgbaString - An RGBa string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE, 0.4).
 * @returns {RgbaTuple}                                     A tuple representation of the RGBa color.
 * @throws  {TypeError}                                     If the first argument is not of type 'string'.
 * @throws  {TypeError}                                     If an RGBa color couldn't be extracted from the given string.
 */
export function rgbaStringToRgbaTuple(rgbaString: string): RgbaTuple {
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
