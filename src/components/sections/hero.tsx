import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <BlurIn delay={0.5} className="md:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/me.png"
                  alt="Waguea Carine Fongang"
                  width={160}
                  height={160}
                  className="mx-auto mb-4 h-36 w-36 rounded-full border-4 border-primary/20 object-cover shadow-xl"
                />
              </BlurIn>
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Computer Engineering
                  </p>
                </BlurIn>
                <BlurIn delay={1.35}>
                  <p
                    className={cn(
                      "md:self-start mt-1 font-medium text-slate-500 dark:text-zinc-500",
                      "cursor-default text-sm sm:text-base md:text-lg whitespace-nowrap bg-clip-text "
                    )}
                  >
                    <Link
                      href="https://www.upenn.edu/"
                      target="_blank"
                      className="underline-offset-4 hover:underline"
                    >
                      University of Pennsylvania
                    </Link>
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href="mailto:fongang7@engineering.upenn.edu?subject=Resume%20request&body=Hi%20Carine%2C%20I%20need%20your%20resume."
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    {config.social.github ? (
                      <Link
                        href={config.social.github}
                        target="_blank"
                        className="cursor-can-hover"
                      >
                        <Button variant={"outline"}>
                          <SiGithub size={24} />
                        </Button>
                      </Link>
                    ) : null}
                    {config.social.linkedin ? (
                      <Link
                        href={config.social.linkedin}
                        target="_blank"
                        className="cursor-can-hover"
                      >
                        <Button variant={"outline"}>
                          <SiLinkedin size={24} />
                        </Button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="z-[2] col-span-1 hidden items-center justify-center md:flex">
          {!isLoading && (
            <BlurIn delay={1.4}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/me.png"
                alt="Waguea Carine Fongang"
                width={320}
                height={320}
                className="h-64 w-64 rounded-full border-4 border-primary/20 object-cover shadow-2xl lg:h-80 lg:w-80"
              />
            </BlurIn>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
