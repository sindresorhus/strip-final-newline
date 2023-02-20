# strip-final-newline

> Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from a string/buffer

Can be useful when parsing the output of, for example, `ChildProcess#execFile`, as [binaries usually output a newline at the end](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline). Normally, you would use `stdout.trim()`, but that would also remove newlines at the start and whitespace.

## Install

```sh
npm install strip-final-newline
```

## Usage

```js
import stripFinalNewline from 'strip-final-newline';

stripFinalNewline('foo\nbar\n\n');
//=> 'foo\nbar\n'

stripFinalNewline(Buffer.from('foo\nbar\n\n')).toString();
//=> 'foo\nbar\n'
```
