import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";


const ContactDetails = () => {
    return (
        <section className="bg-[#F1EFEF] mb-10 dark:text-white dark:bg-black">
            <div className="max-w-7xl mx-auto  py-16 mb-16">
                <h3 className="text-4xl text-center font-semibold mb-10">Contact Us</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                    <div className="flex gap-1">
                        <MdLocationPin className="text-4xl text-gray-600 dark:text-gray-300" />
                        <div>
                            <h1 className="text-4xl flex">
                                
                                Address
                            </h1>
                            <p>
                                393, Shadhinota Soroni, <br />
                                North Badda, <br />
                                Dhaka-1212, Bangladesh
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <BsFillTelephoneFill className="text-4xl text-gray-600 dark:text-gray-300" />
                        <div>
                            <h1 className="text-4xl flex">
                                Phone
                            </h1>
                            <p>
                                Mobile: +880179548106 <br />
                                Telephone: +880179548106
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <FiMonitor className="text-4xl text-gray-600 dark:text-gray-300" />
                        <div>
                            <h1 className="text-4xl flex">
                                E-mail
                            </h1>
                            <p>
                                E-mail: <a className="text-gray-600 dark:text-gray-300" href="mailto:rafikk1998@gmail.com">support@gbrands.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default ContactDetails