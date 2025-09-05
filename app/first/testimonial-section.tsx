"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Logan Kilpatrick",
    company: "Google",
    content:
      "Started using Cursor yesterday & I'm blown away. It's how Copilot should feel. I'm completely off VSCode now.",
    avatar: "/professional-developer-avatar.png",
  },
  {
    id: "2",
    name: "Ben Bernard",
    company: "Instacart",
    content:
      "After many recommendations, I finally switched from VSC to Cursor and... wow! It's absolutely incredible. If you like Copilot (or if you don't), you'll be blown away by Cursor. There is no going back. 🤯",
    avatar: "/tech-lead-avatar.png",
  },
  {
    id: "3",
    name: "Sam Whitmore",
    company: "New Computer",
    content:
      "Cursor is the best product I've used in a while - it's an AI enabled editor. I just asked it to write a README for a project I've been working on.",
    avatar: "/startup-founder-avatar.png",
  },
  {
    id: "4",
    name: "Johannes Schickling",
    company: "Prisma",
    content:
      "The Cursor tab completion while coding is occasionally so magic it defies reality - about ~25% of the time it is anticipating exactly what I want to do. It is enough to make you believe that eventually you'll be able to code at the speed of thought.",
    avatar: "/cto-developer-avatar.jpg",
  },
  {
    id: "5",
    name: "Steven Tey",
    company: "Dub",
    content: "Cursor is 🔥-ed for real",
    avatar: "/indie-hacker-avatar.jpg",
  },
  {
    id: "6",
    name: "Kevin Whinnery",
    company: "OpenAI",
    content:
      "Cursor is hands down my biggest workflow upgrade in years. The AI pair programming experience is incredible.",
    avatar: "/ai-researcher-avatar.jpg",
  },
  {
    id: "7",
    name: "Sarah Chen",
    company: "Vercel",
    content:
      "I've tried every AI coding assistant out there, but Cursor is in a league of its own. The context awareness is phenomenal.",
    avatar: "/frontend-engineer-avatar.jpg",
  },
  {
    id: "8",
    name: "Alex Rodriguez",
    company: "Stripe",
    content:
      "Cursor has completely transformed how I write code. The suggestions are so accurate it feels like it's reading my mind.",
    avatar: "/backend-engineer-avatar.jpg",
  },
];

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border flex flex-col justify-between transition-all duration-300 hover:shadow-xl px-4 py-3 relative group",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex z-[-1]",
          "bg-gradient-to-b from-background/40 via-background/10 to-primary/60 opacity-0 group-hover:opacity-100 ",
          className
        )}
        style={{
          maskImage:
            "linear-gradient(0deg, rgba(255, 255, 255,0.2), rgb(255, 255, 255,0))",
        }}
      />

      <p className="text-foreground group-hover:text-primary-foreground transition-colors leading-relaxed">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-4 mt-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
          />
          <AvatarFallback>
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function AnimatedColumn({
  testimonials,
  direction = "up",
  className,
}: {
  testimonials: Testimonial[];
  direction?: "up" | "down";
  className?: string;
}) {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={cn("flex flex-col gap-6 overflow-hidden", className)}>
      <div
        className={cn(
          "flex flex-col gap-6 animate-scroll",
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        )}
        style={{
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            className="min-h-[200px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 8);

  return (
    <div className="relative">
      {/* Gradient masks for smooth fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden">
        <AnimatedColumn
          testimonials={column1}
          direction="up"
          className="h-full"
        />
        <AnimatedColumn
          testimonials={column2}
          direction="down"
          className="h-full hidden md:flex"
        />
        <AnimatedColumn
          testimonials={column3}
          direction="up"
          className="h-full hidden lg:flex"
        />
      </div>
    </div>
  );
}
