import { Background } from "./components/Background";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
  return (
    <div>
      <main>
        <Background />
        <BackgroundBeams className="absolute" />
      </main>
    </div>
  );
}
