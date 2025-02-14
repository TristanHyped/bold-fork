type SupportedChain = "pol" | "sei";

type Asset = {
  name: string;
  label: string;
};

export const assetsByChain: Record<SupportedChain, Record<string, Asset>> = {
  pol: {
    STABLE_COIN: {
      name: "Pigeon USD",
      label: "USP",
    },
  },
  sei: {
    STABLE_COIN: {
      name: "SEIble",
      label: "USS",
    },
  },
};

export const AppNameByChain: Record<SupportedChain, string> = {
  pol: "Pigeon Cash",
  sei: "Sei less",
};

const currentChain = "pol" as SupportedChain;
const assets = assetsByChain[currentChain];

export const STABLE_COIN = assets.STABLE_COIN as Asset;
export const APP_NAME = AppNameByChain[currentChain];
