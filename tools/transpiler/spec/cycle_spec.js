import {describe, it, expect} from 'test_lib/test_lib';
import {cycle} from './cycle';

export function main() {
  describe('cycle', function() {
    it('should work', function() {
      expect(cycle()).toBe(true);
    });
  });
}

export var foo = true;

