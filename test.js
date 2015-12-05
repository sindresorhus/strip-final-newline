import test from 'ava';
import fn from './';

test('string', t => {
	t.is(fn('foo\n'), 'foo');
	t.is(fn('foo\nbar\n'), 'foo\nbar');
	t.is(fn('foo\n\n\n'), 'foo\n\n');
	t.is(fn('foo\r\n'), 'foo');
	t.is(fn('foo\r'), 'foo');
	t.is(fn('foo\n\r\n'), 'foo\n');
});

test('buffer', t => {
	t.is(fn(new Buffer('foo\n')).toString(), 'foo');
	t.is(fn(new Buffer('foo\nbar\n')).toString(), 'foo\nbar');
	t.is(fn(new Buffer('foo\n\n\n').toString()), 'foo\n\n');
	t.is(fn(new Buffer('foo\r\n')).toString(), 'foo');
	t.is(fn(new Buffer('foo\r')).toString(), 'foo');
	t.is(fn(new Buffer('foo\n\r\n')).toString(), 'foo\n');
});
