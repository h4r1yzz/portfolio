import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="section-gap text-xs text-muted">
      © {new Date().getFullYear()} {site.name}
    </footer>
  );
}
