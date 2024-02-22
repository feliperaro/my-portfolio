import { EmailIcon } from "../icons/email-icon";
import { SocialBtns } from "../social-btns";

export default function Footer() {
  return (
    <footer className="bg-[#272643] flex flex-row gap-6 p-6 justify-center items-center">
      <a
        className="flex border border-white rounded-xl p-2 pl-5 pr-5 gap-2 text-white hover:text-blue-300"
        href="mailto:feliperoque.dev@gmail.com"
      >
        {"Contact me"}
        <EmailIcon />
      </a>
      <SocialBtns />
    </footer>
  );
}
