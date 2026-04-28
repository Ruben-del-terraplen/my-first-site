import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** Edit this block with your details */
const designer = {
  name: "Ruben Curbelo",
  title: "Product designer",
  tagline:
    "Brand systems, editorial layout, and campaign art direction for teams who care how things feel.",
  email: "hello@example.com",
} as const;

const projects = [
  {
    title: "Lumen Roasters",
    category: "Brand identity",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Northwind Annual",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pulse Festival",
    category: "Campaign",
    image:
      "https://images.unsplash.com/photo-1558655146-364290a19536?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Studio Merch",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1634947757190-fefd1b01a6b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Type Week",
    category: "Key art",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Harbor Records",
    category: "Album art",
    image:
      "https://images.unsplash.com/photo-1618005188914-6841d4b52e49?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-full bg-background">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 size-[42rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 size-[36rem] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-10 border-b border-border/80 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <p className="font-heading text-sm font-medium tracking-tight text-foreground">
            {designer.name}
          </p>
          <nav className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#work">Work</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button size="sm" asChild>
              <a href={`mailto:${designer.email}`}>
                <Mail data-icon="inline-start" />
                Hire me
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:gap-32 md:pt-24">
        <section
          className="flex flex-col gap-10 md:gap-12"
          aria-labelledby="hero-heading"
        >
          <div className="flex flex-col gap-6 md:max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {designer.title}
            </p>
            <h1
              id="hero-heading"
              className="font-heading text-4xl leading-[1.05] font-medium tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl"
            >
              {designer.name}
            </h1>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
              {designer.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href="#work">
                <ArrowDown data-icon="inline-start" />
                View selected work
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Start a project</a>
            </Button>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-28"
          aria-labelledby="work-heading"
        >
          <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <h2
                id="work-heading"
                className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl"
              >
                Selected projects
              </h2>
              <p className="max-w-xl text-muted-foreground">
                A mix of identity, print, and digital campaigns — crafted for
                clarity and character.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="transition-shadow hover:shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={900}
                  height={675}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-border">
                  <Button variant="secondary" size="sm" className="w-full">
                    Case study
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28"
          aria-labelledby="contact-heading"
        >
          <Card className="overflow-hidden border-border/80 bg-card/80 shadow-lg ring-1 ring-border/60">
            <CardHeader className="border-b border-border pb-8">
              <CardTitle
                id="contact-heading"
                className="text-xl md:text-2xl"
              >
                Let&apos;s make something memorable
              </CardTitle>
              <CardDescription className="text-base">
                Share a short brief, timeline, and budget range. I typically
                reply within two business days.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 pt-8">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{designer.email}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`mailto:${designer.email}`}>
                    <Mail data-icon="inline-start" />
                    Write me an email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#work">Back to work</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {designer.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground/80">Built with care.</p>
        </div>
      </footer>
    </div>
  );
}
