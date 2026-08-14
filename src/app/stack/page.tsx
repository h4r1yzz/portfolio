import { skillGroups } from "@/content/site";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiApacheairflow,
  SiCursor,
  SiGooglecloud,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAzure, TbBrandOpenai } from "react-icons/tb";

type Skill = (typeof skillGroups)[number]["items"][number];

const skillIcons: Record<Skill, IconType> = {
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  LangChain: SiLangchain,
  OpenAI: TbBrandOpenai,
  Cursor: SiCursor,
  AWS: FaAws,
  "Google Cloud": SiGooglecloud,
  Azure: TbBrandAzure,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Apache Airflow": SiApacheairflow,
};

export default function StackPage() {
  return (
    <main className="page">
      <PageHeader label="Tools" title="Stack" />

      <div className="stack-groups">
        {skillGroups.map((group) => (
          <section key={group.title} className="stack-group">
            <h2 className="section-label stack-group__title">{group.title}</h2>
            <ul className="stack-list">
              {group.items.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <li key={skill} className="stack-list__item">
                    <Icon className="stack-list__icon" aria-hidden />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
