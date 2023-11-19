import { Link } from "react-router-dom"
import Footer from "./public/Footer"
import Navbar from "./public/Navbar"
import { AiOutlineDoubleLeft } from "react-icons/ai";

const Error404Page = () => {
    return (
        <div>
            <Navbar />
                <div className="max-w-5xl mx-auto text-center h-96">
                    <h4 className="text-3xl mt-10">Error 404!</h4>
                    <p className="text-xl my-10">Page not found!!</p>
                    <Link to="/" className="flex items-center w-fit text-xl mx-auto">
                        <AiOutlineDoubleLeft className="mr-2" /> Go Back?
                    </Link>
                </div>
            <Footer />
        </div>
    )
}

export default Error404Page