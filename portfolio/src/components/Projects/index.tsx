import { projects } from "../../projects"
import { StyledProjects } from "./style"
import { useLanguage } from "../../contexts/LanguageContext"

export const Projects = () => {
    const { t, language } = useLanguage();

    return (
        <StyledProjects id="projects">
            <div className="projects__intro">
                <h2>{t.projects.title}</h2>
                <p className="intro">{t.projects.description}</p>
            </div>
            <ul>
                {projects.map((project) => {
                    return(
                        <li key={project.id}>
                            <h3>{project.name[language]}</h3>
                            <div className="languages__container">
                                <p>{t.projects.languages}</p>
                                <p className="languages">{project.languages}</p>
                            </div>
                            <p>{project.description[language]}</p>
                            <div className="links__project">
                                <a href={project.githubLink}>{t.projects.githubLink}</a>
                                <a href={project.appLink}>{t.projects.appLink}</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </StyledProjects>
    )
}