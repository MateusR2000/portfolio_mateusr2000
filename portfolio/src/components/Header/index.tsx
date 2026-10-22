import { StyledHeader } from "./style"
import { useLanguage } from "../../contexts/LanguageContext"

const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


export const Header = () => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <StyledHeader>
            <h1>Mateus</h1>
            <div className="buttons">
                <button onClick={() => goTo("home")}>{t.header.home}</button>
                <button onClick={() => goTo("projects")}>{t.header.projects}</button>
                <button onClick={() => goTo("contacts")}>{t.header.contact}</button>
                <button className="language_switch" onClick={toggleLanguage} aria-label="Switch Language">{t.header.switch}
                    {language === "pt" ? "  EN" : "  PT"}
                </button>
            </div>
        </StyledHeader>
    )
}