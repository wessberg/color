import test from "ava";
import {
	hexToHsl,
	hexToHsla,
	hexToHslaTuple,
	hexToHslTuple,
	hexToRgb,
	hexToRgbTuple,
	hslaStringToHslaTuple,
	hslaToHsl,
	hslaToRgba,
	hslaToRgbaTuple,
	hslStringToHslTuple,
	hslToHsla,
	hslToRgb,
	hslToRgbTuple,
	hsvStringToHsvTuple,
	hsvToRgb,
	hsvToRgbTuple,
	isLight,
	lighten,
	lightenHex,
	lightenHsl,
	lightenHsla,
	lightenHsv,
	lightenRgb,
	lightenRgba,
	randomHexColor,
	randomHslColor,
	randomHsvColor,
	randomRgbColor,
	rgbaStringToRgbaTuple,
	rgbaToHex,
	rgbStringToRgbTuple,
	rgbToHex,
	rgbToHsl,
	rgbToHslTuple,
	rgbToHsv,
	rgbToHsvTuple,
	saturate,
	saturateHex,
	saturateHsl,
	saturateHsla,
	saturateHsv,
	saturateRgb,
	saturateRgba,
	toHex,
	toHsl,
	toHsv,
	toRgb
} from "../src/index";

// tslint:disable

test("#hslStringToHslTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslStringToHslTuple(null));
});

test("#hslStringToHslTuple() => Throws an exception if the 'hue' property of the 'hsl' color isn't valid.", t => {
	t.throws(() => hslStringToHslTuple("hsl(false, 50%, 100%)"));
});

test("#hslStringToHslTuple() => Throws an exception if the 'saturation' property of the 'hsl' color isn't valid.", t => {
	t.throws(() => hslStringToHslTuple("hsl(30, false, 100%)"));
});

test("#hslStringToHslTuple() => Throws an exception if the 'lightness' property of the 'hsl' color isn't valid.", t => {
	t.throws(() => hslStringToHslTuple("hsl(30, 50%, false)"));
});

test("#hslStringToHslTuple() => Converts string represented hsl colors to tuple represented hsl colors. #1", t => {
	const [H, S, L] = hslStringToHslTuple("hsl(50, 60%, 100%)");

	t.deepEqual(H, 50);
	t.deepEqual(S, "60%");
	t.deepEqual(L, "100%");
});

test("#hslStringToHslTuple() => Converts string represented hsl colors to tuple represented hsl colors. #2", t => {
	const [H, S, L] = hslStringToHslTuple("hsl(50, 60, 100)");

	t.deepEqual(H, 50);
	t.deepEqual(S, "60%");
	t.deepEqual(L, "100%");
});

test("#hslaStringToHslaTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslaStringToHslaTuple(null));
});

test("#hslaStringToHslaTuple() => Throws an exception if the 'hue' property of the 'hsla' color isn't valid. #1", t => {
	t.throws(() => hslaStringToHslaTuple("hsla(false, 50%, 100%, 1)"));
});

test("#hslaStringToHslaTuple() => Throws an exception if the 'hue' property of the 'hsla' color isn't valid. #2", t => {
	t.throws(() => hslaStringToHslaTuple("hsla(30, false, 100%, 1)"));
});

test("#hslaStringToHslaTuple() => Throws an exception if the 'lightness' property of the 'hsla' color isn't valid.", t => {
	t.throws(() => hslaStringToHslaTuple("hsla(30, 50%, false, 1)"));
});

test("#hslaStringToHslaTuple() => Throws an exception if the 'alpha' property of the 'hsla' color isn't valid.", t => {
	t.throws(() => hslaStringToHslaTuple("hsla(30, 50%, 100%, false)"));
});

test("#hslaStringToHslaTuple() => Converts string represented hsla colors to tuple represented hsla colors. #1", t => {
	const [H, S, L, A] = hslaStringToHslaTuple("hsl(50, 60%, 100%, 0.5)");

	t.deepEqual(H, 50);
	t.deepEqual(S, "60%");
	t.deepEqual(L, "100%");
	t.deepEqual(A, 0.5);
});

test("#hslaStringToHslaTuple() => Converts string represented hsla colors to tuple represented hsla colors. #2", t => {
	const [H, S, L, A] = hslaStringToHslaTuple("hsl(50, 60, 100, 0.9)");

	t.deepEqual(H, 50);
	t.deepEqual(S, "60%");
	t.deepEqual(L, "100%");
	t.deepEqual(A, 0.9);
});

test("#hslToHsla() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslToHsla(null));
});

test("#hslToHsla() => Throws an exception if the first argument is not a proper HSL color", t => {
	// @ts-ignore
	t.throws(() => hslToHsla("hsl(true, false, false)"));
});

test("#hslToHsla() => Throws an exception if the second argument is not of type 'number'", t => {
	// @ts-ignore
	t.throws(() => hslToHsla("hsl(50, 100%, 50%)", null));
});

test("#hslToHsla() => Converts hsl colors to hsla colors. #1", t => {
	t.deepEqual(hslToHsla("hsl(50, 100%, 100%)"), "hsla(50, 100%, 100%, 1)");
});

test("#hslToHsla() => Converts hsl colors to hsla colors. #2", t => {
	t.deepEqual(hslToHsla("hsl(50, 100%, 100%)", 0.5), "hsla(50, 100%, 100%, 0.5)");
});

test("#hslToHsla() => Automatically adds missing '%' symbols for saturation and lightness.", t => {
	t.deepEqual(hslToHsla("hsl(50, 100, 100)"), "hsla(50, 100%, 100%, 1)");
});

test("#hslToRgbTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslToRgbTuple(null));
});

test("#hslToRgbTuple() => Throws an exception if the first argument is not a proper HSL color", t => {
	// @ts-ignore
	t.throws(() => hslToRgbTuple("hsl(true, false, false)"));
});

test("#hslToRgbTuple() => Converts hsl colors to rgb colors. #1", t => {
	const [R, G, B] = hslToRgbTuple("hsl(50, 100%, 100%)");
	t.deepEqual(R, 255);
	t.deepEqual(G, 255);
	t.deepEqual(B, 255);
});

test("#hslToRgbTuple() => Converts hsl colors to rgb colors. #2", t => {
	const [R, G, B] = hslToRgbTuple("hsl(50, 84%, 44%)");
	t.deepEqual(R, 206);
	t.deepEqual(G, 175);
	t.deepEqual(B, 18);
});

test("#hslToRgbTuple() => Converts hsl colors to rgb colors. #3", t => {
	const [R, G, B] = hslToRgbTuple("hsl(194, 63%, 8%)");
	t.deepEqual(R, 8);
	t.deepEqual(G, 27);
	t.deepEqual(B, 33);
});

test("#hslToRgbTuple() => Works, even if '%' symbols are omitted from the saturation and lightness properties.", t => {
	const [R, G, B] = hslToRgbTuple("hsl(194, 63, 8)");
	t.deepEqual(R, 8);
	t.deepEqual(G, 27);
	t.deepEqual(B, 33);
});

test("#hslToRgb() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslToRgb(null));
});

test("#hslToRgb() => Throws an exception if the first argument is not a proper HSL color", t => {
	t.throws(() => hslToRgb("hsl(true, false, false)"));
});

test("#hslToRgb() => Converts hsl colors to rgb colors. #1", t => {
	t.deepEqual(hslToRgb("hsl(50, 100%, 100%)"), "rgb(255, 255, 255)");
});

test("#hslToRgb() => Converts hsl colors to rgb colors. #2", t => {
	t.deepEqual(hslToRgb("hsl(50, 84%, 44%)"), "rgb(206, 175, 18)");
});

test("#hslToRgb() => Converts hsl colors to rgb colors. #3", t => {
	t.deepEqual(hslToRgb("hsl(194, 63%, 8%)"), "rgb(8, 27, 33)");
});

test("#hslToRgb() => Works, even if '%' symbols are omitted from the saturation and lightness properties.", t => {
	t.deepEqual(hslToRgb("hsl(194, 63, 8)"), "rgb(8, 27, 33)");
});

test("#hslaToRgbaTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslaToRgbaTuple(null));
});

test("#hslaToRgbaTuple() => Throws an exception if the first argument is not a proper HSLa color", t => {
	t.throws(() => hslaToRgbaTuple("hsl(true, false, false)"));
});

test("#hslaToRgbaTuple() => Converts HSLa colors to RGBa colors. #1", t => {
	const [R, G, B, A] = hslaToRgbaTuple("hsla(118, 100%, 52%, 0.56)");
	t.deepEqual(R, 18);
	t.deepEqual(G, 255);
	t.deepEqual(B, 10);
	t.deepEqual(A, 0.56);
});

test("#hslaToRgbaTuple() => Converts HSLa colors to RGBa colors. #2", t => {
	const [R, G, B, A] = hslaToRgbaTuple("hsla(36, 31%, 69%, 0.84)");
	t.deepEqual(R, 200);
	t.deepEqual(G, 181);
	t.deepEqual(B, 151);
	t.deepEqual(A, 0.84);
});

test("#hslaToRgbaTuple() => Converts HSLa colors to RGBa colors. #3", t => {
	const [R, G, B, A] = hslaToRgbaTuple("hsla(360, 100%, 100%, 0.00)");
	t.deepEqual(R, 255);
	t.deepEqual(G, 255);
	t.deepEqual(B, 255);
	t.deepEqual(A, 0);
});

test("#hslaToRgbaTuple() => Works, even if '%' symbols are omitted from the saturation and lightness properties.", t => {
	const [R, G, B, A] = hslaToRgbaTuple("hsla(36, 31, 69, 0.84)");
	t.deepEqual(R, 200);
	t.deepEqual(G, 181);
	t.deepEqual(B, 151);
	t.deepEqual(A, 0.84);
});

test("#hslaToRgba() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslaToRgba(null));
});

test("#hslaToRgba() => Throws an exception if the first argument is not a proper HSLa color", t => {
	t.throws(() => hslaToRgba("hsl(true, false, false)"));
});

test("#hslaToRgba() => Converts HSLa colors to RGBa colors. #1", t => {
	t.deepEqual(hslaToRgba("hsla(118, 100%, 52%, 0.56)"), "rgba(18, 255, 10, 0.56)");
});

test("#hslaToRgba() => Converts HSLa colors to RGBa colors. #2", t => {
	t.deepEqual(hslaToRgba("hsla(36, 31%, 69%, 0.84)"), "rgba(200, 181, 151, 0.84)");
});

test("#hslaToRgba() => Converts HSLa colors to RGBa colors. #3", t => {
	t.deepEqual(hslaToRgba("hsla(360, 100%, 100%, 0.00)"), "rgba(255, 255, 255, 0)");
});

test("#hslaToRgba() => Works, even if '%' symbols are omitted from the saturation and lightness properties.", t => {
	t.deepEqual(hslaToRgba("hsla(36, 31, 69, 0.84)"), "rgba(200, 181, 151, 0.84)");
});

test("#hslaToHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hslaToHsl(null));
});

test("#hslaToHsl() => Throws an exception if the first argument is not a proper HSLa color", t => {
	t.throws(() => hslaToHsl("hsl(true, false, false)"));
});

test("#hslaToHsl() => Converts HSLa colors to hsl colors. #1", t => {
	t.deepEqual(hslaToHsl("hsla(118, 100%, 52%, 0.56)"), "hsl(118, 100%, 52%)");
});

test("#hslaToHsl() => Converts HSLa colors to RGBa colors. #2", t => {
	t.deepEqual(hslaToHsl("hsla(36, 31%, 69%, 0.84)"), "hsl(36, 31%, 69%)");
});

test("#hslaToHsl() => Converts HSLa colors to RGBa colors. #3", t => {
	t.deepEqual(hslaToHsl("hsla(360, 100%, 100%, 0.00)"), "hsl(360, 100%, 100%)");
});

test("#hslaToHsl() => Works, even if '%' symbols are omitted from the saturation and lightness properties.", t => {
	t.deepEqual(hslaToHsl("hsla(36, 31, 69, 0.84)"), "hsl(36, 31%, 69%)");
});

test("#rgbStringToRgbTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbStringToRgbTuple(null));
});

test("#rgbStringToRgbTuple() => Throws an exception if the first argument is not a proper rgb color", t => {
	t.throws(() => rgbStringToRgbTuple("rgb(true, false, false)"));
});

test("#rgbStringToRgbTuple() => Converts string representations of RGB colors to tuple representations. #1", t => {
	const [R, G, B] = rgbStringToRgbTuple("rgb(50, 100, 200)");
	t.deepEqual(R, 50);
	t.deepEqual(G, 100);
	t.deepEqual(B, 200);
});

test("#rgbStringToRgbTuple() => Converts string representations of RGB colors to tuple representations. #2", t => {
	const [R, G, B] = rgbStringToRgbTuple("rgb(20, 85, 255)");
	t.deepEqual(R, 20);
	t.deepEqual(G, 85);
	t.deepEqual(B, 255);
});

test("#rgbStringToRgbTuple() => Converts string representations of RGB colors to tuple representations. #3", t => {
	const [R, G, B] = rgbStringToRgbTuple("rgb(0, 0, 80)");
	t.deepEqual(R, 0);
	t.deepEqual(G, 0);
	t.deepEqual(B, 80);
});

test("#rgbaStringToRgbaTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbaStringToRgbaTuple(null));
});

test("#rgbaStringToRgbaTuple() => Throws an exception if the first argument is not a proper RGBa color", t => {
	t.throws(() => rgbaStringToRgbaTuple("rgba(true, false, false, false)"));
});

test("#rgbaStringToRgbaTuple() => Converts string representations of RGBa colors to tuple representations. #1", t => {
	const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(50, 100, 200, 0.9)");
	t.deepEqual(R, 50);
	t.deepEqual(G, 100);
	t.deepEqual(B, 200);
	t.deepEqual(A, 0.9);
});

test("#rgbaStringToRgbaTuple() => Converts string representations of RGBa colors to tuple representations. #2", t => {
	const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(140, 10, 89, 0.2)");
	t.deepEqual(R, 140);
	t.deepEqual(G, 10);
	t.deepEqual(B, 89);
	t.deepEqual(A, 0.2);
});

test("#rgbaStringToRgbaTuple() => Converts string representations of RGBa colors to tuple representations. #3", t => {
	const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(0, 0, 0, 0)");
	t.deepEqual(R, 0);
	t.deepEqual(G, 0);
	t.deepEqual(B, 0);
	t.deepEqual(A, 0);
});

test("#rgbToHex() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbToHex(null));
});

test("#rgbToHex() => Throws an exception if the first argument is not a proper RGB color", t => {
	t.throws(() => rgbToHex("rgb(true, false, false)"));
});

test("#rgbToHex() => Converts RGB colors to hex colors. #1", t => {
	t.deepEqual(rgbToHex("rgb(125, 244, 66)"), "#7df442");
});

test("#rgbToHex() => Converts RGB colors to hex colors. #2", t => {
	t.deepEqual(rgbToHex("rgb(255, 255, 255)"), "#ffffff");
});

test("#rgbToHex() => Converts RGB colors to hex colors. #3", t => {
	t.deepEqual(rgbToHex("rgb(0, 0, 0)"), "#000000");
});

test("#rgbToHex() => Converts RGB colors to hex colors. #4", t => {
	t.deepEqual(rgbToHex("rgb(39, 109, 65)"), "#276d41");
});

test("#rgbaToHex() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbaToHex(null));
});

test("#rgbaToHex() => Throws an exception if the first argument is not a proper RGBa color", t => {
	t.throws(() => rgbaToHex("rgba(true, false, false, false)"));
});

test("#rgbaToHex() => Throws an exception if the second argument is given but is not a string", t => {
	// @ts-ignore
	t.throws(() => rgbaToHex("rgba(10, 50, 80, 1)", false));
});

test("#rgbaToHex() => Converts RGBa colors to hex colors. #1", t => {
	t.deepEqual(rgbaToHex("rgba(125, 244, 66, 1)"), "#7df442");
});

test("#rgbaToHex() => Converts RGBa colors to hex colors. #2", t => {
	t.deepEqual(rgbaToHex("rgba(255, 255, 255, 0.5)"), "#ffffff");
});

test("#rgbaToHex() => Converts RGBa colors to hex colors. #3", t => {
	t.deepEqual(rgbaToHex("rgba(0, 0, 0, 1)"), "#000000");
});

test("#rgbaToHex() => Converts RGBa colors to hex colors. #4", t => {
	t.deepEqual(rgbaToHex("rgba(39, 109, 65, 0.8)"), "#276d41");
});

test("#rgbaToHex() => Converts RGBa colors to hex colors including interpolation of the alpha channel. #1", t => {
	t.deepEqual(rgbaToHex("rgba(255, 255, 255, 0)", "white"), "#ffffff");
});

test("#rgbaToHex() => Converts RGBa colors to hex colors including interpolation of the alpha channel. #2", t => {
	t.deepEqual(rgbaToHex("rgba(255, 255, 255, 0)", "black"), "#000000");
});

test("#hsvStringToHsvTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hsvStringToHsvTuple(null));
});

test("#hsvStringToHsvTuple() => Throws an exception if the first argument is not a proper HSV/HSB color. #1", t => {
	t.throws(() => hsvStringToHsvTuple("hsb(50, 100, false)"));
});

test("#hsvStringToHsvTuple() => Throws an exception if the first argument is not a proper HSV/HSB color. #2", t => {
	t.throws(() => hsvStringToHsvTuple("hsv(50, 100, false)"));
});

test("#hsvStringToHsvTuple() => Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #1", t => {
	const [H, S, V] = hsvStringToHsvTuple("hsb(1, 2, 3)");
	t.deepEqual(H, 1);
	t.deepEqual(S, 2);
	t.deepEqual(V, 3);
});

test("#hsvStringToHsvTuple() => Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #2", t => {
	const [H, S, V] = hsvStringToHsvTuple("hsv(0, 0, 0)");
	t.deepEqual(H, 0);
	t.deepEqual(S, 0);
	t.deepEqual(V, 0);
});

test("#hsvStringToHsvTuple() => Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #3", t => {
	const [H, S, V] = hsvStringToHsvTuple("hsb(360, 100, 100)");
	t.deepEqual(H, 360);
	t.deepEqual(S, 100);
	t.deepEqual(V, 100);
});

test("#hsvToRgbTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hsvToRgbTuple(null));
});

test("#hsvToRgbTuple() => Throws an exception if the first argument is not a proper HSV/HSB color. #1", t => {
	t.throws(() => hsvToRgbTuple("hsb(50, 100, false)"));
});

test("#hsvToRgbTuple() => Throws an exception if the first argument is not a proper HSV/HSB color. #2", t => {
	t.throws(() => hsvToRgbTuple("hsv(50, 100, false)"));
});

test("#hsvToRgbTuple() => Generates tuple representations of RGB colors from HSV/HSB strings. #1", t => {
	const [R, G, B] = hsvToRgbTuple("hsv(10, 5, 50)");
	t.deepEqual(R, 128);
	t.deepEqual(G, 122);
	t.deepEqual(B, 121);
});

test("#hsvToRgbTuple() => Generates tuple representations of RGB colors from HSV/HSB strings. #2", t => {
	const [R, G, B] = hsvToRgbTuple("hsv(125, 36, 11)");
	t.deepEqual(R, 18);
	t.deepEqual(G, 28);
	t.deepEqual(B, 19);
});

test("#hsvToRgbTuple() => Generates tuple representations of RGB colors from HSV/HSB strings. #3", t => {
	const [R, G, B] = hsvToRgbTuple("hsv(359, 0, 0)");
	t.deepEqual(R, 0);
	t.deepEqual(G, 0);
	t.deepEqual(B, 0);
});

test("#hsvToRgb() =>Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hsvToRgb(null));
});

test("#hsvToRgb() =>Throws an exception if the first argument is not a proper HSV/HSB color. #1", t => {
	t.throws(() => hsvToRgb("hsb(50, 100, false)"));
});

test("#hsvToRgb() =>Throws an exception if the first argument is not a proper HSV/HSB color. #2", t => {
	t.throws(() => hsvToRgb("hsv(50, 100, false)"));
});

test("#hsvToRgb() =>Generates RGB colors from HSV/HSB strings. #1", t => {
	t.deepEqual(hsvToRgb("hsv(10, 5, 50)"), "rgb(128, 122, 121)");
});

test("#hsvToRgb() =>Generates RGB colors from HSV/HSB strings. #2", t => {
	t.deepEqual(hsvToRgb("hsv(125, 36, 11)"), "rgb(18, 28, 19)");
});

test("#hsvToRgb() =>Generates RGB colors from HSV/HSB strings. #3", t => {
	t.deepEqual(hsvToRgb("hsv(359, 0, 0)"), "rgb(0, 0, 0)");
});

test("#toHex() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => toHex(null));
});

test("#toHex() => Throws an exception if the first argument is not a proper color. #1", t => {
	t.throws(() => toHex("foobar"));
});

test("#toHex() => Throws an exception if the first argument is not a proper color. #2", t => {
	t.throws(() => toHex("#1234"));
});

test("#toHex() => Throws an exception if the first argument is not a proper color. #3", t => {
	t.throws(() => toHex("1234"));
});

test("#toHex() => Throws an exception if the first argument is not a proper color. #4", t => {
	t.throws(() => toHex("rgb()"));
});

test("#toHex() => Throws an exception if the first argument is not a proper color. #5", t => {
	t.throws(() => toHex("hsl(false, rgb, true)"));
});

test("#toHex() => returns given hex codes just as they were if they start with a '#' and is otherwise valid. #1", t => {
	t.deepEqual(toHex("#123"), "#123");
});

test("#toHex() => returns given hex codes just as they were if they start with a '#' and is otherwise valid. #2", t => {
	t.deepEqual(toHex("#ffffff"), "#ffffff");
});

test("#toHex() => Adds a '#' in front of valid hex codes that lacks it. #1", t => {
	t.deepEqual(toHex("ffffff"), "#ffffff");
});

test("#toHex() => Adds a '#' in front of valid hex codes that lacks it. #2", t => {
	t.deepEqual(toHex("123"), "#123");
});

test("#toHex() => Converts HTML color names to their actual hex values. #1", t => {
	t.deepEqual(toHex("white"), "#ffffff");
});

test("#toHex() => Converts HTML color names to their actual hex values. #2", t => {
	t.deepEqual(toHex("antiquewhite"), "#faebd7");
});

test("#toHex() => Converts RGB colors to hex values. #1", t => {
	t.deepEqual(toHex("rgb(0, 0, 0)"), "#000000");
});

test("#toHex() => Converts RGB colors to hex values. #2", t => {
	t.deepEqual(toHex("rgb(255, 255, 255)"), "#ffffff");
});

test("#toHex() => Converts RGB colors to hex values. #3", t => {
	t.deepEqual(toHex("rgb(88, 100, 119)"), "#586477");
});

test("#toHex() => Converts RGBa colors to hex values. #1", t => {
	t.deepEqual(toHex("rgba(88, 100, 119, .5)"), "#abb1bb");
});

test("#toHex() => Converts HSL colors to hex values. #1", t => {
	t.deepEqual(toHex("hsl(157, 100%, 50%)"), "#00ff9d");
});

test("#toHex() => Converts HSL colors to hex values. #2", t => {
	t.deepEqual(toHex("hsl(79, 100%, 16%)"), "#385200");
});

test("#toHex() => Converts HSL colors to hex values. #3", t => {
	t.deepEqual(toHex("hsl(229, 47%, 16%)"), "#161d3c");
});

test("#toHex() => Converts HSV/HSB colors to hex values. #1", t => {
	t.deepEqual(toHex("hsv(228, 75, 78)"), "#3250c7");
});

test("#toHex() => Converts HSV/HSB colors to hex values. #2", t => {
	t.deepEqual(toHex("hsv(272, 83, 51)"), "#501682");
});

test("#toHex() => Converts HSV/HSB colors to hex values. #3", t => {
	t.deepEqual(toHex("hsb(344, 100, 12)"), "#1f0008");
});

test("#hexToRgbTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToRgbTuple(null));
});

test("#hexToRgbTuple() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToRgbTuple("foobar"));
});

test("#hexToRgbTuple() => Generates RGB tuples from hex strings. #1", t => {
	const [R, G, B] = hexToRgbTuple("#000000");
	t.deepEqual(R, 0);
	t.deepEqual(G, 0);
	t.deepEqual(B, 0);
});

test("#hexToRgbTuple() => Generates RGB tuples from hex strings. #2", t => {
	const [R, G, B] = hexToRgbTuple("ffffff");
	t.deepEqual(R, 255);
	t.deepEqual(G, 255);
	t.deepEqual(B, 255);
});

test("#hexToRgbTuple() => Generates RGB tuples from hex strings. #3", t => {
	const [R, G, B] = hexToRgbTuple("4286f4");
	t.deepEqual(R, 66);
	t.deepEqual(G, 134);
	t.deepEqual(B, 244);
});

test("#hexToRgb() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToRgb(null));
});

test("#hexToRgb() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToRgb("foobar"));
});

test("#hexToRgb() => Generates RGB colors from hex strings. #1", t => {
	t.deepEqual(hexToRgb("#000000"), "rgb(0, 0, 0)");
});

test("#hexToRgb() => Generates RGB tuples from hex strings. #2", t => {
	t.deepEqual(hexToRgb("ffffff"), "rgb(255, 255, 255)");
});

test("#hexToRgb() => Generates RGB tuples from hex strings. #3", t => {
	t.deepEqual(hexToRgb("4286f4"), "rgb(66, 134, 244)");
});

test("#toRgb() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => toRgb(null));
});

test("#toRgb() => Throws an exception if the first argument is not a proper color. #1", t => {
	t.throws(() => toRgb("foobar"));
});

test("#toRgb() => Throws an exception if the first argument is not a proper color. #2", t => {
	t.throws(() => toRgb("#1234"));
});

test("#toRgb() => Throws an exception if the first argument is not a proper color. #3", t => {
	t.throws(() => toRgb("1234"));
});

test("#toRgb() => Throws an exception if the first argument is not a proper color. #4", t => {
	t.throws(() => toRgb("rgb()"));
});

test("#toRgb() => Throws an exception if the first argument is not a proper color. #5", t => {
	t.throws(() => toRgb("hsl(false, rgb, true)"));
});

test("#toRgb() => returns rgb colors just as they were. #1", t => {
	t.deepEqual(toRgb("rgb(50, 60, 70)"), "rgb(50, 60, 70)");
});

test("#toRgb() => returns rgb colors just as they were. #2", t => {
	t.deepEqual(toRgb("rgb(255, 255, 255)"), "rgb(255, 255, 255)");
});

test("#toRgb() => Converts hex colors to RGB colors. #1", t => {
	t.deepEqual(toRgb("#000000"), "rgb(0, 0, 0)");
});

test("#toRgb() => Converts hex colors to RGB colors. #2", t => {
	t.deepEqual(toRgb("ffffff"), "rgb(255, 255, 255)");
});

test("#toRgb() => Converts hex colors to RGB colors. #3", t => {
	t.deepEqual(toRgb("4286f4"), "rgb(66, 134, 244)");
});

test("#toRgb() => Converts HTML color names to RGB values. #1", t => {
	t.deepEqual(toRgb("antiquewhite"), "rgb(250, 235, 215)");
});

test("#toRgb() => Converts HTML color names to RGB values. #2", t => {
	t.deepEqual(toRgb("aquamarine"), "rgb(127, 255, 212)");
});

test("#toRgb() => Converts HSL colors to RGB colors. #1", t => {
	t.deepEqual(toRgb("hsl(96, 41%, 78%)"), "rgb(194, 222, 176)");
});

test("#toRgb() => Converts RGBa colors to RGB colors. #1", t => {
	t.deepEqual(toRgb("rgba(88, 100, 119, .5)"), "rgb(171, 177, 187)");
});

test("#toRgb() => Converts HSL colors to RGB colors. #2", t => {
	t.deepEqual(toRgb("hsl(29, 87%, 50%)"), "rgb(238, 124, 17)");
});

test("#toRgb() => Converts HSL colors to RGB colors. #3", t => {
	t.deepEqual(toRgb("hsl(0, 87%, 0%)"), "rgb(0, 0, 0)");
});

test("#toRgb() => Converts HSV/HSB colors to RGB colors. #1", t => {
	t.deepEqual(toRgb("hsv(162, 68, 13)"), "rgb(11, 33, 26)");
});

test("#toRgb() => Converts HSV/HSB colors to RGB colors. #2", t => {
	t.deepEqual(toRgb("hsv(245, 35, 67)"), "rgb(116, 111, 171)");
});

test("#toRgb() => Converts HSV/HSB colors to RGB colors. #3", t => {
	t.deepEqual(toRgb("hsb(259, 0, 99)"), "rgb(252, 252, 252)");
});

test("#hexToHslTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToHslTuple(null));
});

test("#hexToHslTuple() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToHslTuple("foobar"));
});

test("#hexToHslTuple() => Generates HSL tuples from hex strings. #1", t => {
	const [H, S, L] = hexToHslTuple("#87eeca");
	t.deepEqual(H, 159);
	t.deepEqual(S, "75%");
	t.deepEqual(L, "73%");
});

test("#hexToHslTuple() => Generates HSL tuples from hex strings. #2", t => {
	const [H, S, L] = hexToHslTuple("#6e64a0");
	t.deepEqual(H, 250);
	t.deepEqual(S, "24%");
	t.deepEqual(L, "51%");
});

test("#hexToHslTuple() => Generates HSL tuples from hex strings. #3", t => {
	const [H, S, L] = hexToHslTuple("#1e681d");
	t.deepEqual(H, 119);
	t.deepEqual(S, "56%");
	t.deepEqual(L, "26%");
});

test("#hexToHslaTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToHslaTuple(null));
});

test("#hexToHslaTuple() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToHslaTuple("foobar"));
});

test("#hexToHslaTuple() => Throws an exception if the second argument is not a number.", t => {
	// @ts-ignore
	t.throws(() => hexToHslaTuple("#000000", false));
});

test("#hexToHslaTuple() => Generates HSLa tuples from hex strings. #1", t => {
	const [H, S, L, A] = hexToHslaTuple("#87eeca");
	t.deepEqual(H, 159);
	t.deepEqual(S, "75%");
	t.deepEqual(L, "73%");
	t.deepEqual(A, 1);
});

test("#hexToHslaTuple() => Generates HSLa tuples from hex strings. #2", t => {
	const [H, S, L, A] = hexToHslaTuple("#6e64a0", 0.5);
	t.deepEqual(H, 250);
	t.deepEqual(S, "24%");
	t.deepEqual(L, "51%");
	t.deepEqual(A, 0.5);
});

test("#hexToHslaTuple() => Generates HSLa tuples from hex strings. #3", t => {
	const [H, S, L, A] = hexToHslaTuple("#1e681d", 0);
	t.deepEqual(H, 119);
	t.deepEqual(S, "56%");
	t.deepEqual(L, "26%");
	t.deepEqual(A, 0);
});

test("#hexToHsla() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToHsla(null));
});

test("#hexToHsla() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToHsla("foobar"));
});

test("#hexToHsla() => Throws an exception if the second argument is not a number.", t => {
	// @ts-ignore
	t.throws(() => hexToHsla("#000000", false));
});

test("#hexToHsla() => Generates HSLa colors from hex strings. #1", t => {
	t.deepEqual(hexToHsla("#87eeca"), "hsla(159, 75%, 73%, 1)");
});

test("#hexToHsla() => Generates HSLa colors from hex strings. #2", t => {
	t.deepEqual(hexToHsla("#6e64a0", 0.5), "hsla(250, 24%, 51%, 0.5)");
});

test("#hexToHsla() => Generates HSLa tuples from hex strings. #3", t => {
	t.deepEqual(hexToHsla("#1e681d", 0), "hsla(119, 56%, 26%, 0)");
});

test("#hexToHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => hexToHsl(null));
});

test("#hexToHsl() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => hexToHsl("foobar"));
});

test("#hexToHsl() => Generates HSL colors from hex strings. #1", t => {
	t.deepEqual(hexToHsl("#87eeca"), "hsl(159, 75%, 73%)");
});

test("#hexToHsl() => Generates HSL colors from hex strings. #2", t => {
	t.deepEqual(hexToHsl("#6e64a0"), "hsl(250, 24%, 51%)");
});

test("#hexToHsl() => Generates HSL colors from hex strings. #3", t => {
	t.deepEqual(hexToHsl("#1e681d"), "hsl(119, 56%, 26%)");
});

test("#rgbToHslTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbToHslTuple(null));
});

test("#rgbToHslTuple() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => rgbToHslTuple("rgb()"));
});

test("#rgbToHslTuple() => Generates HSL tuples from RGB colors. #1", t => {
	const [H, S, L] = rgbToHslTuple("rgb(24, 102, 20)");
	t.deepEqual(H, 117);
	t.deepEqual(S, "67%");
	t.deepEqual(L, "24%");
});

test("#rgbToHslTuple() => Generates HSL tuples from RGB colors. #2", t => {
	const [H, S, L] = rgbToHslTuple("rgb(81, 122, 179)");
	t.deepEqual(H, 215);
	t.deepEqual(S, "39%");
	t.deepEqual(L, "51%");
});

test("#rgbToHslTuple() => Generates HSL tuples from RGB colors. #3", t => {
	const [H, S, L] = rgbToHslTuple("rgb(184, 0, 3)");
	t.deepEqual(H, 359);
	t.deepEqual(S, "100%");
	t.deepEqual(L, "36%");
});

test("#rgbToHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbToHsl(null));
});

test("#rgbToHsl() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => rgbToHsl("rgb()"));
});

test("#rgbToHsl() => Generates HSL colors from RGB colors. #1", t => {
	t.deepEqual(rgbToHsl("rgb(24, 102, 20)"), "hsl(117, 67%, 24%)");
});

test("#rgbToHsl() => Generates HSL tuples from RGB colors. #2", t => {
	t.deepEqual(rgbToHsl("rgb(81, 122, 179)"), "hsl(215, 39%, 51%)");
});

test("#rgbToHsl() => Generates HSL tuples from RGB colors. #3", t => {
	t.deepEqual(rgbToHsl("rgb(184, 0, 3)"), "hsl(359, 100%, 36%)");
});

test("#toHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => toHsl(null));
});

test("#toHsl() => Throws an exception if the first argument is not a proper color. #1", t => {
	t.throws(() => toHsl("foobar"));
});

test("#toHsl() => Throws an exception if the first argument is not a proper color. #2", t => {
	t.throws(() => toHsl("#1234"));
});

test("#toHsl() => Throws an exception if the first argument is not a proper color. #3", t => {
	t.throws(() => toHsl("1234"));
});

test("#toHsl() => Throws an exception if the first argument is not a proper color. #4", t => {
	t.throws(() => toHsl("rgb()"));
});

test("#toHsl() => Throws an exception if the first argument is not a proper color. #5", t => {
	t.throws(() => toHsl("hsl(false, rgb, true)"));
});

test("#toHsl() => returns correct HSL colors just as they were.", t => {
	t.deepEqual(toHsl("hsl(50, 60%, 70%)"), "hsl(50, 60%, 70%)");
});

test("#toHsl() => returns HSL with missing '%' symbols with the addition of those..", t => {
	t.deepEqual(toHsl("hsl(50, 60, 70)"), "hsl(50, 60%, 70%)");
});

test("#toHsl() => Converts RGB colors to HSL colors. #1", t => {
	t.deepEqual(toHsl("rgb(30, 104, 29)"), "hsl(119, 56%, 26%)");
});

test("#toHsl() => Converts RGB colors to HSL colors. #2", t => {
	t.deepEqual(toHsl("rgb(65, 58, 95)"), "hsl(251, 24%, 30%)");
});

test("#toHsl() => Converts RGB colors to HSL colors. #3", t => {
	t.deepEqual(toHsl("rgb(201, 243, 205)"), "hsl(126, 64%, 87%)");
});

test("#toHsl() => Converts hex colors to HSL colors. #1", t => {
	t.deepEqual(toHsl("#000000"), "hsl(0, 0%, 0%)");
});

test("#toHsl() => Converts hex colors to HSL colors. #2", t => {
	t.deepEqual(toHsl("#ffffff"), "hsl(0, 0%, 100%)");
});

test("#toHsl() => Converts hex colors to HSL colors. #3", t => {
	t.deepEqual(toHsl("ff4d4d"), "hsl(0, 100%, 65%)");
});

test("#toHsl() => Converts HTML color names to HSL values. #1", t => {
	t.deepEqual(toHsl("antiquewhite"), "hsl(34, 78%, 91%)");
});

test("#toHsl() => Converts HTML color names to HSL values. #2", t => {
	t.deepEqual(toHsl("aquamarine"), "hsl(160, 100%, 75%)");
});

test("#toHsl() => Converts HSV/HSB colors to HSL colors. #1", t => {
	t.deepEqual(toHsl("hsv(162, 68, 13)"), "hsl(161, 50%, 9%)");
});

test("#toHsl() => Converts HSV/HSB colors to HSL colors. #2", t => {
	t.deepEqual(toHsl("hsv(245, 35, 67)"), "hsl(245, 26%, 55%)");
});

test("#toHsl() => Converts HSV/HSB colors to RGB colors. #3", t => {
	t.deepEqual(toHsl("hsb(259, 0, 99)"), "hsl(0, 0%, 99%)");
});

test("#rgbToHsvTuple() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbToHsvTuple(null));
});

test("#rgbToHsvTuple() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => rgbToHsvTuple("rgb()"));
});

test("#rgbToHsvTuple() => Generates HSV/HSB tuples from RGB colors. #1", t => {
	const [H, S, V] = rgbToHsvTuple("rgb(24, 102, 20)");
	t.deepEqual(H, 117);
	t.deepEqual(S, 80);
	t.deepEqual(V, 40);
});

test("#rgbToHsvTuple() => Generates HSV/HSB tuples from RGB colors. #2", t => {
	const [H, S, V] = rgbToHsvTuple("rgb(81, 122, 179)");
	t.deepEqual(H, 215);
	t.deepEqual(S, 55);
	t.deepEqual(V, 70);
});

test("#rgbToHsvTuple() => Generates HSV/HSB tuples from RGB colors. #3", t => {
	const [H, S, V] = rgbToHsvTuple("rgb(184, 0, 3)");
	t.deepEqual(H, 359);
	t.deepEqual(S, 100);
	t.deepEqual(V, 72);
});

test("#rgbToHsv() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => rgbToHsv(null));
});

test("#rgbToHsv() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => rgbToHsv("rgb()"));
});

test("#rgbToHsv() => Generates HSV/HSB colors from RGB colors. #1", t => {
	t.deepEqual(rgbToHsv("rgb(24, 102, 20)"), "hsb(117, 80, 40)");
});

test("#rgbToHsv() => Generates HSV/HSB colors from RGB colors. #2", t => {
	t.deepEqual(rgbToHsv("rgb(81, 122, 179)"), "hsb(215, 55, 70)");
});

test("#rgbToHsv() => Generates HSV/HSB colors from RGB colors. #3", t => {
	t.deepEqual(rgbToHsv("rgb(184, 0, 3)"), "hsb(359, 100, 72)");
});

test("#toHsv() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => toHsv(null));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #1", t => {
	t.throws(() => toHsv("foobar"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #2", t => {
	t.throws(() => toHsv("#1234"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #3", t => {
	t.throws(() => toHsv("1234"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #4", t => {
	t.throws(() => toHsv("rgb()"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #5", t => {
	t.throws(() => toHsv("hsl(false, rgb, true)"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #6", t => {
	t.throws(() => toHsv("hsb()"));
});

test("#toHsv() => Throws an exception if the first argument is not a proper color. #7", t => {
	t.throws(() => toHsv("hsv()"));
});

test("#toHsv() => returns correct HSV/HSB colors just as they were. #1", t => {
	t.deepEqual(toHsv("hsv(50, 60, 70)"), "hsv(50, 60, 70)");
});

test("#toHsv() => returns correct HSV/HSB colors just as they were. #2", t => {
	t.deepEqual(toHsv("hsb(50, 60, 70)"), "hsb(50, 60, 70)");
});

test("#toHsv() => Converts RGB colors to HSV/HSB colors. #1", t => {
	t.deepEqual(toHsv("rgb(30, 104, 29)"), "hsb(119, 72, 41)");
});

test("#toHsv() => Converts RGB colors to HSV/HSB colors. #2", t => {
	t.deepEqual(toHsv("rgb(65, 58, 95)"), "hsb(251, 39, 37)");
});

test("#toHsv() => Converts RGB colors to HSV/HSB colors. #3", t => {
	t.deepEqual(toHsv("rgb(201, 243, 205)"), "hsb(126, 17, 95)");
});

test("#toHsv() => Converts hex colors to HSV/HSB colors. #1", t => {
	t.deepEqual(toHsv("#000000"), "hsb(0, 0, 0)");
});

test("#toHsv() => Converts hex colors to HSV/HSB colors. #2", t => {
	t.deepEqual(toHsv("#ffffff"), "hsb(0, 0, 100)");
});

test("#toHsv() => Converts hex colors to HSV/HSB colors. #3", t => {
	t.deepEqual(toHsv("ff4d4d"), "hsb(0, 70, 100)");
});

test("#toHsv() => Converts HTML color names to HSV/HSB values. #1", t => {
	t.deepEqual(toHsv("antiquewhite"), "hsb(34, 14, 98)");
});

test("#toHsv() => Converts HTML color names to HSV/HSB values. #2", t => {
	t.deepEqual(toHsv("aquamarine"), "hsb(160, 50, 100)");
});

test("#toHsv() => Converts HSL colors to HSV/HSB colors. #1", t => {
	t.deepEqual(toHsv("hsl(96, 41%, 78%)"), "hsb(97, 21, 87)");
});

test("#toHsv() => Converts HSL colors to HSV/HSB colors. #2", t => {
	t.deepEqual(toHsv("hsl(29, 87%, 50%)"), "hsb(29, 93, 93)");
});

test("#toHsv() => Converts HSL colors to HSV/HSB colors. #3", t => {
	t.deepEqual(toHsv("hsl(0, 87%, 0%)"), "hsb(0, 0, 0)");
});

test("#randomHexColor() => always returns random valid hex colors", t => {
	// 5000 times should be more than enough!
	const limit = 5000;
	for (let i = 0; i < limit; i++) {
		const hex = randomHexColor();
		if (!/^#[0-9A-F]{6}$/i.test(hex)) t.fail(`invalid hex color generated: ${hex}`);
	}
	t.pass();
});

test("#randomRgbColor() => always returns random valid RGB colors", t => {
	// 5000 times should be more than enough!
	const limit = 5000;
	for (let i = 0; i < limit; i++) {
		const rgb = randomRgbColor();
		if (!/^rgb\(\s*.+\s*,\s*.+\s*,\s*.+\s*\)$/.test(rgb)) t.fail(`invalid RGB color generated: ${rgb}`);
	}
	t.pass();
});

test("#randomHslColor() => always returns random valid HSL colors", t => {
	// 5000 times should be more than enough!
	const limit = 5000;
	for (let i = 0; i < limit; i++) {
		const hsl = randomHslColor();
		if (!/^hsl\(\s*.+\s*,\s*.+%\s*,\s*.+%\s*\)$/.test(hsl)) t.fail(`invalid HSL color generated: ${hsl}`);
	}
	t.pass();
});

test("#randomHsvColor() => always returns random valid HSV/HSB colors", t => {
	// 5000 times should be more than enough!
	const limit = 5000;
	for (let i = 0; i < limit; i++) {
		const hsv = randomHsvColor();
		if (!/^hsb\(\s*.+\s*,\s*.+\s*,\s*.+\s*\)$/.test(hsv)) t.fail(`invalid HSV/HSB color generated: ${hsv}`);
	}
	t.pass();
});

test("#saturateHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateHsl(null));
});

test("#saturateHsl() => Throws an exception if the first argument is not a proper HSL color.", t => {
	t.throws(() => saturateHsl("hsl()"));
});

test("#saturateHsl() => Returns a saturated version of the given HSL color. #1", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)"), "hsl(50, 55%, 80%)");
});

test("#saturateHsl() => Returns a saturated version of the given HSL color. #2", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", 10), "hsl(50, 55%, 80%)");
});

test("#saturateHsl() => Returns a saturated version of the given HSL color. #3", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", 100), "hsl(50, 100%, 80%)");
});

test("#saturateHsl() => Returns a less saturated version of the given HSL color for negative values. #1", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", -10), "hsl(50, 45%, 80%)");
});

test("#saturateHsl() => Returns a less saturated version of the given HSL color for negative values. #2", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", -95), "hsl(50, 2.5%, 80%)");
});

test("#saturateHsl() => Never goes beyond 100%", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", 100000), "hsl(50, 100%, 80%)");
});

test("#saturateHsl() => Never goes below 0%", t => {
	t.deepEqual(saturateHsl("hsl(50, 50, 80)", -100000), "hsl(50, 0%, 80%)");
});

test("#saturateHsla() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateHsla(null));
});

test("#saturateHsla() => Throws an exception if the first argument is not a proper HSLa color.", t => {
	t.throws(() => saturateHsla("hsla()"));
});

test("#saturateHsla() => Returns a saturated version of the given HSLa color. #1", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 1)"), "hsla(50, 55%, 80%, 1)");
});

test("#saturateHsla() => Returns a saturated version of the given HSLa color. #2", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 55%, 80%, 0.5)");
});

test("#saturateHsla() => Returns a saturated version of the given HSLa color. #3", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 0)", 100), "hsla(50, 100%, 80%, 0)");
});

test("#saturateHsla() => Returns a less saturated version of the given HSLa color for negative values. #1", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 1)", -10), "hsla(50, 45%, 80%, 1)");
});

test("#saturateHsla() => Returns a less saturated version of the given HSLa color for negative values. #2", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 2.5%, 80%, 0.6)");
});

test("#saturateHsla() => Never goes beyond 100%", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 1)", 100000), "hsla(50, 100%, 80%, 1)");
});

test("#saturateHsla() => Never goes below 0%", t => {
	t.deepEqual(saturateHsla("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 0%, 80%, 0.2)");
});

test("#saturateRgb() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateRgb(null));
});

test("#saturateRgb() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => saturateRgb("rgb()"));
});

test("#saturateRgb() => Returns a saturated version of the given RGB color. #1", t => {
	t.deepEqual(saturateRgb("rgb(23, 30, 129)"), "rgb(18, 25, 135)");
});

test("#saturateRgb() => Returns a saturated version of the given RGB color. #2", t => {
	t.deepEqual(saturateRgb("rgb(77, 147, 210)", 10), "rgb(69, 148, 217)");
});

test("#saturateRgb() => Returns a less saturated version of the given RGB color for negative values. #1", t => {
	t.deepEqual(saturateRgb("rgb(77, 147, 210)", -10), "rgb(82, 147, 203)");
});

test("#saturateRgb() => Returns a less saturated version of the given RGB color for negative values. #2", t => {
	t.deepEqual(saturateRgb("rgb(23, 30, 129)", -90), "rgb(71, 72, 82)");
});

test("#saturateRgba() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateRgba(null));
});

test("#saturateRgba() => Throws an exception if the first argument is not a proper RGBa color.", t => {
	t.throws(() => saturateRgba("rgba()"));
});

test("#saturateRgba() => Returns a saturated version of the given RGBa color. #1", t => {
	t.deepEqual(saturateRgba("rgba(23, 30, 129, 1)"), "rgba(18, 25, 135, 1)");
});

test("#saturateRgba() => Returns a saturated version of the given RGBa color. #2", t => {
	t.deepEqual(saturateRgba("rgba(77, 147, 210, 0.5)", 10), "rgba(69, 148, 217, 0.5)");
});

test("#saturateRgba() => Returns a less saturated version of the given RGBa color for negative values. #1", t => {
	t.deepEqual(saturateRgba("rgba(77, 147, 210, 0)", -10), "rgba(82, 147, 203, 0)");
});

test("#saturateRgba() => Returns a less saturated version of the given RGBa color for negative values. #2", t => {
	t.deepEqual(saturateRgba("rgba(23, 30, 129, 0.2)", -90), "rgba(71, 72, 82, 0.2)");
});

test("#saturateHex() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateHex(null));
});

test("#saturateHex() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => saturateHex("foobar"));
});

test("#saturateHex() => Returns a saturated version of the given hex color. #1", t => {
	t.deepEqual(saturateHex("#a3a3b3"), "#a2a2b4");
});

test("#saturateHex() => Returns a saturated version of the given hex color. #2", t => {
	t.deepEqual(saturateHex("#ddace3"), "#dfa8e6");
});

test("#saturateHex() => Returns a less saturated version of the given hex color for negative values. #1", t => {
	t.deepEqual(saturateHex("#a3a3b3", -10), "#a3a3b2");
});

test("#saturateHex() => Returns a less saturated version of the given hex color for negative values. #2", t => {
	t.deepEqual(saturateHex("#ddace3", -90), "#c9c4ca");
});

test("#saturateHsv() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => saturateHsv(null));
});

test("#saturateHsv() => Throws an exception if the first argument is not a proper HSV/HSB color.", t => {
	t.throws(() => saturateHsv("hsb()"));
});

test("#saturateHsv() => Returns a saturated version of the given HSV/HSB color. #1", t => {
	t.deepEqual(saturateHsv("hsb(290, 10, 79)"), "hsb(290, 11, 79)");
});

test("#saturateHsv() => Returns a saturated version of the given HSV/HSB color. #2", t => {
	t.deepEqual(saturateHsv("hsb(290, 10, 79)", 10), "hsb(290, 11, 79)");
});

test("#saturateHsv() => Returns a saturated version of the given HSV/HSB color. #3", t => {
	t.deepEqual(saturateHsv("hsb(290, 10, 79)", 90), "hsb(290, 19, 79)");
});

test("#saturateHsv() => Returns a less saturated version of the given HSV/HSB color for negative values. #1", t => {
	t.deepEqual(saturateHsv("hsb(120, 40, 80)", -10), "hsb(120, 36, 80)");
});

test("#saturateHsv() => Returns a less saturated version of the given HSV/HSB color for negative values. #2", t => {
	t.deepEqual(saturateHsv("hsb(120, 40, 80)", -90), "hsb(120, 4, 80)");
});

test("#saturate() => Returns a saturated version of a given RGB color. #1", t => {
	t.deepEqual(saturate("rgb(23, 30, 129)"), "rgb(18, 25, 135)");
});

test("#saturate() => Returns a saturated version of a given RGB color. #2", t => {
	t.deepEqual(saturate("rgb(77, 147, 210)", 10), "rgb(69, 148, 217)");
});

test("#saturate() => Returns a less saturated version of a given RGB color for negative values. #1", t => {
	t.deepEqual(saturate("rgb(77, 147, 210)", -10), "rgb(82, 147, 203)");
});

test("#saturate() => Returns a less saturated version of a given RGB color for negative values. #2", t => {
	t.deepEqual(saturate("rgb(23, 30, 129)", -90), "rgb(71, 72, 82)");
});

test("#saturate() => Returns a saturated version of a given HSL color. #1", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)"), "hsl(50, 55%, 80%)");
});

test("#saturate() => Returns a saturated version of a given HSL color. #2", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", 10), "hsl(50, 55%, 80%)");
});

test("#saturate() => Returns a saturated version of a given HSL color. #3", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", 100), "hsl(50, 100%, 80%)");
});

test("#saturate() => Returns a less saturated version of a given HSL color for negative values. #1", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", -10), "hsl(50, 45%, 80%)");
});

test("#saturate() => Returns a less saturated version of a given HSL color for negative values. #2", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", -95), "hsl(50, 2.5%, 80%)");
});

test("#saturate() => Never goes beyond 100% for HSL colors", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", 100000), "hsl(50, 100%, 80%)");
});

test("#saturate() => Never goes below 0% for HSL colors", t => {
	t.deepEqual(saturate("hsl(50, 50, 80)", -100000), "hsl(50, 0%, 80%)");
});

test("#saturate() => Returns a saturated version of a given HSV/HSB color. #1", t => {
	t.deepEqual(saturate("hsb(290, 10, 79)"), "hsb(290, 11, 79)");
});

test("#saturate() => Returns a saturated version of a given HSV/HSB color. #2", t => {
	t.deepEqual(saturate("hsb(290, 10, 79)", 10), "hsb(290, 11, 79)");
});

test("#saturate() => Returns a saturated version of a given HSV/HSB color. #3", t => {
	t.deepEqual(saturate("hsb(290, 10, 79)", 90), "hsb(290, 19, 79)");
});

test("#saturate() => Returns a less saturated version of a given HSV/HSB color for negative values. #1", t => {
	t.deepEqual(saturate("hsb(120, 40, 80)", -10), "hsb(120, 36, 80)");
});

test("#saturate() => Returns a less saturated version of a given HSV/HSB color for negative values. #2", t => {
	t.deepEqual(saturate("hsb(120, 40, 80)", -90), "hsb(120, 4, 80)");
});

test("#saturate() => Returns a saturated version of a given RGBa color. #1", t => {
	t.deepEqual(saturate("rgba(23, 30, 129, 1)"), "rgba(18, 25, 135, 1)");
});

test("#saturate() => Returns a saturated version of a given RGBa color. #2", t => {
	t.deepEqual(saturate("rgba(77, 147, 210, 0.5)", 10), "rgba(69, 148, 217, 0.5)");
});

test("#saturate() => Returns a less saturated version of a given RGBa color for negative values. #1", t => {
	t.deepEqual(saturate("rgba(77, 147, 210, 0)", -10), "rgba(82, 147, 203, 0)");
});

test("#saturate() => Returns a less saturated version of a given RGBa color for negative values. #2", t => {
	t.deepEqual(saturate("rgba(23, 30, 129, 0.2)", -90), "rgba(71, 72, 82, 0.2)");
});

test("#saturate() => Returns a saturated version of a given HSLa color. #1", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 1)"), "hsla(50, 55%, 80%, 1)");
});

test("#saturate() => Returns a saturated version of a given HSLa color. #2", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 55%, 80%, 0.5)");
});

test("#saturate() => Returns a saturated version of a given HSLa color. #3", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 0)", 100), "hsla(50, 100%, 80%, 0)");
});

test("#saturate() => Returns a less saturated version of a given HSLa color for negative values. #1", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 1)", -10), "hsla(50, 45%, 80%, 1)");
});

test("#saturate() => Returns a less saturated version of a given HSLa color for negative values. #2", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 2.5%, 80%, 0.6)");
});

test("#saturate() => Never goes beyond 100% for HSLa colors", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 1)", 100000), "hsla(50, 100%, 80%, 1)");
});

test("#saturate() => Never goes below 0% for HSLa colors", t => {
	t.deepEqual(saturate("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 0%, 80%, 0.2)");
});

test("#saturate() => Returns a saturated version of a given hex color. #1", t => {
	t.deepEqual(saturate("#a3a3b3"), "#a2a2b4");
});

test("#saturate() => Returns a saturated version of a given hex color. #2", t => {
	t.deepEqual(saturate("#ddace3"), "#dfa8e6");
});

test("#saturate() => Returns a less saturated version of a given hex color for negative values. #1", t => {
	t.deepEqual(saturate("#a3a3b3", -10), "#a3a3b2");
});

test("#saturate() => Returns a less saturated version of a given hex color for negative values. #2", t => {
	t.deepEqual(saturate("#ddace3", -90), "#c9c4ca");
});

test("#lightenHsl() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenHsl(null));
});

test("#lightenHsl() => Throws an exception if the first argument is not a proper HSL color.", t => {
	t.throws(() => lightenHsl("hsl()"));
});

test("#lightenHsl() => Returns a lightened version of the given HSL color. #1", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)"), "hsl(50, 50%, 88%)");
});

test("#lightenHsl() => Returns a lightened version of the given HSL color. #2", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)", 10), "hsl(50, 50%, 88%)");
});

test("#lightenHsl() => Returns a lightened version of the given HSL color. #3", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 10)", 100), "hsl(50, 50%, 20%)");
});

test("#lightenHsl() => Returns a less lightened version of the given HSL color for negative values. #1", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)", -10), "hsl(50, 50%, 72%)");
});

test("#lightenHsl() => Returns a less lightened version of the given HSL color for negative values. #2", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)", -95), "hsl(50, 50%, 4%)");
});

test("#lightenHsl() => Never goes beyond 100%", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)", 100000), "hsl(50, 50%, 100%)");
});

test("#lightenHsl() => Never goes below 0%", t => {
	t.deepEqual(lightenHsl("hsl(50, 50, 80)", -100000), "hsl(50, 50%, 0%)");
});

test("#lightenHsla() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenHsla(null));
});

test("#lightenHsla() => Throws an exception if the first argument is not a proper HSLa color.", t => {
	t.throws(() => lightenHsla("hsla()"));
});

test("#lightenHsla() => Returns a lightened version of the given HSLa color. #1", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 1)"), "hsla(50, 50%, 88%, 1)");
});

test("#lightenHsla() => Returns a lightened version of the given HSLa color. #2", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 50%, 88%, 0.5)");
});

test("#lightenHsla() => Returns a lightened version of the given HSLa color. #3", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 10, 0)", 100), "hsla(50, 50%, 20%, 0)");
});

test("#lightenHsla() => Returns a less lightened version of the given HSLa color for negative values. #1", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 1)", -10), "hsla(50, 50%, 72%, 1)");
});

test("#lightenHsla() => Returns a less lightened version of the given HSLa color for negative values. #2", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 50%, 4%, 0.6)");
});

test("#lightenHsla() => Never goes beyond 100%", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 1)", 100000), "hsla(50, 50%, 100%, 1)");
});

test("#lightenHsla() => Never goes below 0%", t => {
	t.deepEqual(lightenHsla("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 50%, 0%, 0.2)");
});

test("#lightenRgb() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenRgb(null));
});

test("#lightenRgb() => Throws an exception if the first argument is not a proper RGB color.", t => {
	t.throws(() => lightenRgb("rgb()"));
});

test("#lightenRgb() => Returns a lightened version of the given RGB color. #1", t => {
	t.deepEqual(lightenRgb("rgb(23, 30, 129)"), "rgb(25, 33, 143)");
});

test("#lightenRgb() => Returns a lightened version of the given RGB color. #2", t => {
	t.deepEqual(lightenRgb("rgb(231, 175, 212)", 10), "rgb(241, 208, 230)");
});

test("#lightenRgb() => Returns a less lightened version of the given RGB color for negative values. #1", t => {
	t.deepEqual(lightenRgb("rgb(231, 175, 212)", -10), "rgb(222, 145, 196)");
});

test("#lightenRgb() => Returns a less lightened version of the given RGB color for negative values. #2", t => {
	t.deepEqual(lightenRgb("rgb(23, 30, 129)", -90), "rgb(2, 3, 13)");
});

test("#lightenRgba() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenRgba(null));
});

test("#lightenRgba() => Throws an exception if the first argument is not a proper RGBa color.", t => {
	t.throws(() => lightenRgba("rgba()"));
});

test("#lightenRgba() => Returns a lightened version of the given RGBa color. #1", t => {
	t.deepEqual(lightenRgba("rgba(23, 30, 129, 1)"), "rgba(25, 33, 143, 1)");
});

test("#lightenRgba() => Returns a lightened version of the given RGBa color. #2", t => {
	t.deepEqual(lightenRgba("rgba(231, 175, 212, 0.5)", 10), "rgba(241, 208, 230, 0.5)");
});

test("#lightenRgba() => Returns a less lightened version of the given RGBa color for negative values. #1", t => {
	t.deepEqual(lightenRgba("rgba(231, 175, 212, 0)", -10), "rgba(222, 145, 196, 0)");
});

test("#lightenRgba() => Returns a less lightened version of the given RGBa color for negative values. #2", t => {
	t.deepEqual(lightenRgba("rgba(23, 30, 129, 0.2)", -90), "rgba(2, 3, 13, 0.2)");
});

test("#lightenHex() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenHex(null));
});

test("#lightenHex() => Throws an exception if the first argument is not a proper hex color.", t => {
	t.throws(() => lightenHex("foobar"));
});

test("#lightenHex() => Returns a lightened version of the given hex color. #1", t => {
	t.deepEqual(lightenHex("#af0"), "#b2ff1a");
});

test("#lightenHex() => Returns a lightened version of the given hex color. #2", t => {
	t.deepEqual(lightenHex("#ddaced"), "#eacdf4");
});

test("#lightenHex() => Returns a less lightened version of the given hex color for negative values. #1", t => {
	t.deepEqual(lightenHex("#af0", -10), "#99e600");
});

test("#lightenHex() => Returns a less lightened version of the given hex color for negative values. #2", t => {
	t.deepEqual(lightenHex("#ddaced", -90), "#1b0721");
});

test("#lightenHsv() => Throws an exception if the first argument is not of type 'string'", t => {
	// @ts-ignore
	t.throws(() => lightenHsv(null));
});

test("#lightenHsv() => Throws an exception if the first argument is not a proper HSV/HSB color.", t => {
	t.throws(() => lightenHsv("hsb()"));
});

test("#lightenHsv() => Returns a lightened version of the given HSV/HSB color. #1", t => {
	t.deepEqual(lightenHsv("hsb(290, 10, 84)"), "hsb(291, 6, 91)");
});

test("#lightenHsv() => Returns a lightened version of the given HSV/HSB color. #2", t => {
	t.deepEqual(lightenHsv("hsb(359, 12, 53)", 10), "hsb(0, 10, 58)");
});

test("#lightenHsv() => Returns a lightened version of the given HSV/HSB color. #3", t => {
	t.deepEqual(lightenHsv("hsb(290, 10, 32)", 90), "hsb(286, 9, 60)");
});

test("#lightenHsv() => Returns a less lightened version of the given HSV/HSB color for negative values. #1", t => {
	t.deepEqual(lightenHsv("hsb(290, 10, 84)", -10), "hsb(292, 15, 78)");
});

test("#lightenHsv() => Returns a less lightened version of the given HSV/HSB color for negative values. #2", t => {
	t.deepEqual(lightenHsv("hsb(359, 12, 53)", -90), "hsb(0, 14, 5)");
});

test("#lighten() => Returns a lightened version of a given RGBa color. #1", t => {
	t.deepEqual(lighten("rgba(23, 30, 129, 1)"), "rgba(25, 33, 143, 1)");
});

test("#lighten() => Returns a lightened version of a given RGBa color. #2", t => {
	t.deepEqual(lighten("rgba(231, 175, 212, 0.5)", 10), "rgba(241, 208, 230, 0.5)");
});

test("#lighten() => Returns a less lightened version of a given RGBa color for negative values. #1", t => {
	t.deepEqual(lighten("rgba(231, 175, 212, 0)", -10), "rgba(222, 145, 196, 0)");
});

test("#lighten() => Returns a less lightened version of a given RGBa color for negative values. #2", t => {
	t.deepEqual(lighten("rgba(23, 30, 129, 0.2)", -90), "rgba(2, 3, 13, 0.2)");
});

test("#lighten() => Returns a lightened version of a given HSLa color. #1", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 1)"), "hsla(50, 50%, 88%, 1)");
});

test("#lighten() => Returns a lightened version of a given HSLa color. #2", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 50%, 88%, 0.5)");
});

test("#lighten() => Returns a lightened version of a given HSLa color. #3", t => {
	t.deepEqual(lighten("hsla(50, 50, 10, 0)", 100), "hsla(50, 50%, 20%, 0)");
});

test("#lighten() => Returns a less lightened version of a given HSLa color for negative values. #1", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 1)", -10), "hsla(50, 50%, 72%, 1)");
});

test("#lighten() => Returns a less lightened version of a given HSLa color for negative values. #2", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 50%, 4%, 0.6)");
});

test("#lighten() => Never goes beyond 100% for HSLa values", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 1)", 100000), "hsla(50, 50%, 100%, 1)");
});

test("#lighten() => Never goes below 0% for HSLa values", t => {
	t.deepEqual(lighten("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 50%, 0%, 0.2)");
});

test("#lighten() => Returns a lightened version of a given RGB color. #1", t => {
	t.deepEqual(lighten("rgb(23, 30, 129)"), "rgb(25, 33, 143)");
});

test("#lighten() => Returns a lightened version of a given RGB color. #2", t => {
	t.deepEqual(lighten("rgb(231, 175, 212)", 10), "rgb(241, 208, 230)");
});

test("#lighten() => Returns a less lightened version of a given RGB color for negative values. #1", t => {
	t.deepEqual(lighten("rgb(231, 175, 212)", -10), "rgb(222, 145, 196)");
});

test("#lighten() => Returns a less lightened version of a given RGB color for negative values. #2", t => {
	t.deepEqual(lighten("rgb(23, 30, 129)", -90), "rgb(2, 3, 13)");
});

test("#lighten() => Returns a lightened version of a given HSL color. #1", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)"), "hsl(50, 50%, 88%)");
});

test("#lighten() => Returns a lightened version of a given HSL color. #2", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)", 10), "hsl(50, 50%, 88%)");
});

test("#lighten() => Returns a lightened version of a given HSL color. #3", t => {
	t.deepEqual(lighten("hsl(50, 50, 10)", 100), "hsl(50, 50%, 20%)");
});

test("#lighten() => Returns a less lightened version of a given HSL color for negative values. #1", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)", -10), "hsl(50, 50%, 72%)");
});

test("#lighten() => Returns a less lightened version of a given HSL color for negative values. #2", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)", -95), "hsl(50, 50%, 4%)");
});

test("#lighten() => Never goes beyond 100% for HSL values", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)", 100000), "hsl(50, 50%, 100%)");
});

test("#lighten() => Never goes below 0% for HSL values", t => {
	t.deepEqual(lighten("hsl(50, 50, 80)", -100000), "hsl(50, 50%, 0%)");
});

test("#lighten() => Returns a lightened version of a given HSV/HSB color. #1", t => {
	t.deepEqual(lighten("hsb(290, 10, 84)"), "hsb(291, 6, 91)");
});

test("#lighten() => Returns a lightened version of a given HSV/HSB color. #2", t => {
	t.deepEqual(lighten("hsb(359, 12, 53)", 10), "hsb(0, 10, 58)");
});

test("#lighten() => Returns a lightened version of a given HSV/HSB color. #3", t => {
	t.deepEqual(lighten("hsb(290, 10, 32)", 90), "hsb(286, 9, 60)");
});

test("#lighten() => Returns a less lightened version of a given HSV/HSB color for negative values. #1", t => {
	t.deepEqual(lighten("hsb(290, 10, 84)", -10), "hsb(292, 15, 78)");
});

test("#lighten() => Returns a less lightened version of a given HSV/HSB color for negative values. #2", t => {
	t.deepEqual(lighten("hsb(359, 12, 53)", -90), "hsb(0, 14, 5)");
});

test("#lighten() => Returns a lightened version of a given hex color. #1", t => {
	t.deepEqual(lighten("#af0"), "#b2ff1a");
});

test("#lighten() => Returns a lightened version of a given hex color. #2", t => {
	t.deepEqual(lighten("#ddaced"), "#eacdf4");
});

test("#lighten() => Returns a less lightened version of a given hex color for negative values. #1", t => {
	t.deepEqual(lighten("#af0", -10), "#99e600");
});

test("#lighten() => Returns a less lightened version of a given hex color for negative values. #2", t => {
	t.deepEqual(lighten("#ddaced", -90), "#1b0721");
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #1", t => {
	t.true(isLight("#4286f4"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #2", t => {
	t.true(isLight("#165ac9"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #3", t => {
	t.false(isLight("#0c3e8e"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #4", t => {
	t.true(isLight("rgb(159, 188, 234)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #5", t => {
	t.true(isLight("rgb(124, 134, 150)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #6", t => {
	t.false(isLight("rgb(85, 92, 104)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #7", t => {
	t.true(isLight("hsl(0, 0%, 100%)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #8", t => {
	t.true(isLight("hsl(300, 100%, 50%)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #9", t => {
	t.false(isLight("hsl(40, 100%, 30%)"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #10", t => {
	t.true(isLight("darkseagreen"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #11", t => {
	t.true(isLight("floralwhite"));
});

test("#isLight() => correctly determines bright from dark colors, no matter the input. #12", t => {
	t.false(isLight("darkslateblue"));
});
