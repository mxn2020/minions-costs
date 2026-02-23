# minions-costs

**Cost tracking, budgets, and financial ledgers for agent operations**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-costs/sdk minions-sdk

# Python
pip install minions-costs

# CLI (global)
npm install -g @minions-costs/cli
```

---

## CLI

```bash
# Show help
costs --help
```

---

## Python SDK

```python
from minions_costs import create_client

client = create_client()
```

---

## Project Structure

```
minions-costs/
  packages/
    core/           # TypeScript core library (@minions-costs/sdk on npm)
    python/         # Python SDK (minions-costs on PyPI)
    cli/            # CLI tool (@minions-costs/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [costs.minions.help](https://costs.minions.help)
- Blog: [costs.minions.blog](https://costs.minions.blog)
- App: [costs.minions.wtf](https://costs.minions.wtf)

---

## License

[MIT](LICENSE)
