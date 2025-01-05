import Head from "next/head";
import { Background } from "./components/Background";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Background />
        <BackgroundBeams className="absolute" />
      </main>
    </div>
  );
}
