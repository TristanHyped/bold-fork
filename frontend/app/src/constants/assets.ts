// import { CollateralToken, Token } from "@liquity2/uikit";

type SupportedChain = "pol" | "sei";

export type CustomTokenSymbols = "USP" | "POL" | "WBTC" | "MATICX" | "PG";

// type Asset = {
//   name: string;
//   symbol: CustomTokenSymbols;
// };

// export const stableCoinByChain: Record<SupportedChain, Asset> = {
//   pol: {
//     name: "Pigeon USD",
//     symbol: "USP",
//   },
//   sei: {
//     name: "SEIble",
//     symbol: "USP",
//   },
// };

// export const governanceCoinByChain: Record<SupportedChain, Asset> = {
//   pol: {
//     name: "Pigeon Governance",
//     symbol: "PG",
//   },
//   sei: {
//     name: "Sei Governance",
//     symbol: "SG",
//   },
// };
export const AppNameByChain: Record<SupportedChain, string> = {
  pol: "Pigeon Cash",
  sei: "Sei less",
};

const currentChain = "pol" as SupportedChain; // todo: replace with NEXT_PUBLIC_CHAIN

export const STABLE_COIN = {
  name: "Pigeon USD",
  symbol: "USP",
} as const;
export const GOVERNANCE_COIN = {
  name: "Pigeon Governance",
  symbol: "PG",
} as const;
export const APP_NAME = AppNameByChain[currentChain];
