import type { Token } from "./types";

import tokenEth from "./token-icons/eth.svg";
import tokenLusd from "./token-icons/lusd.svg";
import tokenMaticx from "./token-icons/pol/maticx.webp";
import tokenPol from "./token-icons/pol/pol.svg";
import tokenWbtc from "./token-icons/pol/wbtc.svg";

type PolCollateralSymbol = "POL" | "ETH" | "WBTC" | "MATICX";
export const NATIVE_TOKEN = "POL" as const;

export type CollateralSymbol = PolCollateralSymbol;

export function isCollateralSymbol(symbol: string): symbol is CollateralSymbol {
  return symbol === "ETH" || symbol === "POL" || symbol === "WBTC"
    || symbol === "MATICX";
}

export type CollateralToken = Token & {
  collateralRatio: number;
  symbol: CollateralSymbol;
};

export const ETH: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenEth,
  name: "ETH",
  symbol: "ETH" as const,
} as const;

// POLYGON

export const USP: Token = {
  icon: tokenLusd,
  name: "USP",
  symbol: "USP" as const,
} as const;
export const POL: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenPol,
  name: "POL",
  symbol: "POL" as const,
} as const;

export const WBTC: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenWbtc,
  name: "WBTC",
  symbol: "WBTC" as const,
} as const;

export const MATICX: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenMaticx,
  name: "MATICX",
  symbol: "MATICX" as const,
} as const;

// export const SG: Token = {
//   icon: tokenPol,
//   name: "SG",
//   symbol: "SG" as const,
// } as const;

export const PG: Token = {
  icon: tokenPol,
  name: "PG",
  symbol: "PG" as const,
} as const;

// export const BOLD_COLLATERALS: CollateralToken[] = [
//   ETH,
//   RETH,
//   WSTETH,
// ];

export const POLYGON_COLLATERALS: CollateralToken[] = [
  POL,
  ETH,
  WBTC,
  MATICX,
];

// used for "Borrow against" in homepage
export const COLLATERALS_STRING = POLYGON_COLLATERALS.map((token) => token.symbol).join(", ");

// used for generate static params
// export const COLLATERAL_PATHS = ["pol", "weth", "wbtc", "maticx"] as const;

export const COLLATERALS: CollateralToken[] = [
  ...POLYGON_COLLATERALS,
];

export const TOKENS_BY_SYMBOL = {
  ETH,
  PG,
  USP,
  POL,
  WBTC,
  MATICX,
} as const;

type SupportedChain = "pol" | "sei";
const currentChain = "pol" as SupportedChain; // todo: replace with NEXT_PUBLIC_CHAIN

export type CustomTokenSymbols = "USP" | "PG" | "POL" | "WBTC" | "MATICX";

export const AppNameByChain: Record<SupportedChain, string> = {
  pol: "Pigeon Cash",
  sei: "Sei less",
};
export const APP_NAME = AppNameByChain[currentChain];

export const STABLE_COIN = {
  name: "Pigeon USD",
  symbol: "USP",
} as const;

// required for frontend server components
export const STABLE_COIN_SYMBOL = STABLE_COIN.symbol;
export const STABLE_COIN_NAME = STABLE_COIN.name;

export const GOVERNANCE_COIN = {
  name: "Pigeon Governance",
  symbol: "PG",
} as const;

export const GOVERNANCE_COIN_SYMBOL = GOVERNANCE_COIN.symbol;
export const GOVERNANCE_COIN_NAME = GOVERNANCE_COIN.name;

export const DOCS_URL = "https://docs.pigeon.cash";

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
