export const createFeatureGateSelector = (featureGate) => (state) => state.featureGates.includes(featureGate);
