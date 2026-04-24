import type { State } from "./types.js";
export type Selector<TState, TResult> = (state: TState) => TResult;
export declare const createFeatureGateSelector: (featureGate: string) => (state: State) => boolean;
