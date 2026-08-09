import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { GITHUB, LINKEDIN } from "../../i18n/content";

const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN, Icon: LinkedInIcon },
  { label: "GitHub", href: GITHUB, Icon: GitHubIcon },
];

export function SocialBtns() {
  return (
    <div className="flex gap-5 text-text-muted">
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="transition-colors hover:text-accent"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
