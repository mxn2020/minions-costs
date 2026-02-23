/**
 * @module @minions-costs/sdk/schemas
 * Custom MinionType schemas for Minions Costs.
 */

import type { MinionType } from 'minions-sdk';

export const costentryType: MinionType = {
  id: 'costs-cost-entry',
  name: 'Cost entry',
  slug: 'cost-entry',
  description: 'A single trackable cost line from an agent run or operation.',
  icon: '💸',
  schema: [
    { name: 'sourceId', type: 'string', label: 'sourceId' },
    { name: 'sourceType', type: 'select', label: 'sourceType' },
    { name: 'agentId', type: 'string', label: 'agentId' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'model', type: 'string', label: 'model' },
    { name: 'tokensUsed', type: 'number', label: 'tokensUsed' },
    { name: 'incurredAt', type: 'string', label: 'incurredAt' },
    { name: 'description', type: 'string', label: 'description' },
  ],
};

export const budgetType: MinionType = {
  id: 'costs-budget',
  name: 'Budget',
  slug: 'budget',
  description: 'A spending cap for an agent, workflow, or time period.',
  icon: '💰',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'ownerType', type: 'select', label: 'ownerType' },
    { name: 'limitAmount', type: 'number', label: 'limitAmount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'period', type: 'select', label: 'period' },
    { name: 'currentSpend', type: 'number', label: 'currentSpend' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'alertThreshold', type: 'number', label: 'alertThreshold' },
  ],
};

export const costledgerType: MinionType = {
  id: 'costs-cost-ledger',
  name: 'Cost ledger',
  slug: 'cost-ledger',
  description: 'An aggregated spending summary across a period or scope.',
  icon: '📊',
  schema: [
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'ownerType', type: 'select', label: 'ownerType' },
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'totalAmount', type: 'number', label: 'totalAmount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'entryIds', type: 'string', label: 'entryIds' },
  ],
};

export const customTypes: MinionType[] = [
  costentryType,
  budgetType,
  costledgerType,
];

