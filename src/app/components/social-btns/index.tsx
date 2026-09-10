import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { WhatsAppIcon } from "../icons/whatsapp-icon";
import { GITHUB, LINKEDIN, WHATSAPP } from "../../i18n/content";

/*
  Filtered on href, so an unset WHATSAPP drops the icon instead of rendering a
  link to nowhere. See the note on WHATSAPP_NUMBER in i18n/content.ts.
*/
const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN, Icon: LinkedInIcon },
  { label: "GitHub", href: GITHUB, Icon: GitHubIcon },
  { label: "WhatsApp", href: WHATSAPP, Icon: WhatsAppIcon },
].filter((s) => s.href);

export function SocialBtns() {
  return (
    <div className="flex items-center gap-5 text-text-muted">
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
