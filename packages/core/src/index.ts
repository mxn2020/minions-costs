/**
 * Minions Costs SDK
 *
 * Cost tracking, budgets, and financial ledgers for agent operations
 *
 * @module @minions-costs/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Costs.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
