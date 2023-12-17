import { Contacts } from "../../components/Contacts"
import { Header } from "../../components/Header"
import { Home } from "../../components/Home"
import { Projects } from "../../components/Projects"


export const MainPage = () => {
    return(
        <>
            <Header />
            <Home />
            <Projects />
            <Contacts />
        </>

    )
}