# ts7-portability-lab

Minimal reproduction for a TS7 `tsgo --build` portability regression with project references.

## Shape

- `packages/feature-gating` exports a selector factory whose return type mentions its own `State`
- `packages/app` exports an inferred selector created from that factory
- the workspace uses composite builds and project references

## Repro

```bash
pnpm install
pnpm build
pnpm build:tsgo
```

## Expected

`pnpm build` and `pnpm build:tsgo` should both pass.

## Actual

`pnpm build` passes, but `pnpm build:tsgo` fails with:

```text
packages/app/src/index.ts(3,14): error TS2883: The inferred type of 'isFooEnabled' cannot be named without a reference to 'State' from '../node_modules/@lab/feature-gating/src/types.js'. This is likely not portable. A type annotation is necessary.
```

## Tool Versions

- `typescript`: `6.0.3`
- `@typescript/native-preview`: `7.0.0-dev.20260421.2`
