import { GitHubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./styles.css"


export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/felipe-roque-b901a417b/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/feliperroque" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="https://instagram.com/feliperoque.dev" target="_blank">
                <InstagramIcon/>
            </a>
        </div>
    )
}

