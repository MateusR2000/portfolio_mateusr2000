import { StyledHome } from "./style"
import profileImg from "../../assets/profile.jpg"
import githubIcon from "../../assets/github.png"
import htmlIcon from "../../assets/html.png"
import cssIcon from "../../assets/css.png"
import jsIcon from "../../assets/js.png"
import reactIcon from "../../assets/react.png"
import pythonIcon from "../../assets/python.png"

const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


export const Home = () => {
    return (
        <StyledHome id="home">
            <div className="info">
                <img src={profileImg} alt="Foto de perfil" />
                <p>E aí? Sou o Mateus</p>
            </div>
            <h2>Pronto para começar minha <span>carreira!</span></h2>
            <p className="intro">Descubra o que eu já fiz. Meus projetos, as tecnologias que eu domino e também mais sobre mim.</p>
            <div className="buttons">
                <button onClick={() => goTo("projects")}>Ver Projetos</button>
                <a href="https://github.com/MateusR2000"><img src={githubIcon} alt="github"/></a>
            </div>
            <div className="techIcons">
                    <img src={htmlIcon} alt="html"/>
                    <img src={cssIcon} alt="css"/>
                    <img src={jsIcon} alt="javascript"/>
                    <img src={reactIcon} alt="react" />
                    <img src={pythonIcon} alt="python"/>
            </div>
        </StyledHome>
    )
}