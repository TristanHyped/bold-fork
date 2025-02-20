export function generateStaticParams() {
  return process.env.NEXT_PUBLIC_CHAIN === "pol"
    ? [
      { collateral: "pol" },
      { collateral: "eth" },
      { collateral: "wbtc" },
      { collateral: "maticx" },
    ]
    : [
      { collateral: "pol" },
      { collateral: "eth" },
      { collateral: "wbtc" },
      { collateral: "" },
    ];
}

export default function BorrowCollateralPage() {
  // see layout in parent folder
  return null;
}
