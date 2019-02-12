import {HslaTuple} from "./hsla";

export type HslTuple = [number, string, string];

/**
 * Converts the given HSL Tuple into a proper HSL color
 * @param {HslTuple|HslaTuple} tuple
 * @return {string}
 */
export function hslTupleToHsl([H, S, L]: HslTuple | HslaTuple): string {
	return `hsl(${H}, ${S}, ${L})`;
}

/**
 * Adds lightness to the given HSL(a) tuple and returns a new one
 * @param {HslTuple|HslaTuple} tuple
 * @param {number} amount
 * @return {HslTuple|HslaTuple}
 */
export function addLightnessToHslTuple(tuple: HslTuple | HslaTuple, amount: number): typeof tuple extends HslTuple ? HslTuple : HslaTuple {
	const [H, S, inputL, A] = tuple;
	const outputL = `${Math.max(0, Math.min(100, parseFloat(inputL) + amount))}%`;
	return A != null ? [H, S, outputL, A] : (([H, S, outputL] as unknown) as HslaTuple);
}

/**
 * Adds saturation to the given HSL(a) tuple and returns a new one
 * @param {HslTuple|HslaTuple} tuple
 * @param {number} amount
 * @return {HslTuple|HslaTuple}
 */
export function addSaturationToToHslTuple(tuple: HslTuple | HslaTuple, amount: number): typeof tuple extends HslTuple ? HslTuple : HslaTuple {
	const [H, inputS, L, A] = tuple;
	const outputS = `${Math.max(0, Math.min(100, parseFloat(inputS) + amount))}%`;
	return A != null ? [H, outputS, L, A] : (([H, outputS, L] as unknown) as HslaTuple);
}

/**
 * Converts a string-represented HSL color to a tuple: [HUE: number, SATURATION: string, LIGHTNESS: string].
 * @param {string}                     hsl - The HSL color to convert.
 * @returns {HslTuple}                       The HSL color in a tuple representation.
 * @throws  {TypeError}                      If the first argument is not of type 'string'.
 * @throws  {TypeError}                      If the 'hue' couldn't be decoded from the given string.
 * @throws  {TypeError}                      If the 'saturation' couldn't be decoded from the given string.
 * @throws  {TypeError}                      If the 'lightness' couldn't be decoded from the given string.
 */
export function hslStringToHslTuple(hsl: string): HslTuple {
	if (typeof hsl !== "string") throw new TypeError(`first argument to 'hslStringToHslTuple' must be of type 'string'!`);

	const result = hsl.slice(hsl.indexOf("(") + 1, hsl.lastIndexOf(")")).split(",");

	const HUE = parseInt(result[0]);
	const SATURATION = result[1].trim();
	const LIGHTNESS = result[2].trim();

	if (isNaN(HUE)) throw new TypeError(`Couldn't decode the 'hue' value for the given hsl color: ${hsl}`);
	if (isNaN(parseInt(SATURATION))) throw new TypeError(`Couldn't decode the 'saturation' value for the given hsl color: ${hsl}`);
	if (isNaN(parseInt(LIGHTNESS))) throw new TypeError(`Couldn't decode the 'lightness' value for the given hsl color: ${hsl}`);

	return [HUE, SATURATION.slice(SATURATION.length - 1) !== "%" ? `${SATURATION}%` : SATURATION, LIGHTNESS.slice(LIGHTNESS.length - 1) !== "%" ? `${LIGHTNESS}%` : LIGHTNESS];
}
