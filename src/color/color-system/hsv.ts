export type HsvTuple = [number, number, number];

/**
 * Converts the given HSV Tuple into a proper HSV color
 * @param {HsvTuple} tuple
 * @param{"hsb"|"hsv"} hsbOrHsv
 * @return {string}
 */
export function hsvTupleToHsv([H, S, V]: HsvTuple, hsbOrHsv: "hsb" | "hsv" = "hsb"): string {
	return `${hsbOrHsv}(${H}, ${S}, ${V})`;
}

/**
 * Generates a tuple-representation of an HSV/HSB color.
 * @param   {string}                   hsvString - An HSV/HSB string. For instance, hsb(5, 10, 20).
 * @returns {HsvTuple}                             A tuple representation of the HSV color.
 * @throws  {TypeError}                            If the first argument is not of type 'string'.
 * @throws  {TypeError}                            If an HSV color couldn't be extracted from the given string.
 */
export function hsvStringToHsvTuple(hsvString: string): HsvTuple {
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
