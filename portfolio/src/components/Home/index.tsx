import { StyledHome } from "./style"

export const Home = () => {
    return (
        <StyledHome id="home">
            <div className="info">
                <img src="../../assets/profile.jpg" />
                <p>E aí? Sou o Mateus</p>
            </div>
            <h2>Pronto para começar minha <span>carreira!</span></h2>
            <p className="intro">Descubra o que eu já fiz. Meus projetos, as tecnologias que eu domino e também mais sobre mim.</p>
            <div className="buttons">
                <button onClick={(e) => {e.preventDefault, window.location.replace("/#projects")}}>Ver Projetos</button>
                <a href="https://github.com/MateusR2000"><img src="../../assets/github.png" alt="github"/></a>
            </div>
            <div className="techIcons">
                    <img src="../../assets/html.png" alt="html"/>
                    <img src="../../assets/css.png" alt="css"/>
                    <img src="../../assets/js.png" alt="javascript"/>
                    <img src="../../assets/react.png" alt="react" />
                    <img src="../../assets/python.png" alt="python"/>
            </div>
        </StyledHome>
    )
}