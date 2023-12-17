import { projetos } from "../../projetos"
import { StyledProjects } from "./style"

export const Projects = () => {
    return (
        <StyledProjects id="projects">
            <div className="projects__intro">
                <h2>Meus Projetos</h2>
                <p className="intro">Projetos criados na <span>Kenzie Academy</span></p>
            </div>
            <ul>
                {projetos.map((projeto) => {
                    return(
                        <li key={projeto.name}>
                            <h3>{projeto.name}</h3>
                            <div className="languages__container">
                                <p>Linguagens:</p>
                                <p className="languages">{projeto.languages}</p>
                            </div>
                            <p>{projeto.description}</p>
                            <div className="links__projeto">
                                <a href={projeto.githubLink}>Github code</a>
                                <a href={projeto.appLink}>Aplicação</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </StyledProjects>
    )
}