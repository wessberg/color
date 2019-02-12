import {hslStringToHslTuple} from "./hsl";

export type HslaTuple = [number, string, string, number];

/**
 * Converts the given HSLa Tuple into a proper HSLa color
 * @param {HslaTuple} tuple
 * @return {string}
 */
export function hslaTupleToHsla([H, S, L, A]: HslaTuple): string {
	return `hsla(${H}, ${S}, ${L}, ${A})`;
}

/**
 * Converts a string-represented HSLa color to a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string, ALPHA: number].
 * @param {string}                             hsla - The HSLA color to convert.
 * @returns {HslaTuple}                        The HSLA color in a tuple representation.
 * @throws  {TypeError}                        If the 'alpha' couldn't be decoded from the given string.
 */
export function hslaStringToHslaTuple(hsla: string): HslaTuple {
	if (typeof hsla !== "string") throw new TypeError(`first argument to 'hslaStringToHslaTuple' must be of type 'string'!`);

	const [HUE, SATURATION, LIGHTNESS] = hslStringToHslTuple(hsla);
	const result = hsla.slice(hsla.indexOf("(") + 1, hsla.lastIndexOf(")")).split(",");
	const ALPHA = parseFloat(result[result.length - 1]);

	if (isNaN(ALPHA)) throw new TypeError(`Couldn't decode the 'alpha' value for the given hsla color: ${hsla}`);

	return [HUE, SATURATION.slice(SATURATION.length - 1) !== "%" ? `${SATURATION}%` : SATURATION, LIGHTNESS.slice(LIGHTNESS.length - 1) !== "%" ? `${LIGHTNESS}%` : LIGHTNESS, ALPHA];
}
