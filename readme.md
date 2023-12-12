# strip-final-newline

> Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from a string or Uint8Array.

This can be useful when parsing the output of, for example, `ChildProcess#execFile()`, as [binaries usually output a newline at the end](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline). You cannot use `stdout.trimEnd()` for this as it removes all trailing newlines and whitespaces at the end.

## Install

```sh
npm install strip-final-newline
```

## Usage

```js
import stripFinalNewline from 'strip-final-newline';

stripFinalNewline('foo\nbar\n\n');
//=> 'foo\nbar\n'

const uint8Array = new TextEncoder().encode('foo\nbar\n\n')
new TextDecoder().decode(stripFinalNewline(uint8Array));
//=> 'foo\nbar\n'
```
