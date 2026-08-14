import { skills } from "@/content/site";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiApacheairflow,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

const skillIcons: Record<(typeof skills)[number], IconType> = {
  TypeScript: SiTypescript,
  Python: SiPython,
  "Next.js": SiNextdotjs,
  AWS: FaAws,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Apache Airflow": SiApacheairflow,
};

export default function StackPage() {
  return (
    <main className="page">
      <PageHeader label="Tools" title="Stack" />

      <ul className="stack-list">
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          return (
            <li key={skill} className="stack-list__item">
              <Icon className="stack-list__icon" aria-hidden />
              {skill}
            </li>
          );
        })}
      </ul>

      <Footer />
    </main>
  );
}
