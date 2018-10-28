import test from 'ava';
import stripEof from '.';

test('string', t => {
	t.is(stripEof('foo\n'), 'foo');
	t.is(stripEof('foo\nbar\n'), 'foo\nbar');
	t.is(stripEof('foo\n\n\n'), 'foo\n\n');
	t.is(stripEof('foo\r\n'), 'foo');
	t.is(stripEof('foo\r'), 'foo');
	t.is(stripEof('foo\n\r\n'), 'foo\n');
});

test('buffer', t => {
	t.is(stripEof(Buffer.from('foo\n')).toString(), 'foo');
	t.is(stripEof(Buffer.from('foo\nbar\n')).toString(), 'foo\nbar');
	t.is(stripEof(Buffer.from('foo\n\n\n').toString()), 'foo\n\n');
	t.is(stripEof(Buffer.from('foo\r\n')).toString(), 'foo');
	t.is(stripEof(Buffer.from('foo\r')).toString(), 'foo');
	t.is(stripEof(Buffer.from('foo\n\r\n')).toString(), 'foo\n');
});
