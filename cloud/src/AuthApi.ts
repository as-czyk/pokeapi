import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "../firebase";

export const AuthApi = {
  login: (email: string, pwd: string) => {
    return signInWithEmailAndPassword(auth, email, pwd);
  },
  logout: () => {
    return signOut(auth);
  },
};
