# eslint-boundaries-test

Test project for eslint boundaries plugin

Project has following folder structure:

```
src/
├── core/
│   ├── contracts
│   ├── use_cases
│   └── domain/
│       ├── entities
│       └── store
│
├── ui
├── services
├── shared
├── utils
└── index.ts
```

According to clean architecture principles, every layer should have its own boundaries

-   root script: [utils]
-   contracts: [domain] and only types
-   domain entities: [shared]
-   domain store: [contracts, entities, shared],
-   use_cases: [contracts, domain, services, shared]
-   services: [contracts, shared]
-   ui: [contracts, entities, use_cases, shared]
-   utils: [*]
