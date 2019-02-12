import {hexToHsl, hexToRgb, rgbToHsv} from "./conversion";

/**
 * Generates a random hex color and returns it.
 * @returns {string} a hex color.
 */
export function randomHexColor(): string {
	const color = ((Math.random() * 0xffffff) << 0).toString(16);
	if (color.length < 6) return randomHexColor();
	else return `#${color}`;
}

/**
 * Generates a random RGB color and returns it.
 * @returns {string} an RGB color.
 */
export function randomRgbColor(): string {
	return hexToRgb(randomHexColor());
}

/**
 * Generates a random HSL color and returns it.
 * @returns {string} an HSL color.
 */
export function randomHslColor(): string {
	return hexToHsl(randomHexColor());
}

/**
 * Generates a random HSV/HSB color and returns it.
 * @returns {string} an HSV/HSB color.
 */
export function randomHsvColor(): string {
	return rgbToHsv(randomRgbColor());
}
