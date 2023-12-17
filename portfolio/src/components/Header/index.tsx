import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <h1>Mateus</h1>
            <div className="buttons">
                <button onClick={(e) => {e.preventDefault, window.location.replace("/#home")}}>Home</button>
                <button onClick={(e) => {e.preventDefault, window.location.replace("/#projects")}}>Projetos</button>
                <button onClick={(e) => {e.preventDefault, window.location.replace("/#contacts")}}>Contatos</button>
            </div>
        </StyledHeader>
    )
}