import { 
    useContext
} from "react";
import { AiOutlineGoogle } from "react-icons/ai"
import { AuthContext } from "../../providers/AuthProvider";
import { 
    Link, 
    useNavigate 
} from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {

    const { setUser, loginWithGoogle, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo'); 
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, name, photo, email, password);

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: "Your password should be at least 6 characters long!",
                timer: 2000
            })
            return;
        }
        if (!/.*[A-Z].*/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: "You password must have at least one capital letter!",
                timer: 2000
            })
            return;
        }
        if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-].*/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: "Your password must have at least one special character!",
                timer: 2000
            })
            return;
        }

        createUser(email, password)
            .then(async result => {
                try {
                    await updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo
                    });
                    console.log(`User registered`);
                    console.log(result.user);
                    setUser(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Registered!',
                        text: 'User registered!',
                        position: 'top-right',
                        timer: 2000
                    });
                    navigate('/');
                } catch (error) {
                    console.error(`Error: ${error.code}, ${error.message}`);
                }
            })
            .catch(error => {
                console.error(`Error: ${error.code}, ${error.message}`);
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
                    title: 'Registered!',
                    text: 'User registered!',
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
                    <h1 className="text-5xl font-bold text-[#191717]">Welcome!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
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
                            <p>Already have an account? Please <Link to="/login" className="text-gray-900 italic">Login</Link></p>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline btn-ghost w-full text-[#7D7C7C] text-xl font-medium normal-case hover:bg-[#CCC8AA] hover:border-0">Register</button>
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

export default Register