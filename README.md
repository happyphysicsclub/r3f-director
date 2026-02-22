# @happyphysicsclub/r3f-director

Reusable React Three Fiber (R3F) components and utilities for building 3D scenes.

- ✅ R3F-first components (camera rigs, helpers, scene primitives, etc.)
- ✅ TypeScript + ESM/CJS + `.d.ts`
- ✅ Works with Next.js / Vite (consumer side)
- ✅ Monorepo includes a Next.js demo app

---

## Install (as a dependency)

### npm

```bash
npm i @happyphysicsclub/r3f-director
```

### yarn

```bash
yarn add @happyphysicsclub/r3f-director
```

### pnpm

```bash
pnpm add @happyphysicsclub/r3f-director
```

## Peer dependencies

This package expects the host app to provide these dependencies:

- react, react-dom
- three
- @react-three/fiber

If you use components that rely on them, you may also need:

- @react-three/drei
- postprocessing + @react-three/postprocessing
- three-stdlib

_Tip: install peers in your app if you see warnings during install._

## Authors

[happyphysicsclub](https://happyphysics.club) ([Yewon Jang](https://github.com/YewonCALLI) & [Sejin Oh](https://github.com/designerSejinOH))
