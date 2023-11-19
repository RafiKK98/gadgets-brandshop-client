import { 
    useContext
} from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { 
    Link, 
    useNavigate 
} from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { setUser, signInUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
        .then(result => {
            console.log(`User logged in!`);
            console.log(result.user);
            setUser(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Logged in!',
                text: 'User logged in!',
                position: 'top-right',
                timer: 2000
            });
            event.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.error(`Error: ${error.code}, ${error.message}`);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: "Email or Password does not match! Please try again",
                timer: 2000
            })
        })
    }


    const handleRegisterWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(`User registered using Google`);
                console.log(result.user);
                setUser(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in!',
                    text: 'User logged in!',
                    position: 'top-right',
                    timer: 2000
                })
                navigate('/');
            })
            .catch(error => {
                console.error(`Error: ${error.code}, ${error.message}`);
            })
    }

    return (
        <div className="hero bg-[#F1EFEF] min-h-[80vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-[#191717]">Welcome back!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label font-medium">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-medium">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <p>New user ? Please <Link to="/register" className="text-gray-900 italic">Register</Link></p>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline btn-ghost w-full text-[#7D7C7C] text-xl font-medium normal-case hover:bg-[#CCC8AA] hover:border-0">Login</button>
                        </div>
                    </form>
                    <div className="card-body pt-0 mt-0">
                        <div>
                            You can also sign in with
                        </div>
                        <button onClick={handleRegisterWithGoogle} className="btn btn-outline w-full btn-ghost text-[#7D7C7C] text-xl hover:bg-[#CCC8AA] hover:border-0">
                            <AiOutlineGoogle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login