"""
Minions Costs SDK — Type Schemas
Custom MinionType schemas for Minions Costs.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

cost_entry_type = MinionType(
    id="costs-cost-entry",
    name="Cost entry",
    slug="cost-entry",
    description="A single trackable cost line from an agent run or operation.",
    icon="💸",
    schema=[
        FieldDefinition(name="sourceId", type="string", label="sourceId"),
        FieldDefinition(name="sourceType", type="select", label="sourceType"),
        FieldDefinition(name="agentId", type="string", label="agentId"),
        FieldDefinition(name="amount", type="number", label="amount"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="model", type="string", label="model"),
        FieldDefinition(name="tokensUsed", type="number", label="tokensUsed"),
        FieldDefinition(name="incurredAt", type="string", label="incurredAt"),
        FieldDefinition(name="description", type="string", label="description"),
    ],
)

budget_type = MinionType(
    id="costs-budget",
    name="Budget",
    slug="budget",
    description="A spending cap for an agent, workflow, or time period.",
    icon="💰",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="ownerType", type="select", label="ownerType"),
        FieldDefinition(name="limitAmount", type="number", label="limitAmount"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="period", type="select", label="period"),
        FieldDefinition(name="currentSpend", type="number", label="currentSpend"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="alertThreshold", type="number", label="alertThreshold"),
    ],
)

cost_ledger_type = MinionType(
    id="costs-cost-ledger",
    name="Cost ledger",
    slug="cost-ledger",
    description="An aggregated spending summary across a period or scope.",
    icon="📊",
    schema=[
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="ownerType", type="select", label="ownerType"),
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="totalAmount", type="number", label="totalAmount"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="entryIds", type="string", label="entryIds"),
    ],
)

custom_types: list[MinionType] = [
    cost_entry_type,
    budget_type,
    cost_ledger_type,
]

