import { StyledHome } from "./style"
import profileImg from "../../assets/profile.jpg"
import githubIcon from "../../assets/github.png"
import htmlIcon from "../../assets/html.png"
import cssIcon from "../../assets/css.png"
import jsIcon from "../../assets/js.png"
import reactIcon from "../../assets/react.png"
import pythonIcon from "../../assets/python.png"
import { useLanguage } from "../../contexts/LanguageContext"

const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


export const Home = () => {
    const { t } = useLanguage();
    return (
        <StyledHome id="home">
            <div className="info">
                <img src={profileImg} alt={t.home.profilePic} />
                <h1>{t.home.greeting}</h1>
            </div>
            <h2>{t.home.title}</h2>
            <p className="intro">{t.home.intro}</p>
            <div className="buttons">
                <button onClick={() => goTo("projects")}>{t.home.viewProjects}</button>
                <a href="https://github.com/MateusR2000"><img src={githubIcon} alt={t.home.github}/></a>
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