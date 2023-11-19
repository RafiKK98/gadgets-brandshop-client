import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    const { user, setUser, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {
            console.log(`User logged out successfully!`);
            Swal.fire({
                icon: 'success',
                title: 'Logged out!',
                text: 'User logged out successfully!',
                position: 'top-right',
                timer: 2000
            });
            setUser(null);
        })
        .catch(error => console.error(`Error: ${error.code}, ${error.message}`));
    }

    const navLinks = <>
        <li><NavLink className="text-base mr-2 dark:text-white" to="/">Home</NavLink></li>
        <li><NavLink className="text-base mr-2 dark:text-white" to="/add-product">Add Product</NavLink></li>
        <li><NavLink className="text-base mr-2 dark:text-white" to="/my-cart">My Cart</NavLink></li>
    </>

    return (
        <div className="bg-[#CCC8AA]">
            <nav className="max-w-7xl mx-auto">
                <div className="navbar">
                    {/* Navbar start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navLinks
                                }
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl dark:text-white">Gadgets Brands</Link>
                    </div>
                    {/* Navbar center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    {/* Navbar end */}

                    <div className="navbar-end">
                        <button onClick={toggleTheme} className="text-2xl mr-5">
                            {
                                theme == 'light' ? <BsSun className="text-black" /> : <BsMoon className="text-white" />
                            }
                        </button>
                        {
                            user ? 
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="UserPhoto" />
                                        {/* <img src={`https://lh3.googleusercontent.com/a/ACg8ocJfxvimjRAZQ1mhKV6W1Px5hyUKVVJYrqu8ul394pDL1oyM=s288-c-no`} alt="UserPhoto" /> */}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-700 dark:text-white">
                                    <li>
                                        <a className="text-lg font-normal">
                                            {user.displayName}
                                            {/* Rafi Khan */}
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-lg font-normal">
                                            {user.email}
                                            {/* rafikk1998@gmail.com  */}
                                        </a>
                                    </li>
                                    <li onClick={handleSignOut}>
                                        <a className="text-lg font-normal hover:cursor-pointer">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            :
                            <Link to="/login" className="btn lg:w-32">Login</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar