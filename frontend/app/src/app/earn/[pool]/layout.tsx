import { EarnPoolScreen } from "@/src/screens/EarnPoolScreen/EarnPoolScreen";

export function generateStaticParams() {
  return process.env.NEXT_PUBLIC_CHAIN === "pol"
    ? [
      { pool: "pol" },
      { pool: "eth" },
      { pool: "wbtc" },
      { pool: "maticx" },
    ]
    : [
      { pool: "pol" },
      { pool: "eth" },
      { pool: "wbtc" },
      { pool: "" },
    ];
}

export default function Layout() {
  return <EarnPoolScreen />;
}
