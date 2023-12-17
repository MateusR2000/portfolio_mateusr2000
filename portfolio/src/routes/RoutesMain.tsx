import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )
}