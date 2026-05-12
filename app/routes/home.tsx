import type { Route } from "./+types/home";
import { ComingSoon } from "./landing/comingSoon";
import logoBanner from './landing/logoBanner.svg'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Duck Organization" },
    { image: logoBanner },
    { name: "description", content: "The one and only Duck Organization." },
  ];
}

export default function Home() {
  return <ComingSoon />;
}
