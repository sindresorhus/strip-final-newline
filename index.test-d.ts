import {Buffer} from 'node:buffer';
import {expectType, expectError} from 'tsd';
import stripFinalNewline from './index.js';

expectType<''>(stripFinalNewline(''));
expectType<Buffer>(stripFinalNewline(Buffer.from('')));
expectType<Uint8Array>(stripFinalNewline(new TextEncoder().encode('')));
expectError(stripFinalNewline(true));
expectError(stripFinalNewline(new Uint16Array(new ArrayBuffer(0))));
