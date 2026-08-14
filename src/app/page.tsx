import { connectLinks, elsewhereLinks, moreLinks, projects, site } from "@/content/site";
import EditorialLink from "@/components/editorial-link";
import Footer from "@/components/footer";
import IdentityMarquee from "@/components/identity-marquee";
import ProjectRow from "@/components/project-row";
import RoleRotator from "@/components/role-rotator";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="page">
      <header className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <h1 className="hero-name">{site.name}</h1>
          <RoleRotator roles={site.roles} location={site.location} />
          <p className="hero-desc mt-6">{site.description}</p>
        </div>
        <div className="hidden md:block">
          <IdentityMarquee
            className="text-foreground-secondary"
            text={site.marquee}
          />
        </div>
      </header>

      <Section title="More">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {moreLinks.map((link) => (
            <EditorialLink
              key={link.href}
              title={link.title}
              meta={link.meta}
              href={link.href}
            />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            id={project.id}
            year={project.year}
            title={project.title}
            summary={project.summary}
            href={project.href}
            image={project.image}
            badge={"badge" in project ? project.badge : undefined}
          />
        ))}
      </Section>

      <Section title="Elsewhere">
        {elsewhereLinks.map((link) => (
          <EditorialLink
            key={link.title}
            title={link.title}
            meta={link.meta}
            href={link.href}
            layout="row"
            icon="chevron"
          />
        ))}
      </Section>

      <Section title="Connect">
        {connectLinks.map((link) => (
          <EditorialLink
            key={link.title}
            title={link.title}
            meta={link.meta}
            href={link.href}
            layout="row"
            external={link.external}
            icon="external"
          />
        ))}
      </Section>

      <Footer />
    </main>
  );
}
