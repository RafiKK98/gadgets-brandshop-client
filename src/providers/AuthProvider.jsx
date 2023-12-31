import { 
    createContext, 
    useEffect, 
    useState 
} from "react"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    getAuth, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged 
} from "firebase/auth"
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(`User in the auth state changed: ${currentUser}`);
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                fetch('https://gadgets-brandshop-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo),
                })
                .then(res => res.json())
                .then(data => {
                    if(data.token) {
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            } else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        setUser,
        loading, 
        createUser,
        signInUser,
        loginWithGoogle,
        logOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider