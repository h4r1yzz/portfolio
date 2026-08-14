import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";

export default function ProjectsPage() {
  return (
    <main className="page">
      <PageHeader label="Work" title="Projects" />

      <div className="space-y-16 max-w-[640px]">
        {projects.map((project) => {
          const comingSoon = "badge" in project && Boolean(project.badge);

          return (
            <section key={project.id} id={project.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-lg font-medium tracking-tight text-foreground">
                  {project.title}
                </h2>
                {comingSoon && (
                  <span className="project-row__badge">{project.badge}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted">{project.summary}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground-secondary">
                {project.description}
              </p>
              {project.image && (
                <div className="mt-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={400}
                    unoptimized
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              {!comingSoon && (
                <p className="mt-4">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground"
                  >
                    View on GitHub ↗
                  </Link>
                </p>
              )}
            </section>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
