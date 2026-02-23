---
title: Quick Start
description: Get up and running with Minions Costs in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-costs/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_costs import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
costs info
```
