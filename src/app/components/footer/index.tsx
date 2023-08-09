import { EmailIcon } from "../icons/email-icon"
import { SocialBtns } from "../social-btns"

import "./styles.css"


export default function Footer() {
    return (
        <>
            <a className="btnPrimary" href="mailto:feliperamosroque@gmail.com">
              contact me
              <EmailIcon/>
            </a>
            <SocialBtns />
        </>
    )
}


