type Localize = { pt: string; en: string };

type Project = {
    id: string,
    name: Localize;
    languages: string;
    description: Localize;
    githubLink: string;
    appLink?: string;
}

const projects: Project[] = [
    {
        id: "prisma-cars",
        name: {pt: "Projeto Prisma Cars", en: "Prisma Cars Project"},
        languages: "Typescript",
        description: {
            pt: "Projeto de prática de backend com a ORM Prisma, onde foi criado um CRUD de um marketplace de carros com autenticação de usuários e validação de dados.",
            en: "Backend practice project using the Prisma ORM, where a CRUD for a vehicle shop marketplace was created with user authentication and data validation."
        },
        githubLink: "https://github.com/MateusR2000/prisma-cars"
    },
    {
        id: "e-commerce-m1-kenzie",
        name: {pt: "Projeto E-Commerce M1 Kenzie", en: "E-Commerce Project M1 Kenzie"},
        languages: "Javascript",
        description: {
            pt: "Primeiro projeto de fim de módulo da Kenzie, onde eu simulei uma página de E-commerce usando HTML, CSS e Javascript básicos.",
            en: "Final project of the first module at Kenzie, where I simulated an E-commerce page using HTML, CSS and basic Javascript."
        },
        githubLink: "https://github.com/MateusR2000/Projeto_M1_Kenzie",
        appLink: "https://kenzie-academy-brasil-developers.github.io/m1-capstone-ecommerce-template_mateusR2000/"
    },
    {
        id: "kenzie-m2",
        name: {pt: "Kenzie Empresas M2", en: "Kenzie Companies M2"},
        languages: "Javascript",
        description: {
            pt: "Projeto do final do segundo módulo da Kenzie Academy. Criar o front-end com base em uma API de empresas e funcionários, com página de administrador e página para usuário comum",
            en: "Project of the end of the second module at Kenzie Academy. Create the frontend based on an API of companies and employees, with an administrator page and a page for regular users"
        },
        githubLink: "https://github.com/Kenzie-Academy-Brasil-Developers/m2-projeto-frotend-empresas-mateusR2000",
        appLink: "https://kenzie-academy-brasil-developers.github.io/m2-projeto-frotend-empresas-mateusR2000/"
    },
    {
        id: "linkkeeper",
        name: {pt: "Projeto M3 - LinkKeeper", en: "M3 Project - LinkKeeper"},
        languages: "Typescript",
        description: {
            pt: "Projeto do terceiro módulo da Kenzie. Realizado em grupo, consistiu de criar uma aplicação React do zero, desde a concepção de uma ideia, que no caso foi uma aplicação para salvar links para sites úteis. Foram incorporados métodos de SCRUM e o uso do Trello para o trabalho em equipe ",
            en: "Project of the third module at Kenzie. Done in a group, it consisted of creating a React application from scratch, starting with the conception of an idea, which in this case was an application to save links for useful websites. SCRUM methods and the use of Trello for team work were incorporated."
        },
        githubLink: "https://github.com/Projeto-LinkKeeper/linkkeeper-app",
        appLink: "https://linkkeeper-app.vercel.app/"
    },
    {
        id: "kanvas",
        name: {pt: "Projeto M5 - Kanvas", en: "M5 Project - Kanvas"},
        languages: "Python",
        description: {
            pt: "Projeto do quinto módulo da Kenzie. Usando Python e Django, foi construída um banco de dados e uma API que simula um portal para gerenciamento de cursos e seus estudantes.",
            en: "Project of the fifth module at Kenzie. Using Python and Django, a database and an API were built to simulate a portal for managing courses and their students."
        },
        githubLink: "https://github.com/MateusR2000/m5-projeto-final-kanvas-mateusr2000",
        appLink: "https://m5-kanvas-mateusr2000.onrender.com/"
    },
]

export { projects }