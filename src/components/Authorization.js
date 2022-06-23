import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Authorization(){
    const user = false;
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const userdata = result.user;
        user = true;
        console.log(userdata);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
