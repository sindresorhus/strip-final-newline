import {Buffer} from 'node:buffer';
import test from 'ava';
import stripFinalNewline from './index.js';

const invalidType = async (t, input) => {
	t.throws(() => stripFinalNewline(input), {message: /Input must be/});
};

test('Invalid type - boolean', invalidType, true);
test('Invalid type - DataView', invalidType, new DataView(new ArrayBuffer(0)));
test('Invalid type - Uint16Array', invalidType, new Uint16Array(new ArrayBuffer(0)));

const assertStrip = async (t, convert, input, output) => {
	t.deepEqual(stripFinalNewline(convert(input)), convert(output));
};

const inputs = [
	'foo\n',
	'foo\nbar\n',
	'foo\n\n\n',
	'foo\r\n',
	'foo\r',
	'foo\n\r\n'
];

const outputs = [
	'foo',
	'foo\nbar',
	'foo\n\n',
	'foo',
	'foo\r',
	'foo\n'
];

const identity = input => input;

test('string - LF', assertStrip, identity, inputs[0], outputs[0]);
test('string - LF text LF', assertStrip, identity, inputs[1], outputs[1]);
test('string - LF LF LF', assertStrip, identity, inputs[2], outputs[2]);
test('string - CR LF', assertStrip, identity, inputs[3], outputs[3]);
test('string - CR', assertStrip, identity, inputs[4], outputs[4]);
test('string - LF CR LF', assertStrip, identity, inputs[5], outputs[5]);

const toBuffer = Buffer.from;

test('Buffer - LF', assertStrip, toBuffer, inputs[0], outputs[0]);
test('Buffer - LF text LF', assertStrip, toBuffer, inputs[1], outputs[1]);
test('Buffer - LF LF LF', assertStrip, toBuffer, inputs[2], outputs[2]);
test('Buffer - CR LF', assertStrip, toBuffer, inputs[3], outputs[3]);
test('Buffer - CR', assertStrip, toBuffer, inputs[4], outputs[4]);
test('Buffer - LF CR LF', assertStrip, toBuffer, inputs[5], outputs[5]);

const textEncoder = new TextEncoder();
const toUint8Array = textEncoder.encode.bind(textEncoder);

test('Uint8Array - LF', assertStrip, toUint8Array, inputs[0], outputs[0]);
test('Uint8Array - LF text LF', assertStrip, toUint8Array, inputs[1], outputs[1]);
test('Uint8Array - LF LF LF', assertStrip, toUint8Array, inputs[2], outputs[2]);
test('Uint8Array - CR LF', assertStrip, toUint8Array, inputs[3], outputs[3]);
test('Uint8Array - CR', assertStrip, toUint8Array, inputs[4], outputs[4]);
test('Uint8Array - LF CR LF', assertStrip, toUint8Array, inputs[5], outputs[5]);
