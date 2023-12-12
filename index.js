export default function stripFinalNewline(input) {
	const LF = typeof input === 'string' ? '\n' : '\n'.codePointAt();
	const CR = typeof input === 'string' ? '\r' : '\r'.codePointAt();

	if (input.at(-1) === LF) {
		input = input.slice(0, -1);
	}

	if (input.at(-1) === CR) {
		input = input.slice(0, -1);
	}

	return input;
}
