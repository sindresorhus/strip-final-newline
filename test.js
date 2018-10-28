import test from 'ava';
import stripFinalNewline from '.';

test('string', t => {
	t.is(stripFinalNewline('foo\n'), 'foo');
	t.is(stripFinalNewline('foo\nbar\n'), 'foo\nbar');
	t.is(stripFinalNewline('foo\n\n\n'), 'foo\n\n');
	t.is(stripFinalNewline('foo\r\n'), 'foo');
	t.is(stripFinalNewline('foo\r'), 'foo');
	t.is(stripFinalNewline('foo\n\r\n'), 'foo\n');
});

test('buffer', t => {
	t.is(stripFinalNewline(Buffer.from('foo\n')).toString(), 'foo');
	t.is(stripFinalNewline(Buffer.from('foo\nbar\n')).toString(), 'foo\nbar');
	t.is(stripFinalNewline(Buffer.from('foo\n\n\n').toString()), 'foo\n\n');
	t.is(stripFinalNewline(Buffer.from('foo\r\n')).toString(), 'foo');
	t.is(stripFinalNewline(Buffer.from('foo\r')).toString(), 'foo');
	t.is(stripFinalNewline(Buffer.from('foo\n\r\n')).toString(), 'foo\n');
});
