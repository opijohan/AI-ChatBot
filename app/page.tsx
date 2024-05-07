import Image from "next/image";
import Link from "next/link";
import Feature from "./feature";
import { CiTimer } from "react-icons/ci";
import { SiEasyeda } from "react-icons/si";
import { GrSecure } from "react-icons/gr";

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <h1 className="max-w-2xl md:text-5xl scroll-m-20 text-3xl font-extrabold tracking-tight">
          Reliability. Trust. Confidence.
          <br />
          Religion AI
        </h1>
        <h5 className="max-w-2xl scroll-m-18 text-lg tracking-tight text-minor">
          Quickly get to know your religion. With confidence. Religion AI can
          help you.
        </h5>
        <Link href="/" target="_blank">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 max-w-fit h-8 rounded-md px-4 py-1 bg-[#C2A5AA] font-semibold hover:bg-primary/90 text-[#0B0808]">
            Get Started
          </button>
        </Link>
        <Image width={1024} height={632} alt="hero image" src="/hero.png" />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="max-w-2xl md:text-5xl scroll-m-20 text-3xl font-extrabold tracking-tight">
            Fast and reliable
          </h1>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<CiTimer />}
              headline="Save time"
              description="Religion AI will save you time and effort."
            />
            <Feature
              icon={<SiEasyeda />}
              headline="Easy to use"
              description="Simply ask Religion AI and it will do the rest."
            />
            <Feature
              icon={<GrSecure />}
              headline="Secure"
              description="Religion AI will never leave your side."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <h1 className="max-w-2xl md:text-5xl scroll-m-20 text-3xl font-extrabold tracking-tight">
            Instant solutions to your problems
          </h1>
          <p className="max-w-2xl md:text-sm text-sm leading-7 text-minor">
            Got a problem? Religion AI will help you. Need questions to be
            answered? Religion AI will help you.
          </p>
          <Image width={1024} height={632} alt="hero image" src="/hero.png" />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="max-w-2xl md:text-5xl scroll-m-20 text-3xl font-extrabold tracking-tight">
            Start your journey
          </h1>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 max-w-fit h-8 rounded-md px-4 py-1 bg-[#C2A5AA] font-semibold hover:bg-primary/90 text-[#0B0808]">
              {`Get Started`}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
