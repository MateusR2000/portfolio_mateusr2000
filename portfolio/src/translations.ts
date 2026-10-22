export type Language = "pt" | "en";

const pt = {
    header: { home: "Home", projects: "Projetos", contact: "Contatos", switch: "Switch to English" },
    home: {
        profilePic: "Foto de perfil",
        greeting: "E aí, eu sou o Mateus!",
        title: "Desenvolvedor Full Stack",
        intro: "Descubra o que eu já fiz. Meus projetos, as tecnologias que eu domino e também mais sobre mim.",
        viewProjects: "Ver Projetos",
        github: "github"
    },
    projects: {
        title: "Meus Projetos",
        description: "Aqui estão alguns dos projetos que eu desenvolvi, com detalhes sobre as tecnologias utilizadas e links para o código-fonte e demonstração.",
        languages: "Linguagens:",
        githubLink: "Github code",
        appLink: "Aplicação"
    },
    contacts: {
        title: "Fale Comigo",
        intro: "Meus contatos pra gente ter uma conversa",
        emailTitle: "Meu email",
        emailText: "Mande um e-mail com sugestões ou ideias",
        emailLink: "Mandar email",
        linkedinTitle: "Meu Linkedin",
        linkedinText: "Vamos interagir no Linkedin e expandir nosso network.",
        linkedinLink: "Ir para o meu perfil",
    }
}

const en: typeof pt = {
    header: { home: "Home", projects: "Projects", contact: "Contact me", switch: "Mudar para Português" },
    home: {
        profilePic: "Profile picture",
        greeting: "Hello there, I'm Mateus!",
        title: "Full Stack Developer",
        intro: "See what I've done so far. My projects, the technologies I mastered and also more about me.",
        viewProjects: "See Projects",
        github: "github"
    },
    projects: {
        title: "My Projects",
        description: "Here are some of the projects I've developed, with details about the technologies used and links to the source code and demonstration.",
        languages: "Languages:",
        githubLink: "Github code",
        appLink: "Application"
    },
    contacts: {
        title: "Get in touch with me", 
        intro: "My email and Linkedin for us to talk",
        emailTitle: "My email",
        emailText: "Send me an email with suggestions or ideas",
        emailLink: "Send email",
        linkedinTitle: "My Linkedin",
        linkedinText: "Let's connect on Linkedin and expand our network.",
        linkedinLink: "Go to my profile",
    }
}

export const translations = { pt, en };