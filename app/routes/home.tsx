import type { Route } from "./+types/home";
import { ComingSoon } from "./landing/comingSoon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Duck Organization" },
    { property: "og:image", content: "https://duckorg.com/logoBanner.svg" },
    { name: "description", content: "The one and only Duck Organization." },
  ];
}

export default function Home() {
  return <ComingSoon />;
}
