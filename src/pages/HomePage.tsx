
import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"



export const HomePage = () => {

    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />

        </>
    )
}
