import { existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { education, site, work } from "@/content/site";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";

export default function AboutPage() {
  const resumePath = join(process.cwd(), "public", "resume.pdf");
  const hasResume = existsSync(resumePath);

  return (
    <main className="page">
      <PageHeader label="Personal" title="About" />

      <article className="prose max-w-[640px]">
        <p>{site.intro}</p>

        {hasResume && (
          <p>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume ↗
            </Link>
          </p>
        )}

        <h2>Work</h2>
        {work.map((job) => (
          <div key={`${job.company}-${job.date}`} className="entry mb-8">
            <span className="entry__date">{job.date}</span>
            <p className="!mb-1 !text-foreground font-medium">
              {job.role} · {job.company}
            </p>
            <p>{job.description}</p>
          </div>
        ))}

        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.school} className="entry mb-6">
            <span className="entry__date">{edu.date}</span>
            <p className="!mb-1 !text-foreground font-medium">{edu.degree}</p>
            <p className="!mb-0 !text-sm">{edu.school}</p>
          </div>
        ))}
      </article>

      <Footer />
    </main>
  );
}
