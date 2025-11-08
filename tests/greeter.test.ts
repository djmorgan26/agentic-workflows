/**
 * Tests for Greeter Module
 */

import { greet, farewell } from '../src/greeter';

describe('Greeter Module', () => {
  describe('greet()', () => {
    it('should return a simple greeting when no time is specified', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
    });

    it('should return a time-specific greeting when time is provided', () => {
      expect(greet('Bob', 'morning')).toBe('Good morning, Bob!');
      expect(greet('Charlie', 'afternoon')).toBe('Good afternoon, Charlie!');
      expect(greet('Diana', 'evening')).toBe('Good evening, Diana!');
    });

    it('should handle names with extra whitespace', () => {
      expect(greet('  Eve  ')).toBe('Hello, Eve!');
      expect(greet('  Frank  ', 'morning')).toBe('Good morning, Frank!');
    });

    it('should throw error for empty name', () => {
      expect(() => greet('')).toThrow('Name cannot be empty');
      expect(() => greet('   ')).toThrow('Name cannot be empty');
    });

    it('should throw error for invalid time of day', () => {
      expect(() => greet('Grace', 'midnight')).toThrow('Invalid time of day');
    });

    it('should be case-insensitive for time of day', () => {
      expect(greet('Henry', 'MORNING')).toBe('Good morning, Henry!');
      expect(greet('Iris', 'AfTeRnOoN')).toBe('Good afternoon, Iris!');
    });
  });

  describe('farewell()', () => {
    it('should return a farewell message', () => {
      expect(farewell('Jack')).toBe('Goodbye, Jack! Thanks for using the AI knowledge system.');
    });

    it('should handle names with whitespace', () => {
      expect(farewell('  Kate  ')).toBe('Goodbye, Kate! Thanks for using the AI knowledge system.');
    });

    it('should throw error for empty name', () => {
      expect(() => farewell('')).toThrow('Name cannot be empty');
      expect(() => farewell('   ')).toThrow('Name cannot be empty');
    });
  });
});
