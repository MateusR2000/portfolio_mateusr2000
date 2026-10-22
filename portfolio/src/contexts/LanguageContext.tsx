import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations } from "../translations";

type LanguageContextType = {
    language: Language
    t: typeof translations.pt
    toggleLanguage: () => void
}

const LanguageContext = createContext({} as LanguageContextType);

const getLanguage = (): Language => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage) {
        return storedLanguage;
    }
    return navigator.language.startsWith("pt") ? "pt" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode })  => {
    const [language, setLanguage] = useState<Language>(getLanguage());

    useEffect(() => {
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
    }

    return(
        <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);