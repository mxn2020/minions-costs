"""
Minions Costs Python SDK

Cost tracking, budgets, and financial ledgers for agent operations
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Costs.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
