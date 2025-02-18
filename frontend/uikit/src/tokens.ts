import type { Token } from "./types";

// import tokenBold from "./token-icons/bold.svg";
import tokenEth from "./token-icons/eth.svg";
// import tokenLqty from "./token-icons/lqty.svg";
import tokenLusd from "./token-icons/lusd.svg";
// import tokenMaticx from "./token-icons/maticx.svg";
import tokenMaticx from "./token-icons/pol/maticx.webp";
import tokenPol from "./token-icons/pol/pol.svg";
import tokenWbtc from "./token-icons/pol/wbtc.svg";
// import tokenReth from "./token-icons/reth.svg";
// import tokenSteth from "./token-icons/wsteth.svg";

// type SupportedChain = "pol" | "sei";

// const currentChain = "pol" as SupportedChain; // todo: replace with NEXT_PUBLIC_CHAIN

type PolCollateralSymbol = "POL" | "ETH" | "WBTC" | "MATICX";
// type PolStableCoinSymbol = "USP";

// type BoldCollateralSymbol = "ETH" | "RETH" | "WSTETH";

export type CollateralSymbol = PolCollateralSymbol;

export function isCollateralSymbol(symbol: string): symbol is CollateralSymbol {
  return symbol === "ETH" || symbol === "POL" || symbol === "WBTC"
    || symbol === "MATICX";
}

export type CollateralToken = Token & {
  collateralRatio: number;
  symbol: CollateralSymbol;
};

// BOLD
// export const LUSD: Token = {
//   icon: tokenLusd,
//   name: "LUSD",
//   symbol: "LUSD" as const,
// } as const;

// export const BOLD: Token = {
//   icon: tokenBold,
//   name: "STABLE_COIN",
//   symbol: "BOLD" as const,
// } as const;

// export const LQTY: Token = {
//   icon: tokenLqty,
//   name: "LQTY",
//   symbol: "LQTY" as const,
// } as const;

export const ETH: CollateralToken = {
  collateralRatio: 1.1,
  icon: tokenEth,
  name: "ETH",
  symbol: "ETH" as const,
} as const;

// export const RETH: CollateralToken = {
//   collateralRatio: 1.2,
//   icon: tokenReth,
//   name: "rETH",
//   symbol: "RETH" as const,
// } as const;

// export const WSTETH: CollateralToken = {
//   collateralRatio: 1.2,
//   icon: tokenSteth,
//   name: "wstETH",
//   symbol: "WSTETH" as const,
// } as const;

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

export const COLLATERALS: CollateralToken[] = [
  ...POLYGON_COLLATERALS,
];

export const TOKENS_BY_SYMBOL = {
  // BOLD,
  ETH,
  // LQTY,
  // RETH,

  // WSTETH,
  // LUSD,
  // SG,
  PG,
  USP,
  POL,
  WBTC,
  MATICX,
} as const;
