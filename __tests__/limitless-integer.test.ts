import { describe, expect, test } from '@jest/globals';
import { LimitlessInteger } from '../src/limitless-integer';

describe('LimitlessInteger', () => {
    test('add', () => {
        const a = new LimitlessInteger('123');
        const b = new LimitlessInteger('456');
        const c = a.add(b);
        expect(c.toString()).toBe('579');
    });
});
