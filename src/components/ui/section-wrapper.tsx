"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// Plain section shell. (An earlier version faded/scaled each section with
// scroll position, which made neighboring sections visibly overlap — removed.)
const SectionWrapper = ({ id, className, children, ...props }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
