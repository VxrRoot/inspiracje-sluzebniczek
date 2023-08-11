import Image from "next/image";
import Link from "next/link";
import HandsSvg from "../../public/hands.svg";

export default function Home() {
  console.log("siema");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cover text-black  bg-center bg-desktop-bg max-h-screen">
      <div className="tracking-wider flex flex-col gap-8 items-center">
        <Image
          src={HandsSvg}
          alt="praying hands"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-center text-2xl uppercase">
          Inspiracje <br></br>
          służebniczek
        </h1>
        <Link href="/losuj-cytat" legacyBehavior>
          <a className="px-4 py-2 border border-black hover:border-cyan-400 transition-colors">
            Losuj cytat
          </a>
        </Link>
      </div>
    </main>
  );
}
