import dynamic from "next/dynamic";

const HomeDomain = dynamic(() =>
  import("@/domains/home").then((mod) => mod.HomeDomain)
);

export default function HomePage() {
  return <HomeDomain />;
}
