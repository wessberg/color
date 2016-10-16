import {
	hslToHsla,
	hslStringToHslTuple,
	hslaStringToHslaTuple,
	hslToRgbTuple,
	hslToRgb,
	hslaToRgbaTuple,
	hslaToRgba,
	hslaToHsl,
	rgbStringToRgbTuple,
	rgbaStringToRgbaTuple,
	rgbToHex,
	rgbaToHex,
	hsvStringToHsvTuple,
	hsvToRgbTuple,
	hsvToRgb,
	toHex,
	hexToRgbTuple,
	hexToRgb,
	toRgb,
	hexToHslTuple,
	hexToHslaTuple,
	hexToHsla,
	hexToHsl,
	rgbToHslTuple,
	rgbToHsl,
	toHsl,
	rgbToHsvTuple,
	rgbToHsv,
	toHsv,
	randomHexColor,
	randomRgbColor,
	randomHslColor,
	randomHsvColor,
	saturateHsl,
	saturateHsla,
	saturateHsv,
	saturateRgb,
	saturateRgba,
	saturateHex,
	saturate,
	lightenHsl,
	lightenHsla,
	lightenHsv,
	lightenRgb,
	lightenRgba,
	lightenHex,
	lighten,
	isLight
} from "../colorutilities";

describe("Colorutilities", function () {

	context("#hslStringToHslTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslStringToHslTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'hue' property of the 'hsl' color isn't valid.", function () {

			try {
				hslStringToHslTuple("hsl(false, 50%, 100%)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'saturation' property of the 'hsl' color isn't valid.", function () {

			try {
				hslStringToHslTuple("hsl(30, false, 100%)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'lightness' property of the 'hsl' color isn't valid.", function () {

			try {
				hslStringToHslTuple("hsl(30, 50%, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts string represented hsl colors to tuple represented hsl colors. #1", function () {
			const [H, S, L] = hslStringToHslTuple("hsl(50, 60%, 100%)");

			assert.equal(H, 50);
			assert.equal(S, "60%");
			assert.equal(L, "100%");
		});

		it("Converts string represented hsl colors to tuple represented hsl colors. #2", function () {
			const [H, S, L] = hslStringToHslTuple("hsl(50, 60, 100)");

			assert.equal(H, 50);
			assert.equal(S, "60%");
			assert.equal(L, "100%");
		});

	});

	context("#hslaStringToHslaTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslaStringToHslaTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'hue' property of the 'hsla' color isn't valid.", function () {

			try {
				hslaStringToHslaTuple("hsla(false, 50%, 100%, 1)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'saturation' property of the 'hsla' color isn't valid.", function () {

			try {
				hslaStringToHslaTuple("hsla(30, false, 100%, 1)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'lightness' property of the 'hsla' color isn't valid.", function () {

			try {
				hslaStringToHslaTuple("hsla(30, 50%, false, 1)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the 'alpha' property of the 'hsla' color isn't valid.", function () {

			try {
				hslaStringToHslaTuple("hsla(30, 50%, 100%, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts string represented hsla colors to tuple represented hsla colors. #1", function () {
			const [H, S, L, A] = hslaStringToHslaTuple("hsl(50, 60%, 100%, 0.5)");

			assert.equal(H, 50);
			assert.equal(S, "60%");
			assert.equal(L, "100%");
			assert.equal(A, 0.5);
		});

		it("Converts string represented hsla colors to tuple represented hsla colors. #2", function () {
			const [H, S, L, A] = hslaStringToHslaTuple("hsl(50, 60, 100, 0.9)");

			assert.equal(H, 50);
			assert.equal(S, "60%");
			assert.equal(L, "100%");
			assert.equal(A, 0.9);
		});

	});

	context("#hslToHsla()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslToHsla(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSL color", function () {

			try {
				hslToHsla("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the second argument is not of type 'number'", function () {

			try {
				hslToHsla("hsl(50, 100%, 50%)", null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts hsl colors to hsla colors. #1", function () {
			assert.equal(hslToHsla("hsl(50, 100%, 100%)"), "hsla(50, 100%, 100%, 1)");
		});

		it("Converts hsl colors to hsla colors. #2", function () {
			assert.equal(hslToHsla("hsl(50, 100%, 100%)", 0.5), "hsla(50, 100%, 100%, 0.5)");
		});

		it("Automatically adds missing '%' symbols for saturation and lightness.", function () {
			assert.equal(hslToHsla("hsl(50, 100, 100)"), "hsla(50, 100%, 100%, 1)");
		});

	});

	context("#hslToRgbTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslToRgbTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSL color", function () {

			try {
				hslToRgbTuple("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts hsl colors to rgb colors. #1", function () {
			const [R, G, B] = hslToRgbTuple("hsl(50, 100%, 100%)");
			assert.equal(R, 255);
			assert.equal(G, 255);
			assert.equal(B, 255);
		});

		it("Converts hsl colors to rgb colors. #2", function () {
			const [R, G, B] = hslToRgbTuple("hsl(50, 84%, 44%)");
			assert.equal(R, 206);
			assert.equal(G, 175);
			assert.equal(B, 18);
		});

		it("Converts hsl colors to rgb colors. #3", function () {
			const [R, G, B] = hslToRgbTuple("hsl(194, 63%, 8%)");
			assert.equal(R, 8);
			assert.equal(G, 27);
			assert.equal(B, 33);
		});

		it("Works, even if '%' symbols are omitted from the saturation and lightness properties.", function () {
			const [R, G, B] = hslToRgbTuple("hsl(194, 63, 8)");
			assert.equal(R, 8);
			assert.equal(G, 27);
			assert.equal(B, 33);
		});

	});

	context("#hslToRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslToRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSL color", function () {

			try {
				hslToRgb("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts hsl colors to rgb colors. #1", function () {
			assert.equal(hslToRgb("hsl(50, 100%, 100%)"), "rgb(255, 255, 255)");
		});

		it("Converts hsl colors to rgb colors. #2", function () {
			assert.equal(hslToRgb("hsl(50, 84%, 44%)"), "rgb(206, 175, 18)");
		});

		it("Converts hsl colors to rgb colors. #3", function () {
			assert.equal(hslToRgb("hsl(194, 63%, 8%)"), "rgb(8, 27, 33)");
		});

		it("Works, even if '%' symbols are omitted from the saturation and lightness properties.", function () {
			assert.equal(hslToRgb("hsl(194, 63, 8)"), "rgb(8, 27, 33)");
		});

	});

	context("#hslaToRgbaTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslaToRgbaTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSLa color", function () {

			try {
				hslaToRgbaTuple("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts HSLa colors to RGBa colors. #1", function () {
			const [R, G, B, A] = hslaToRgbaTuple("hsla(118, 100%, 52%, 0.56)");
			assert.equal(R, 18);
			assert.equal(G, 255);
			assert.equal(B, 10);
			assert.equal(A, 0.56);
		});

		it("Converts HSLa colors to RGBa colors. #2", function () {
			const [R, G, B, A] = hslaToRgbaTuple("hsla(36, 31%, 69%, 0.84)");
			assert.equal(R, 200);
			assert.equal(G, 181);
			assert.equal(B, 151);
			assert.equal(A, 0.84);
		});

		it("Converts HSLa colors to RGBa colors. #3", function () {
			const [R, G, B, A] = hslaToRgbaTuple("hsla(360, 100%, 100%, 0.00)");
			assert.equal(R, 255);
			assert.equal(G, 255);
			assert.equal(B, 255);
			assert.equal(A, 0);
		});

		it("Works, even if '%' symbols are omitted from the saturation and lightness properties.", function () {
			const [R, G, B, A] = hslaToRgbaTuple("hsla(36, 31, 69, 0.84)");
			assert.equal(R, 200);
			assert.equal(G, 181);
			assert.equal(B, 151);
			assert.equal(A, 0.84);
		});

	});

	context("#hslaToRgba()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslaToRgba(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSLa color", function () {

			try {
				hslaToRgba("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});


		it("Converts HSLa colors to RGBa colors. #1", function () {
			assert.equal(hslaToRgba("hsla(118, 100%, 52%, 0.56)"), "rgba(18, 255, 10, 0.56)");
		});

		it("Converts HSLa colors to RGBa colors. #2", function () {
			assert.equal(hslaToRgba("hsla(36, 31%, 69%, 0.84)"), "rgba(200, 181, 151, 0.84)");
		});

		it("Converts HSLa colors to RGBa colors. #3", function () {
			assert.equal(hslaToRgba("hsla(360, 100%, 100%, 0.00)"), "rgba(255, 255, 255, 0)");
		});

		it("Works, even if '%' symbols are omitted from the saturation and lightness properties.", function () {
			assert.equal(hslaToRgba("hsla(36, 31, 69, 0.84)"), "rgba(200, 181, 151, 0.84)");
		});

	});

	context("#hslaToHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hslaToHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSLa color", function () {

			try {
				hslaToHsl("hsl(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts HSLa colors to hsl colors. #1", function () {
			assert.equal(hslaToHsl("hsla(118, 100%, 52%, 0.56)"), "hsl(118, 100%, 52%)");
		});

		it("Converts HSLa colors to RGBa colors. #2", function () {
			assert.equal(hslaToHsl("hsla(36, 31%, 69%, 0.84)"), "hsl(36, 31%, 69%)");
		});

		it("Converts HSLa colors to RGBa colors. #3", function () {
			assert.equal(hslaToHsl("hsla(360, 100%, 100%, 0.00)"), "hsl(360, 100%, 100%)");
		});

		it("Works, even if '%' symbols are omitted from the saturation and lightness properties.", function () {
			assert.equal(hslaToHsl("hsla(36, 31, 69, 0.84)"), "hsl(36, 31%, 69%)");
		});

	});

	context("#rgbStringToRgbTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbStringToRgbTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper rgb color", function () {

			try {
				rgbStringToRgbTuple("rgb(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts string representations of RGB colors to tuple representations. #1", function () {
			const [R, G, B] = rgbStringToRgbTuple("rgb(50, 100, 200)");
			assert.equal(R, 50);
			assert.equal(G, 100);
			assert.equal(B, 200);
		});

		it("Converts string representations of RGB colors to tuple representations. #2", function () {
			const [R, G, B] = rgbStringToRgbTuple("rgb(20, 85, 255)");
			assert.equal(R, 20);
			assert.equal(G, 85);
			assert.equal(B, 255);
		});

		it("Converts string representations of RGB colors to tuple representations. #3", function () {
			const [R, G, B] = rgbStringToRgbTuple("rgb(0, 0, 80)");
			assert.equal(R, 0);
			assert.equal(G, 0);
			assert.equal(B, 80);
		});

	});

	context("#rgbaStringToRgbaTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbaStringToRgbaTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Throws an exception if the first argument is not a proper RGBa color", function () {

			try {
				rgbaStringToRgbaTuple("rgba(true, false, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Converts string representations of RGBa colors to tuple representations. #1", function () {
			const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(50, 100, 200, 0.9)");
			assert.equal(R, 50);
			assert.equal(G, 100);
			assert.equal(B, 200);
			assert.equal(A, 0.9);
		});

		it("Converts string representations of RGBa colors to tuple representations. #2", function () {
			const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(140, 10, 89, 0.2)");
			assert.equal(R, 140);
			assert.equal(G, 10);
			assert.equal(B, 89);
			assert.equal(A, 0.2);
		});

		it("Converts string representations of RGBa colors to tuple representations. #3", function () {
			const [R, G, B, A] = rgbaStringToRgbaTuple("rgba(0, 0, 0, 0)");
			assert.equal(R, 0);
			assert.equal(G, 0);
			assert.equal(B, 0);
			assert.equal(A, 0);
		});

	});

	context("#rgbToHex()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbToHex(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color", function () {

			try {
				rgbToHex("rgb(true, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts RGB colors to hex colors. #1", function () {
			assert.equal(rgbToHex("rgb(125, 244, 66)"), "#7df442");
		});

		it("Converts RGB colors to hex colors. #2", function () {
			assert.equal(rgbToHex("rgb(255, 255, 255)"), "#ffffff");
		});

		it("Converts RGB colors to hex colors. #3", function () {
			assert.equal(rgbToHex("rgb(0, 0, 0)"), "#000000");
		});

		it("Converts RGB colors to hex colors. #4", function () {
			assert.equal(rgbToHex("rgb(39, 109, 65)"), "#276d41");
		});

	});

	context("#rgbaToHex()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbaToHex(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGBa color", function () {

			try {
				rgbaToHex("rgba(true, false, false, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the second argument is given but is not a string", function () {

			try {
				rgbaToHex("rgba(10, 50, 80, 1)", false);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Converts RGBa colors to hex colors. #1", function () {
			assert.equal(rgbaToHex("rgba(125, 244, 66, 1)"), "#7df442");
		});

		it("Converts RGBa colors to hex colors. #2", function () {
			assert.equal(rgbaToHex("rgba(255, 255, 255, 0.5)"), "#ffffff");
		});

		it("Converts RGBa colors to hex colors. #3", function () {
			assert.equal(rgbaToHex("rgba(0, 0, 0, 1)"), "#000000");
		});

		it("Converts RGBa colors to hex colors. #4", function () {
			assert.equal(rgbaToHex("rgba(39, 109, 65, 0.8)"), "#276d41");
		});

		it("Converts RGBa colors to hex colors including interpolation of the alpha channel. #1", function () {
			assert.equal(rgbaToHex("rgba(255, 255, 255, 0)", "white"), "#ffffff");
		});

		it("Converts RGBa colors to hex colors including interpolation of the alpha channel. #2", function () {
			assert.equal(rgbaToHex("rgba(255, 255, 255, 0)", "black"), "#000000");
		});

	});

	context("#hsvStringToHsvTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hsvStringToHsvTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #1", function () {

			try {
				hsvStringToHsvTuple("hsb(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #2", function () {

			try {
				hsvStringToHsvTuple("hsv(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});


		it("Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #1", function () {
			const [H, S, V] = hsvStringToHsvTuple("hsb(1, 2, 3)");
			assert.equal(H, 1);
			assert.equal(S, 2);
			assert.equal(V, 3);
		});

		it("Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #2", function () {
			const [H, S, V] = hsvStringToHsvTuple("hsv(0, 0, 0)");
			assert.equal(H, 0);
			assert.equal(S, 0);
			assert.equal(V, 0);
		});

		it("Generates tuple representations of HSV/HSB colors from HSV/HSB strings. #3", function () {
			const [H, S, V] = hsvStringToHsvTuple("hsb(360, 100, 100)");
			assert.equal(H, 360);
			assert.equal(S, 100);
			assert.equal(V, 100);
		});

	});

	context("#hsvToRgbTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hsvToRgbTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #1", function () {

			try {
				hsvToRgbTuple("hsb(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #2", function () {

			try {
				hsvToRgbTuple("hsv(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates tuple representations of RGB colors from HSV/HSB strings. #1", function () {
			const [R, G, B] = hsvToRgbTuple("hsv(10, 5, 50)");
			assert.equal(R, 128);
			assert.equal(G, 122);
			assert.equal(B, 121);
		});

		it("Generates tuple representations of RGB colors from HSV/HSB strings. #2", function () {
			const [R, G, B] = hsvToRgbTuple("hsv(125, 36, 11)");
			assert.equal(R, 18);
			assert.equal(G, 28);
			assert.equal(B, 19);
		});

		it("Generates tuple representations of RGB colors from HSV/HSB strings. #3", function () {
			const [R, G, B] = hsvToRgbTuple("hsv(359, 0, 0)");
			assert.equal(R, 0);
			assert.equal(G, 0);
			assert.equal(B, 0);
		});

	});

	context("#hsvToRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hsvToRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #1", function () {

			try {
				hsvToRgb("hsb(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color. #2", function () {

			try {
				hsvToRgb("hsv(50, 100, false)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates RGB colors from HSV/HSB strings. #1", function () {
			assert.equal(hsvToRgb("hsv(10, 5, 50)"), "rgb(128, 122, 121)");
		});

		it("Generates RGB colors from HSV/HSB strings. #2", function () {
			assert.equal(hsvToRgb("hsv(125, 36, 11)"), "rgb(18, 28, 19)");
		});

		it("Generates RGB colors from HSV/HSB strings. #3", function () {
			assert.equal(hsvToRgb("hsv(359, 0, 0)"), "rgb(0, 0, 0)");
		});

	});

	context("#toHex()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				toHex(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #1", function () {

			try {
				toHex("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #2", function () {

			try {
				toHex("#1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #3", function () {

			try {
				toHex("1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #4", function () {

			try {
				toHex("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Throws an exception if the first argument is not a proper color. #5", function () {

			try {
				toHex("hsl(false, rgb, true)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("returns given hex codes just as they were if they start with a '#' and is otherwise valid. #1", function () {
			assert.equal(toHex("#123"), "#123");
		});

		it("returns given hex codes just as they were if they start with a '#' and is otherwise valid. #2", function () {
			assert.equal(toHex("#ffffff"), "#ffffff");
		});

		it("Adds a '#' in front of valid hex codes that lacks it. #1", function () {
			assert.equal(toHex("ffffff"), "#ffffff");
		});

		it("Adds a '#' in front of valid hex codes that lacks it. #2", function () {
			assert.equal(toHex("123"), "#123");
		});

		it("Converts HTML color names to their actual hex values. #1", function () {
			assert.equal(toHex("white"), "#ffffff");
		});

		it("Converts HTML color names to their actual hex values. #2", function () {
			assert.equal(toHex("antiquewhite"), "#faebd7");
		});

		it("Converts RGB colors to hex values. #1", function () {
			assert.equal(toHex("rgb(0, 0, 0)"), "#000000");
		});

		it("Converts RGB colors to hex values. #2", function () {
			assert.equal(toHex("rgb(255, 255, 255)"), "#ffffff");
		});

		it("Converts RGB colors to hex values. #3", function () {
			assert.equal(toHex("rgb(88, 100, 119)"), "#586477");
		});

		it("Converts HSL colors to hex values. #1", function () {
			assert.equal(toHex("hsl(157, 100%, 50%)"), "#00ff9d");
		});

		it("Converts HSL colors to hex values. #2", function () {
			assert.equal(toHex("hsl(79, 100%, 16%)"), "#385200");
		});

		it("Converts HSL colors to hex values. #3", function () {
			assert.equal(toHex("hsl(229, 47%, 16%)"), "#161d3c");
		});

		it("Converts HSV/HSB colors to hex values. #1", function () {
			assert.equal(toHex("hsv(228, 75, 78)"), "#3250c7");
		});

		it("Converts HSV/HSB colors to hex values. #2", function () {
			assert.equal(toHex("hsv(272, 83, 51)"), "#501682");
		});

		it("Converts HSV/HSB colors to hex values. #3", function () {
			assert.equal(toHex("hsb(344, 100, 12)"), "#1f0008");
		});

	});

	context("#hexToRgbTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToRgbTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToRgbTuple("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates RGB tuples from hex strings. #1", function () {
			const [R, G, B] = hexToRgbTuple("#000000");
			assert.equal(R, 0);
			assert.equal(G, 0);
			assert.equal(B, 0);
		});

		it("Generates RGB tuples from hex strings. #2", function () {
			const [R, G, B] = hexToRgbTuple("ffffff");
			assert.equal(R, 255);
			assert.equal(G, 255);
			assert.equal(B, 255);
		});

		it("Generates RGB tuples from hex strings. #3", function () {
			const [R, G, B] = hexToRgbTuple("4286f4");
			assert.equal(R, 66);
			assert.equal(G, 134);
			assert.equal(B, 244);
		});

	});

	context("#hexToRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToRgb("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates RGB colors from hex strings. #1", function () {
			assert.equal(hexToRgb("#000000"), "rgb(0, 0, 0)");
		});

		it("Generates RGB tuples from hex strings. #2", function () {
			assert.equal(hexToRgb("ffffff"), "rgb(255, 255, 255)");
		});

		it("Generates RGB tuples from hex strings. #3", function () {
			assert.equal(hexToRgb("4286f4"), "rgb(66, 134, 244)");
		});

	});

	context("#toRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				toRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #1", function () {

			try {
				toRgb("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #2", function () {

			try {
				toRgb("#1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #3", function () {

			try {
				toRgb("1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #4", function () {

			try {
				toRgb("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Throws an exception if the first argument is not a proper color. #5", function () {

			try {
				toRgb("hsl(false, rgb, true)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("returns rgb colors just as they were. #1", function () {
			assert.equal(toRgb("rgb(50, 60, 70)"), "rgb(50, 60, 70)");
		});

		it("returns rgb colors just as they were. #2", function () {
			assert.equal(toRgb("rgb(255, 255, 255)"), "rgb(255, 255, 255)");
		});

		it("Converts hex colors to RGB colors. #1", function () {
			assert.equal(toRgb("#000000"), "rgb(0, 0, 0)");
		});

		it("Converts hex colors to RGB colors. #2", function () {
			assert.equal(toRgb("ffffff"), "rgb(255, 255, 255)");
		});

		it("Converts hex colors to RGB colors. #3", function () {
			assert.equal(toRgb("4286f4"), "rgb(66, 134, 244)");
		});

		it("Converts HTML color names to RGB values. #1", function () {
			assert.equal(toRgb("antiquewhite"), "rgb(250, 235, 215)");
		});

		it("Converts HTML color names to RGB values. #2", function () {
			assert.equal(toRgb("aquamarine"), "rgb(127, 255, 212)");
		});

		it("Converts HSL colors to RGB colors. #1", function () {
			assert.equal(toRgb("hsl(96, 41%, 78%)"), "rgb(194, 222, 176)");
		});

		it("Converts HSL colors to RGB colors. #2", function () {
			assert.equal(toRgb("hsl(29, 87%, 50%)"), "rgb(238, 124, 17)");
		});

		it("Converts HSL colors to RGB colors. #3", function () {
			assert.equal(toRgb("hsl(0, 87%, 0%)"), "rgb(0, 0, 0)");
		});

		it("Converts HSV/HSB colors to RGB colors. #1", function () {
			assert.equal(toRgb("hsv(162, 68, 13)"), "rgb(11, 33, 26)");
		});

		it("Converts HSV/HSB colors to RGB colors. #2", function () {
			assert.equal(toRgb("hsv(245, 35, 67)"), "rgb(116, 111, 171)");
		});

		it("Converts HSV/HSB colors to RGB colors. #3", function () {
			assert.equal(toRgb("hsb(259, 0, 99)"), "rgb(252, 252, 252)");
		});

	});

	context("#hexToHslTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToHslTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToHslTuple("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSL tuples from hex strings. #1", function () {
			const [H, S, L] = hexToHslTuple("#87eeca");
			assert.equal(H, 159);
			assert.equal(S, "75%");
			assert.equal(L, "73%");
		});

		it("Generates HSL tuples from hex strings. #2", function () {
			const [H, S, L] = hexToHslTuple("#6e64a0");
			assert.equal(H, 250);
			assert.equal(S, "24%");
			assert.equal(L, "51%");
		});

		it("Generates HSL tuples from hex strings. #3", function () {
			const [H, S, L] = hexToHslTuple("#1e681d");
			assert.equal(H, 119);
			assert.equal(S, "56%");
			assert.equal(L, "26%");
		});

	});

	context("#hexToHslaTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToHslaTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToHslaTuple("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the second argument is not a number.", function () {

			try {
				hexToHslaTuple("#000000", false);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSLa tuples from hex strings. #1", function () {
			const [H, S, L, A] = hexToHslaTuple("#87eeca");
			assert.equal(H, 159);
			assert.equal(S, "75%");
			assert.equal(L, "73%");
			assert.equal(A, 1);
		});

		it("Generates HSLa tuples from hex strings. #2", function () {
			const [H, S, L, A] = hexToHslaTuple("#6e64a0", 0.5);
			assert.equal(H, 250);
			assert.equal(S, "24%");
			assert.equal(L, "51%");
			assert.equal(A, 0.5);
		});

		it("Generates HSLa tuples from hex strings. #3", function () {
			const [H, S, L, A] = hexToHslaTuple("#1e681d", 0);
			assert.equal(H, 119);
			assert.equal(S, "56%");
			assert.equal(L, "26%");
			assert.equal(A, 0);
		});

	});

	context("#hexToHsla()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToHsla(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToHsla("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the second argument is not a number.", function () {

			try {
				hexToHsla("#000000", false);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSLa colors from hex strings. #1", function () {
			assert.equal(hexToHsla("#87eeca"), "hsla(159, 75%, 73%, 1)");
		});

		it("Generates HSLa colors from hex strings. #2", function () {
			assert.equal(hexToHsla("#6e64a0", 0.5), "hsla(250, 24%, 51%, 0.5)");
		});

		it("Generates HSLa tuples from hex strings. #3", function () {
			assert.equal(hexToHsla("#1e681d", 0), "hsla(119, 56%, 26%, 0)");
		});

	});

	context("#hexToHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				hexToHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				hexToHsl("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSL colors from hex strings. #1", function () {
			assert.equal(hexToHsl("#87eeca"), "hsl(159, 75%, 73%)");
		});

		it("Generates HSL colors from hex strings. #2", function () {
			assert.equal(hexToHsl("#6e64a0"), "hsl(250, 24%, 51%)");
		});

		it("Generates HSL colors from hex strings. #3", function () {
			assert.equal(hexToHsl("#1e681d"), "hsl(119, 56%, 26%)");
		});

	});

	context("#rgbToHslTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbToHslTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				rgbToHslTuple("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSL tuples from RGB colors. #1", function () {
			const [H, S, L] = rgbToHslTuple("rgb(24, 102, 20)");
			assert.equal(H, 117);
			assert.equal(S, "67%");
			assert.equal(L, "24%");

		});

		it("Generates HSL tuples from RGB colors. #2", function () {
			const [H, S, L] = rgbToHslTuple("rgb(81, 122, 179)");
			assert.equal(H, 215);
			assert.equal(S, "39%");
			assert.equal(L, "51%");
		});

		it("Generates HSL tuples from RGB colors. #3", function () {
			const [H, S, L] = rgbToHslTuple("rgb(184, 0, 3)");
			assert.equal(H, 359);
			assert.equal(S, "100%");
			assert.equal(L, "36%");
		});

	});

	context("#rgbToHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbToHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				rgbToHsl("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSL colors from RGB colors. #1", function () {
			assert.equal(rgbToHsl("rgb(24, 102, 20)"), "hsl(117, 67%, 24%)");
		});

		it("Generates HSL tuples from RGB colors. #2", function () {
			assert.equal(rgbToHsl("rgb(81, 122, 179)"), "hsl(215, 39%, 51%)");
		});

		it("Generates HSL tuples from RGB colors. #3", function () {
			assert.equal(rgbToHsl("rgb(184, 0, 3)"), "hsl(359, 100%, 36%)");
		});

	});

	context("#toHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				toHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #1", function () {

			try {
				toHsl("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #2", function () {

			try {
				toHsl("#1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #3", function () {

			try {
				toHsl("1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #4", function () {

			try {
				toHsl("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Throws an exception if the first argument is not a proper color. #5", function () {

			try {
				toHsl("hsl(false, rgb, true)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("returns correct HSL colors just as they were.", function () {
			assert.equal(toHsl("hsl(50, 60%, 70%)"), "hsl(50, 60%, 70%)");
		});

		it("returns HSL with missing '%' symbols with the addition of those..", function () {
			assert.equal(toHsl("hsl(50, 60, 70)"), "hsl(50, 60%, 70%)");
		});

		it("Converts RGB colors to HSL colors. #1", function () {
			assert.equal(toHsl("rgb(30, 104, 29)"), "hsl(119, 56%, 26%)");
		});

		it("Converts RGB colors to HSL colors. #2", function () {
			assert.equal(toHsl("rgb(65, 58, 95)"), "hsl(251, 24%, 30%)");
		});

		it("Converts RGB colors to HSL colors. #3", function () {
			assert.equal(toHsl("rgb(201, 243, 205)"), "hsl(126, 64%, 87%)");
		});

		it("Converts hex colors to HSL colors. #1", function () {
			assert.equal(toHsl("#000000"), "hsl(0, 0%, 0%)");
		});

		it("Converts hex colors to HSL colors. #2", function () {
			assert.equal(toHsl("#ffffff"), "hsl(0, 0%, 100%)");
		});

		it("Converts hex colors to HSL colors. #3", function () {
			assert.equal(toHsl("ff4d4d"), "hsl(0, 100%, 65%)");
		});

		it("Converts HTML color names to HSL values. #1", function () {
			assert.equal(toHsl("antiquewhite"), "hsl(34, 78%, 91%)");
		});

		it("Converts HTML color names to HSL values. #2", function () {
			assert.equal(toHsl("aquamarine"), "hsl(160, 100%, 75%)");
		});

		it("Converts HSV/HSB colors to HSL colors. #1", function () {
			assert.equal(toHsl("hsv(162, 68, 13)"), "hsl(161, 50%, 9%)");
		});

		it("Converts HSV/HSB colors to HSL colors. #2", function () {
			assert.equal(toHsl("hsv(245, 35, 67)"), "hsl(245, 26%, 55%)");
		});

		it("Converts HSV/HSB colors to RGB colors. #3", function () {
			assert.equal(toHsl("hsb(259, 0, 99)"), "hsl(0, 0%, 99%)");
		});

	});

	context("#rgbToHsvTuple()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbToHsvTuple(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				rgbToHsvTuple("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSV/HSB tuples from RGB colors. #1", function () {
			const [H, S, V] = rgbToHsvTuple("rgb(24, 102, 20)");
			assert.equal(H, 117);
			assert.equal(S, 80);
			assert.equal(V, 40);

		});

		it("Generates HSV/HSB tuples from RGB colors. #2", function () {
			const [H, S, V] = rgbToHsvTuple("rgb(81, 122, 179)");
			assert.equal(H, 215);
			assert.equal(S, 55);
			assert.equal(V, 70);
		});

		it("Generates HSV/HSB tuples from RGB colors. #3", function () {
			const [H, S, V] = rgbToHsvTuple("rgb(184, 0, 3)");
			assert.equal(H, 359);
			assert.equal(S, 100);
			assert.equal(V, 72);
		});

	});

	context("#rgbToHsv()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				rgbToHsv(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				rgbToHsv("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Generates HSV/HSB colors from RGB colors. #1", function () {
			assert.equal(rgbToHsv("rgb(24, 102, 20)"), "hsb(117, 80, 40)");
		});

		it("Generates HSV/HSB colors from RGB colors. #2", function () {
			assert.equal(rgbToHsv("rgb(81, 122, 179)"), "hsb(215, 55, 70)");
		});

		it("Generates HSV/HSB colors from RGB colors. #3", function () {
			assert.equal(rgbToHsv("rgb(184, 0, 3)"), "hsb(359, 100, 72)");
		});

	});

	context("#toHsv()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				toHsv(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #1", function () {

			try {
				toHsv("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #2", function () {

			try {
				toHsv("#1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #3", function () {

			try {
				toHsv("1234");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #4", function () {

			try {
				toHsv("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}
		});

		it("Throws an exception if the first argument is not a proper color. #5", function () {

			try {
				toHsv("hsl(false, rgb, true)");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #6", function () {

			try {
				toHsv("hsb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper color. #7", function () {

			try {
				toHsv("hsv()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("returns correct HSV/HSB colors just as they were. #1", function () {
			assert.equal(toHsv("hsv(50, 60, 70)"), "hsv(50, 60, 70)");
		});

		it("returns correct HSV/HSB colors just as they were. #2", function () {
			assert.equal(toHsv("hsb(50, 60, 70)"), "hsb(50, 60, 70)");
		});

		it("Converts RGB colors to HSV/HSB colors. #1", function () {
			assert.equal(toHsv("rgb(30, 104, 29)"), "hsb(119, 72, 41)");
		});

		it("Converts RGB colors to HSV/HSB colors. #2", function () {
			assert.equal(toHsv("rgb(65, 58, 95)"), "hsb(251, 39, 37)");
		});

		it("Converts RGB colors to HSV/HSB colors. #3", function () {
			assert.equal(toHsv("rgb(201, 243, 205)"), "hsb(126, 17, 95)");
		});

		it("Converts hex colors to HSV/HSB colors. #1", function () {
			assert.equal(toHsv("#000000"), "hsb(0, 0, 0)");
		});

		it("Converts hex colors to HSV/HSB colors. #2", function () {
			assert.equal(toHsv("#ffffff"), "hsb(0, 0, 100)");
		});

		it("Converts hex colors to HSV/HSB colors. #3", function () {
			assert.equal(toHsv("ff4d4d"), "hsb(0, 70, 100)");
		});

		it("Converts HTML color names to HSV/HSB values. #1", function () {
			assert.equal(toHsv("antiquewhite"), "hsb(34, 14, 98)");
		});

		it("Converts HTML color names to HSV/HSB values. #2", function () {
			assert.equal(toHsv("aquamarine"), "hsb(160, 50, 100)");
		});

		it("Converts HSL colors to HSV/HSB colors. #1", function () {
			assert.equal(toHsv("hsl(96, 41%, 78%)"), "hsb(97, 21, 87)");
		});

		it("Converts HSL colors to HSV/HSB colors. #2", function () {
			assert.equal(toHsv("hsl(29, 87%, 50%)"), "hsb(29, 93, 93)");
		});

		it("Converts HSL colors to HSV/HSB colors. #3", function () {
			assert.equal(toHsv("hsl(0, 87%, 0%)"), "hsb(0, 0, 0)");
		});

	});

	context("#randomHexColor()", function () {

		it("always returns random valid hex colors", function () {

			// 5000 times should be more than enough!
			let limit = 5000;
			for (let i = 0; i < limit; i++) {
				let hex = randomHexColor();
				if (!(/^#[0-9A-F]{6}$/i.test(hex))) assert.fail(null, null, `invalid hex color generated: ${hex}`);
			}
		});

	});

	context("#randomRgbColor()", function () {

		it("always returns random valid RGB colors", function () {

			// 5000 times should be more than enough!
			let limit = 5000;
			for (let i = 0; i < limit; i++) {
				let rgb = randomRgbColor();
				if (!(/^rgb\(\s*.+\s*,\s*.+\s*,\s*.+\s*\)$/.test(rgb))) assert.fail(null, null, `invalid RGB color generated: ${rgb}`);
			}
		});

	});

	context("#randomHslColor()", function () {

		it("always returns random valid HSL colors", function () {

			// 5000 times should be more than enough!
			let limit = 5000;
			for (let i = 0; i < limit; i++) {
				let hsl = randomHslColor();
				if (!(/^hsl\(\s*.+\s*,\s*.+%\s*,\s*.+%\s*\)$/.test(hsl))) assert.fail(null, null, `invalid HSL color generated: ${hsl}`);
			}
		});

	});

	context("#randomHsvColor()", function () {

		it("always returns random valid HSV/HSB colors", function () {

			// 5000 times should be more than enough!
			let limit = 5000;
			for (let i = 0; i < limit; i++) {
				let hsv = randomHsvColor();
				if (!(/^hsb\(\s*.+\s*,\s*.+\s*,\s*.+\s*\)$/.test(hsv))) assert.fail(null, null, `invalid HSV/HSB color generated: ${hsv}`);
			}
		});

	});

	context("#saturateHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSL color.", function () {

			try {
				saturateHsl("hsl()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given HSL color. #1", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)"), "hsl(50, 55%, 80%)");
		});

		it("Returns a saturated version of the given HSL color. #2", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", 10), "hsl(50, 55%, 80%)");
		});

		it("Returns a saturated version of the given HSL color. #3", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", 100), "hsl(50, 100%, 80%)");
		});

		it("Returns a less saturated version of the given HSL color for negative values. #1", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", -10), "hsl(50, 45%, 80%)");
		});

		it("Returns a less saturated version of the given HSL color for negative values. #2", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", -95), "hsl(50, 2.5%, 80%)");
		});

		it("Never goes beyond 100%", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", 100000), "hsl(50, 100%, 80%)");
		});

		it("Never goes below 0%", function () {
			assert.equal(saturateHsl("hsl(50, 50, 80)", -100000), "hsl(50, 0%, 80%)");
		});

	});

	context("#saturateHsla()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateHsla(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSLa color.", function () {

			try {
				saturateHsla("hsla()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given HSLa color. #1", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 1)"), "hsla(50, 55%, 80%, 1)");
		});

		it("Returns a saturated version of the given HSLa color. #2", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 55%, 80%, 0.5)");
		});

		it("Returns a saturated version of the given HSLa color. #3", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 0)", 100), "hsla(50, 100%, 80%, 0)");
		});

		it("Returns a less saturated version of the given HSLa color for negative values. #1", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 1)", -10), "hsla(50, 45%, 80%, 1)");
		});

		it("Returns a less saturated version of the given HSLa color for negative values. #2", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 2.5%, 80%, 0.6)");
		});

		it("Never goes beyond 100%", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 1)", 100000), "hsla(50, 100%, 80%, 1)");
		});

		it("Never goes below 0%", function () {
			assert.equal(saturateHsla("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 0%, 80%, 0.2)");
		});

	});

	context("#saturateRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				saturateRgb("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given RGB color. #1", function () {
			assert.equal(saturateRgb("rgb(23, 30, 129)"), "rgb(18, 25, 135)");
		});

		it("Returns a saturated version of the given RGB color. #2", function () {
			assert.equal(saturateRgb("rgb(77, 147, 210)", 10), "rgb(69, 148, 217)");
		});

		it("Returns a less saturated version of the given RGB color for negative values. #1", function () {
			assert.equal(saturateRgb("rgb(77, 147, 210)", -10), "rgb(82, 147, 203)");
		});

		it("Returns a less saturated version of the given RGB color for negative values. #2", function () {
			assert.equal(saturateRgb("rgb(23, 30, 129)", -90), "rgb(71, 72, 82)");
		});

	});

	context("#saturateRgba()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateRgba(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGBa color.", function () {

			try {
				saturateRgba("rgba()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given RGBa color. #1", function () {
			assert.equal(saturateRgba("rgba(23, 30, 129, 1)"), "rgba(18, 25, 135, 1)");
		});

		it("Returns a saturated version of the given RGBa color. #2", function () {
			assert.equal(saturateRgba("rgba(77, 147, 210, 0.5)", 10), "rgba(69, 148, 217, 0.5)");
		});

		it("Returns a less saturated version of the given RGBa color for negative values. #1", function () {
			assert.equal(saturateRgba("rgba(77, 147, 210, 0)", -10), "rgba(82, 147, 203, 0)");
		});

		it("Returns a less saturated version of the given RGBa color for negative values. #2", function () {
			assert.equal(saturateRgba("rgba(23, 30, 129, 0.2)", -90), "rgba(71, 72, 82, 0.2)");
		});

	});

	context("#saturateHex()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateHex(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				saturateHex("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given hex color. #1", function () {
			assert.equal(saturateHex("#a3a3b3"), "#a2a2b4");
		});

		it("Returns a saturated version of the given hex color. #2", function () {
			assert.equal(saturateHex("#ddace3"), "#dfa8e6");
		});

		it("Returns a less saturated version of the given hex color for negative values. #1", function () {
			assert.equal(saturateHex("#a3a3b3", -10), "#a3a3b2");
		});

		it("Returns a less saturated version of the given hex color for negative values. #2", function () {
			assert.equal(saturateHex("#ddace3", -90), "#c9c4ca");
		});

	});

	context("#saturateHsv()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				saturateHsv(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color.", function () {

			try {
				saturateHsv("hsb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a saturated version of the given HSV/HSB color. #1", function () {
			assert.equal(saturateHsv("hsb(290, 10, 79)"), "hsb(290, 11, 79)");
		});

		it("Returns a saturated version of the given HSV/HSB color. #2", function () {
			assert.equal(saturateHsv("hsb(290, 10, 79)", 10), "hsb(290, 11, 79)");
		});

		it("Returns a saturated version of the given HSV/HSB color. #3", function () {
			assert.equal(saturateHsv("hsb(290, 10, 79)", 90), "hsb(290, 19, 79)");
		});

		it("Returns a less saturated version of the given HSV/HSB color for negative values. #1", function () {
			assert.equal(saturateHsv("hsb(120, 40, 80)", -10), "hsb(120, 36, 80)");
		});

		it("Returns a less saturated version of the given HSV/HSB color for negative values. #2", function () {
			assert.equal(saturateHsv("hsb(120, 40, 80)", -90), "hsb(120, 4, 80)");
		});

	});

	context("#saturate()", function () {

		it("Returns a saturated version of a given RGB color. #1", function () {
			assert.equal(saturate("rgb(23, 30, 129)"), "rgb(18, 25, 135)");
		});

		it("Returns a saturated version of a given RGB color. #2", function () {
			assert.equal(saturate("rgb(77, 147, 210)", 10), "rgb(69, 148, 217)");
		});

		it("Returns a less saturated version of a given RGB color for negative values. #1", function () {
			assert.equal(saturate("rgb(77, 147, 210)", -10), "rgb(82, 147, 203)");
		});

		it("Returns a less saturated version of a given RGB color for negative values. #2", function () {
			assert.equal(saturate("rgb(23, 30, 129)", -90), "rgb(71, 72, 82)");
		});

		it("Returns a saturated version of a given HSL color. #1", function () {
			assert.equal(saturate("hsl(50, 50, 80)"), "hsl(50, 55%, 80%)");
		});

		it("Returns a saturated version of a given HSL color. #2", function () {
			assert.equal(saturate("hsl(50, 50, 80)", 10), "hsl(50, 55%, 80%)");
		});

		it("Returns a saturated version of a given HSL color. #3", function () {
			assert.equal(saturate("hsl(50, 50, 80)", 100), "hsl(50, 100%, 80%)");
		});

		it("Returns a less saturated version of a given HSL color for negative values. #1", function () {
			assert.equal(saturate("hsl(50, 50, 80)", -10), "hsl(50, 45%, 80%)");
		});

		it("Returns a less saturated version of a given HSL color for negative values. #2", function () {
			assert.equal(saturate("hsl(50, 50, 80)", -95), "hsl(50, 2.5%, 80%)");
		});

		it("Never goes beyond 100% for HSL colors", function () {
			assert.equal(saturate("hsl(50, 50, 80)", 100000), "hsl(50, 100%, 80%)");
		});

		it("Never goes below 0% for HSL colors", function () {
			assert.equal(saturate("hsl(50, 50, 80)", -100000), "hsl(50, 0%, 80%)");
		});

		it("Returns a saturated version of a given HSV/HSB color. #1", function () {
			assert.equal(saturate("hsb(290, 10, 79)"), "hsb(290, 11, 79)");
		});

		it("Returns a saturated version of a given HSV/HSB color. #2", function () {
			assert.equal(saturate("hsb(290, 10, 79)", 10), "hsb(290, 11, 79)");
		});

		it("Returns a saturated version of a given HSV/HSB color. #3", function () {
			assert.equal(saturate("hsb(290, 10, 79)", 90), "hsb(290, 19, 79)");
		});

		it("Returns a less saturated version of a given HSV/HSB color for negative values. #1", function () {
			assert.equal(saturate("hsb(120, 40, 80)", -10), "hsb(120, 36, 80)");
		});

		it("Returns a less saturated version of a given HSV/HSB color for negative values. #2", function () {
			assert.equal(saturate("hsb(120, 40, 80)", -90), "hsb(120, 4, 80)");
		});

		it("Returns a saturated version of a given RGBa color. #1", function () {
			assert.equal(saturate("rgba(23, 30, 129, 1)"), "rgba(18, 25, 135, 1)");
		});

		it("Returns a saturated version of a given RGBa color. #2", function () {
			assert.equal(saturate("rgba(77, 147, 210, 0.5)", 10), "rgba(69, 148, 217, 0.5)");
		});

		it("Returns a less saturated version of a given RGBa color for negative values. #1", function () {
			assert.equal(saturate("rgba(77, 147, 210, 0)", -10), "rgba(82, 147, 203, 0)");
		});

		it("Returns a less saturated version of a given RGBa color for negative values. #2", function () {
			assert.equal(saturate("rgba(23, 30, 129, 0.2)", -90), "rgba(71, 72, 82, 0.2)");
		});

		it("Returns a saturated version of a given HSLa color. #1", function () {
			assert.equal(saturate("hsla(50, 50, 80, 1)"), "hsla(50, 55%, 80%, 1)");
		});

		it("Returns a saturated version of a given HSLa color. #2", function () {
			assert.equal(saturate("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 55%, 80%, 0.5)");
		});

		it("Returns a saturated version of a given HSLa color. #3", function () {
			assert.equal(saturate("hsla(50, 50, 80, 0)", 100), "hsla(50, 100%, 80%, 0)");
		});

		it("Returns a less saturated version of a given HSLa color for negative values. #1", function () {
			assert.equal(saturate("hsla(50, 50, 80, 1)", -10), "hsla(50, 45%, 80%, 1)");
		});

		it("Returns a less saturated version of a given HSLa color for negative values. #2", function () {
			assert.equal(saturate("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 2.5%, 80%, 0.6)");
		});

		it("Never goes beyond 100% for HSLa colors", function () {
			assert.equal(saturate("hsla(50, 50, 80, 1)", 100000), "hsla(50, 100%, 80%, 1)");
		});

		it("Never goes below 0% for HSLa colors", function () {
			assert.equal(saturate("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 0%, 80%, 0.2)");
		});

		it("Returns a saturated version of a given hex color. #1", function () {
			assert.equal(saturate("#a3a3b3"), "#a2a2b4");
		});

		it("Returns a saturated version of a given hex color. #2", function () {
			assert.equal(saturate("#ddace3"), "#dfa8e6");
		});

		it("Returns a less saturated version of a given hex color for negative values. #1", function () {
			assert.equal(saturate("#a3a3b3", -10), "#a3a3b2");
		});

		it("Returns a less saturated version of a given hex color for negative values. #2", function () {
			assert.equal(saturate("#ddace3", -90), "#c9c4ca");
		});

	});

	context("#lightenHsl()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenHsl(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSL color.", function () {

			try {
				lightenHsl("hsl()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given HSL color. #1", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)"), "hsl(50, 50%, 88%)");
		});

		it("Returns a lightened version of the given HSL color. #2", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)", 10), "hsl(50, 50%, 88%)");
		});

		it("Returns a lightened version of the given HSL color. #3", function () {
			assert.equal(lightenHsl("hsl(50, 50, 10)", 100), "hsl(50, 50%, 20%)");
		});

		it("Returns a less lightened version of the given HSL color for negative values. #1", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)", -10), "hsl(50, 50%, 72%)");
		});

		it("Returns a less lightened version of the given HSL color for negative values. #2", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)", -95), "hsl(50, 50%, 4%)");
		});

		it("Never goes beyond 100%", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)", 100000), "hsl(50, 50%, 100%)");
		});

		it("Never goes below 0%", function () {
			assert.equal(lightenHsl("hsl(50, 50, 80)", -100000), "hsl(50, 50%, 0%)");
		});

	});

	context("#lightenHsla()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenHsla(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSLa color.", function () {

			try {
				lightenHsla("hsla()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given HSLa color. #1", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 1)"), "hsla(50, 50%, 88%, 1)");
		});

		it("Returns a lightened version of the given HSLa color. #2", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 50%, 88%, 0.5)");
		});

		it("Returns a lightened version of the given HSLa color. #3", function () {
			assert.equal(lightenHsla("hsla(50, 50, 10, 0)", 100), "hsla(50, 50%, 20%, 0)");
		});

		it("Returns a less lightened version of the given HSLa color for negative values. #1", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 1)", -10), "hsla(50, 50%, 72%, 1)");
		});

		it("Returns a less lightened version of the given HSLa color for negative values. #2", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 50%, 4%, 0.6)");
		});

		it("Never goes beyond 100%", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 1)", 100000), "hsla(50, 50%, 100%, 1)");
		});

		it("Never goes below 0%", function () {
			assert.equal(lightenHsla("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 50%, 0%, 0.2)");
		});

	});

	context("#lightenRgb()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenRgb(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGB color.", function () {

			try {
				lightenRgb("rgb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given RGB color. #1", function () {
			assert.equal(lightenRgb("rgb(23, 30, 129)"), "rgb(25, 33, 143)");
		});

		it("Returns a lightened version of the given RGB color. #2", function () {
			assert.equal(lightenRgb("rgb(231, 175, 212)", 10), "rgb(241, 208, 230)");
		});

		it("Returns a less lightened version of the given RGB color for negative values. #1", function () {
			assert.equal(lightenRgb("rgb(231, 175, 212)", -10), "rgb(222, 145, 196)");
		});

		it("Returns a less lightened version of the given RGB color for negative values. #2", function () {
			assert.equal(lightenRgb("rgb(23, 30, 129)", -90), "rgb(2, 3, 13)");
		});

	});

	context("#lightenRgba()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenRgba(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper RGBa color.", function () {

			try {
				lightenRgba("rgba()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given RGBa color. #1", function () {
			assert.equal(lightenRgba("rgba(23, 30, 129, 1)"), "rgba(25, 33, 143, 1)");
		});

		it("Returns a lightened version of the given RGBa color. #2", function () {
			assert.equal(lightenRgba("rgba(231, 175, 212, 0.5)", 10), "rgba(241, 208, 230, 0.5)");
		});

		it("Returns a less lightened version of the given RGBa color for negative values. #1", function () {
			assert.equal(lightenRgba("rgba(231, 175, 212, 0)", -10), "rgba(222, 145, 196, 0)");
		});

		it("Returns a less lightened version of the given RGBa color for negative values. #2", function () {
			assert.equal(lightenRgba("rgba(23, 30, 129, 0.2)", -90), "rgba(2, 3, 13, 0.2)");
		});

	});

	context("#lightenHex()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenHex(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper hex color.", function () {

			try {
				lightenHex("foobar");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given hex color. #1", function () {
			assert.equal(lightenHex("#af0"), "#b2ff1a");
		});

		it("Returns a lightened version of the given hex color. #2", function () {
			assert.equal(lightenHex("#ddaced"), "#eacdf4");
		});

		it("Returns a less lightened version of the given hex color for negative values. #1", function () {
			assert.equal(lightenHex("#af0", -10), "#99e600");
		});

		it("Returns a less lightened version of the given hex color for negative values. #2", function () {
			assert.equal(lightenHex("#ddaced", -90), "#1b0721");
		});

	});

	context("#lightenHsv()", function () {

		it("Throws an exception if the first argument is not of type 'string'", function () {

			try {
				lightenHsv(null);
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Throws an exception if the first argument is not a proper HSV/HSB color.", function () {

			try {
				lightenHsv("hsb()");
				throw new Error("Expected an exception to be thrown.");
			} catch (e) {
				if (e.message.includes("Expected an exception to be thrown.")) assert.fail(null, null, "Expected an exception to be thrown.");
			}

		});

		it("Returns a lightened version of the given HSV/HSB color. #1", function () {
			assert.equal(lightenHsv("hsb(290, 10, 84)"), "hsb(291, 6, 91)");
		});

		it("Returns a lightened version of the given HSV/HSB color. #2", function () {
			assert.equal(lightenHsv("hsb(359, 12, 53)", 10), "hsb(0, 10, 58)");
		});

		it("Returns a lightened version of the given HSV/HSB color. #3", function () {
			assert.equal(lightenHsv("hsb(290, 10, 32)", 90), "hsb(286, 9, 60)");
		});

		it("Returns a less lightened version of the given HSV/HSB color for negative values. #1", function () {
			assert.equal(lightenHsv("hsb(290, 10, 84)", -10), "hsb(292, 15, 78)");
		});

		it("Returns a less lightened version of the given HSV/HSB color for negative values. #2", function () {
			assert.equal(lightenHsv("hsb(359, 12, 53)", -90), "hsb(0, 14, 5)");
		});

	});

	context("#lighten()", function () {

		it("Returns a lightened version of a given RGBa color. #1", function () {
			assert.equal(lighten("rgba(23, 30, 129, 1)"), "rgba(25, 33, 143, 1)");
		});

		it("Returns a lightened version of a given RGBa color. #2", function () {
			assert.equal(lighten("rgba(231, 175, 212, 0.5)", 10), "rgba(241, 208, 230, 0.5)");
		});

		it("Returns a less lightened version of a given RGBa color for negative values. #1", function () {
			assert.equal(lighten("rgba(231, 175, 212, 0)", -10), "rgba(222, 145, 196, 0)");
		});

		it("Returns a less lightened version of a given RGBa color for negative values. #2", function () {
			assert.equal(lighten("rgba(23, 30, 129, 0.2)", -90), "rgba(2, 3, 13, 0.2)");
		});

		it("Returns a lightened version of a given HSLa color. #1", function () {
			assert.equal(lighten("hsla(50, 50, 80, 1)"), "hsla(50, 50%, 88%, 1)");
		});

		it("Returns a lightened version of a given HSLa color. #2", function () {
			assert.equal(lighten("hsla(50, 50, 80, 0.5)", 10), "hsla(50, 50%, 88%, 0.5)");
		});

		it("Returns a lightened version of a given HSLa color. #3", function () {
			assert.equal(lighten("hsla(50, 50, 10, 0)", 100), "hsla(50, 50%, 20%, 0)");
		});

		it("Returns a less lightened version of a given HSLa color for negative values. #1", function () {
			assert.equal(lighten("hsla(50, 50, 80, 1)", -10), "hsla(50, 50%, 72%, 1)");
		});

		it("Returns a less lightened version of a given HSLa color for negative values. #2", function () {
			assert.equal(lighten("hsla(50, 50, 80, 0.6)", -95), "hsla(50, 50%, 4%, 0.6)");
		});

		it("Never goes beyond 100% for HSLa values", function () {
			assert.equal(lighten("hsla(50, 50, 80, 1)", 100000), "hsla(50, 50%, 100%, 1)");
		});

		it("Never goes below 0% for HSLa values", function () {
			assert.equal(lighten("hsla(50, 50, 80, 0.2)", -100000), "hsla(50, 50%, 0%, 0.2)");
		});

		it("Returns a lightened version of a given RGB color. #1", function () {
			assert.equal(lighten("rgb(23, 30, 129)"), "rgb(25, 33, 143)");
		});

		it("Returns a lightened version of a given RGB color. #2", function () {
			assert.equal(lighten("rgb(231, 175, 212)", 10), "rgb(241, 208, 230)");
		});

		it("Returns a less lightened version of a given RGB color for negative values. #1", function () {
			assert.equal(lighten("rgb(231, 175, 212)", -10), "rgb(222, 145, 196)");
		});

		it("Returns a less lightened version of a given RGB color for negative values. #2", function () {
			assert.equal(lighten("rgb(23, 30, 129)", -90), "rgb(2, 3, 13)");
		});

		it("Returns a lightened version of a given HSL color. #1", function () {
			assert.equal(lighten("hsl(50, 50, 80)"), "hsl(50, 50%, 88%)");
		});

		it("Returns a lightened version of a given HSL color. #2", function () {
			assert.equal(lighten("hsl(50, 50, 80)", 10), "hsl(50, 50%, 88%)");
		});

		it("Returns a lightened version of a given HSL color. #3", function () {
			assert.equal(lighten("hsl(50, 50, 10)", 100), "hsl(50, 50%, 20%)");
		});

		it("Returns a less lightened version of a given HSL color for negative values. #1", function () {
			assert.equal(lighten("hsl(50, 50, 80)", -10), "hsl(50, 50%, 72%)");
		});

		it("Returns a less lightened version of a given HSL color for negative values. #2", function () {
			assert.equal(lighten("hsl(50, 50, 80)", -95), "hsl(50, 50%, 4%)");
		});

		it("Never goes beyond 100% for HSL values", function () {
			assert.equal(lighten("hsl(50, 50, 80)", 100000), "hsl(50, 50%, 100%)");
		});

		it("Never goes below 0% for HSL values", function () {
			assert.equal(lighten("hsl(50, 50, 80)", -100000), "hsl(50, 50%, 0%)");
		});

		it("Returns a lightened version of a given HSV/HSB color. #1", function () {
			assert.equal(lighten("hsb(290, 10, 84)"), "hsb(291, 6, 91)");
		});

		it("Returns a lightened version of a given HSV/HSB color. #2", function () {
			assert.equal(lighten("hsb(359, 12, 53)", 10), "hsb(0, 10, 58)");
		});

		it("Returns a lightened version of a given HSV/HSB color. #3", function () {
			assert.equal(lighten("hsb(290, 10, 32)", 90), "hsb(286, 9, 60)");
		});

		it("Returns a less lightened version of a given HSV/HSB color for negative values. #1", function () {
			assert.equal(lighten("hsb(290, 10, 84)", -10), "hsb(292, 15, 78)");
		});

		it("Returns a less lightened version of a given HSV/HSB color for negative values. #2", function () {
			assert.equal(lighten("hsb(359, 12, 53)", -90), "hsb(0, 14, 5)");
		});

		it("Returns a lightened version of a given hex color. #1", function () {
			assert.equal(lighten("#af0"), "#b2ff1a");
		});

		it("Returns a lightened version of a given hex color. #2", function () {
			assert.equal(lighten("#ddaced"), "#eacdf4");
		});

		it("Returns a less lightened version of a given hex color for negative values. #1", function () {
			assert.equal(lighten("#af0", -10), "#99e600");
		});

		it("Returns a less lightened version of a given hex color for negative values. #2", function () {
			assert.equal(lighten("#ddaced", -90), "#1b0721");
		});

	});

	context("#isLight()", function () {

		it("correctly determines bright from dark colors, no matter the input. #1", function () {
			assert.isTrue(isLight("#4286f4"));
		});

		it("correctly determines bright from dark colors, no matter the input. #2", function () {
			assert.isTrue(isLight("#165ac9"));
		});

		it("correctly determines bright from dark colors, no matter the input. #3", function () {
			assert.isFalse(isLight("#0c3e8e"));
		});

		it("correctly determines bright from dark colors, no matter the input. #4", function () {
			assert.isTrue(isLight("rgb(159, 188, 234)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #5", function () {
			assert.isTrue(isLight("rgb(124, 134, 150)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #6", function () {
			assert.isFalse(isLight("rgb(85, 92, 104)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #7", function () {
			assert.isTrue(isLight("hsl(0, 0%, 100%)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #8", function () {
			assert.isTrue(isLight("hsl(300, 100%, 50%)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #9", function () {
			assert.isFalse(isLight("hsl(40, 100%, 30%)"));
		});

		it("correctly determines bright from dark colors, no matter the input. #10", function () {
			assert.isTrue(isLight("darkseagreen"));
		});

		it("correctly determines bright from dark colors, no matter the input. #11", function () {
			assert.isTrue(isLight("floralwhite"));
		});

		it("correctly determines bright from dark colors, no matter the input. #12", function () {
			assert.isFalse(isLight("darkslateblue"));
		});

	});

});
