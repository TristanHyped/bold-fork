import { EarnPoolScreen } from "@/src/screens/EarnPoolScreen/EarnPoolScreen";

export function generateStaticParams() {
  return [
    { pool: "pol" },
    { pool: "eth" },
    { pool: "wbtc" },
    { pool: "maticx" },
  ];
}

export default function Layout() {
  return <EarnPoolScreen />;
}
