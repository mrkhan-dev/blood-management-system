import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import {createContext, useEffect, useState} from "react";
import auth from "../firebaseConfig/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logOut = async () => {
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    return signOut(auth);
  };

  const getToken = async (email) => {
    const {data} = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      {email},
      {withCredentials: true}
    );
    return data;
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // save user to db
  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "recipient",
      status: "verified",
    };
    const {data} = await axios.put(
      `${import.meta.env.VITE_API_URL}/user`,
      currentUser
    );
    return data;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        getToken(currentUser.email);
        saveUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
