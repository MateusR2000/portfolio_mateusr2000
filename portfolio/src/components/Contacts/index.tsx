import { StyledContacts } from "./style"


export const Contacts = () => {
    return (
        <StyledContacts id="contacts">
            <div className="contacts__intro">
                <h2>Fale Comigo</h2>
                <p>Meus contatos pra gente ter uma conversa</p>
            </div>
            <div className="contact__cards">
                <div className="contact__container">
                    <img src="../../assets/email.png" alt="email"/>
                    <div className="contact__info">
                        <h3>Meu e-mail</h3>
                        <p>Mande um e-mail com sugestões ou ideias</p>
                        <a href="mailto:x0xmateus@live.com">Mandar email</a>
                    </div>
                </div>
                <div className="contact__container">
                    <img src="../../assets/linkedin.png" alt="linkedin"/>
                    <div className="contact__info">
                        <h3>Meu Linkedin</h3>
                        <p>Vamos interagir no Linkedin e expandir nosso network.</p>
                        <a href="https://www.linkedin.com/in/mateus-rodrigues-santos-23218225b/">Ir para o meu perfil</a>
                    </div>
                </div>
            </div>
        </StyledContacts>
    )
}