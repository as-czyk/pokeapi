import {
  CompleteFn,
  ErrorFn,
  NextOrObserver,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "@firebase/auth";
import { auth } from "../firebase";

export const AuthApi = {
  login: (email: string, pwd: string) => {
    return signInWithEmailAndPassword(auth, email, pwd);
  },
  logout: () => {
    return signOut(auth);
  },
  onAuthStateChanged: (
    observer: NextOrObserver<User | null>,
    error?: ErrorFn,
    completed?: CompleteFn
  ) => onAuthStateChanged(auth, observer),

  onIdTokenChanged: (observer: NextOrObserver<User | null>) =>
    onIdTokenChanged(auth, observer),
};
