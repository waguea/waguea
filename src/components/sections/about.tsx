import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Programming Languages & Techniques I/II",
  "Mathematical Foundations of Computer Science",
  "Introduction to Computer Systems",
  "Electrical Circuits and Systems",
];

const AboutSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[80vh] py-20">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          className="mb-12 md:mb-16 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="bg-card text-card-foreground border-border shadow-sm">
            <CardContent className="pt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m from Cameroon, and I&apos;ve been into robotics since my
                first year of high school. Since then I&apos;ve carried out a
                lot of initiatives to get others — especially girls — involved
                in STEM.
              </p>
              <p>
                Now I&apos;m studying Computer Engineering at the{" "}
                <a
                  href="https://www.upenn.edu/"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  University of Pennsylvania
                </a>
                . I&apos;m part of the Wharton Undergraduate Data Analytics
                Club.
              </p>
              <p>
                In 2024, I won the Africanist Award in the Engineering
                Leadership Program hosted by Chevron x ALA (African Leadership
                Academy).
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="font-mono text-xs font-normal"
                >
                  Open Dreams Scholar
                </Badge>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                  Coursework so far
                </p>
                <div className="flex flex-wrap gap-2">
                  {COURSEWORK.map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="font-mono text-xs font-normal"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
