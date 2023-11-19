import { Outlet } from "react-router-dom"
import Navbar from "./public/Navbar"
import Footer from "./public/Footer"

const Root = () => {
    return (
        <div className="bg-[#F1EFEF]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root