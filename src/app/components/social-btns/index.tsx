import { GitHubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-roque-b901a417b/",
    Icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/feliperaro", Icon: GitHubIcon },
  {
    label: "Instagram",
    href: "https://instagram.com/raroque01",
    Icon: InstagramIcon,
  },
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
