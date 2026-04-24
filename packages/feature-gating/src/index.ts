import type { State } from "./types.js";

export type Selector<TState, TResult> = (state: TState) => TResult;

export const createFeatureGateSelector =
  (featureGate: string) =>
  (state: State): boolean =>
    state.featureGates.includes(featureGate);
