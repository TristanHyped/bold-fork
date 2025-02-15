export type Address = `0x${string}`;

export type Direction = -1 | 1;

export type TokenSymbol =
  // | "BOLD" // BOLD
  // | "LQTY" // BOLD
  // | "RETH" // BOLD
  // | "LUSD" // BOLD
  // | "WSTETH" // BOLD
  | "ETH" // BOLD & POLYGON
  | "USP" // POLYGON
  | "POL" // POLYGON
  | "WBTC" // POLYGON
  | "MATICX" // POLYGON
  // | "SG" // SEI
  | "PG"; // SEI

export type Token = {
  icon: string;
  name: string;
  symbol: TokenSymbol;
};

export type StatusMode = "positive" | "warning" | "negative" | "neutral";
