export type RgbTuple = [number, number, number];

/**
 * Converts the given RGB Tuple into a proper RGB color
 * @param {RgbTuple} tuple
 * @return {string}
 */
export function rgbTupleToRgb([R, G, B]: RgbTuple): string {
	return `rgb(${R}, ${G}, ${B})`;
}

/**
 * Generates a tuple-representation of an RGB color: [RED: number, GREEN: number, BLUE: number].
 * @param   {string}                   rgbString - An RGB string. For instance, rgb(RGB_MAX_VALUE, RGB_MAX_VALUE, RGB_MAX_VALUE).
 * @returns {RgbTuple}                             A tuple representation of the RGB color.
 * @throws  {TypeError}                            If the first argument is not of type 'string'.
 * @throws  {TypeError}                            If an RGB color couldn't be extracted from the given string.
 */
export function rgbStringToRgbTuple(rgbString: string): RgbTuple {
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
