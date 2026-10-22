import { StyledContacts } from "./style"
import emailIcon from "../../assets/email.png"
import linkedinIcon from "../../assets/linkedin.png"
import { useLanguage } from "../../contexts/LanguageContext"


export const Contacts = () => {
    const { t } = useLanguage();

    return (
        <StyledContacts id="contacts">
            <div className="contacts__intro">
                <h2>{t.contacts.title}</h2>
                <p>{t.contacts.intro}</p>
            </div>
            <div className="contact__cards">
                <div className="contact__container">
                    <img src={emailIcon} alt="email"/>
                    <div className="contact__info">
                        <h3>{t.contacts.emailTitle}</h3>
                        <p>{t.contacts.emailText}</p>
                        <a href="mailto:x0xmateus@live.com">{t.contacts.emailLink}</a>
                    </div>
                </div>
                <div className="contact__container">
                    <img src={linkedinIcon} alt="linkedin"/>
                    <div className="contact__info">
                        <h3>{t.contacts.linkedinTitle}</h3>
                        <p>{t.contacts.linkedinText}</p>
                        <a href="https://www.linkedin.com/in/mateus-rodrigues-santos-23218225b/">{t.contacts.linkedinLink}</a>
                    </div>
                </div>
            </div>
        </StyledContacts>
    )
}