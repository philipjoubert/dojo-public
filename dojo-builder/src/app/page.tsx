import { Dojo } from "@/components/dojo";
import { PERSONAS } from "@/lib/personas.generated";

export default function Home() {
  return <Dojo personas={PERSONAS} />;
}
