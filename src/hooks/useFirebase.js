import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from './../Login/Firebase/firebase.init';
import { useEffect, useState } from 'react';


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({})

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const loginWithGoogl = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {

        signOut(auth)
            .then(() => setUser({}))
    }


    return {
        user,
        loginWithGoogl,
        logOut
    }
}

export default useFirebase;