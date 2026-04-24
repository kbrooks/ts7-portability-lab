import { createFeatureGateSelector } from "@lab/feature-gating";
export const isFooEnabled = createFeatureGateSelector("foo");
