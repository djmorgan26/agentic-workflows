/**
 * Greeter Module
 *
 * Provides greeting functionality for the AI knowledge management system.
 * This is a simple demonstration feature to test the /capture workflow.
 */

/**
 * Generate a personalized greeting message
 *
 * @param name - The name of the person to greet
 * @param timeOfDay - Optional time of day (morning, afternoon, evening)
 * @returns A formatted greeting string
 */
export function greet(name: string, timeOfDay?: string): string {
  if (!name || name.trim() === '') {
    throw new Error('Name cannot be empty');
  }

  const sanitizedName = name.trim();

  if (timeOfDay) {
    const validTimes = ['morning', 'afternoon', 'evening'];
    if (!validTimes.includes(timeOfDay.toLowerCase())) {
      throw new Error(`Invalid time of day. Must be one of: ${validTimes.join(', ')}`);
    }
    return `Good ${timeOfDay.toLowerCase()}, ${sanitizedName}!`;
  }

  return `Hello, ${sanitizedName}!`;
}

/**
 * Generate a farewell message
 *
 * @param name - The name of the person to bid farewell
 * @returns A formatted farewell string
 */
export function farewell(name: string): string {
  if (!name || name.trim() === '') {
    throw new Error('Name cannot be empty');
  }

  return `Goodbye, ${name.trim()}! Thanks for using the AI knowledge system.`;
}
