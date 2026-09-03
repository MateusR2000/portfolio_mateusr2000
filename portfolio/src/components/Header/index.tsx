import { StyledHeader } from "./style"

const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


export const Header = () => {
    return (
        <StyledHeader>
            <h1>Mateus</h1>
            <div className="buttons">
                <button onClick={() => goTo("home")}>Home</button>
                <button onClick={() => goTo("projects")}>Projetos</button>
                <button onClick={() => goTo("contacts")}>Contatos</button>
            </div>
        </StyledHeader>
    )
}