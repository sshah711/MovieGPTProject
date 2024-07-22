import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSign, setIsSign] = useState(true);
  const [err, setErr] = useState(null);
  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);

  const toggle = () => {
    setIsSign(!isSign);
  };

  const handlebtn = () => {
    const msg = checkValidData(email.current.value, pass.current.value);
    setErr(msg);

    if (msg) return;

    if (!isSign) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErr(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          //   console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorMessage + "-" + errorCode);
        });
    }
  };
  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          className="bg-opacity-70 bg-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="bg-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 text-white p-12 bg-opacity-70 mx-auto bg-black right-0 left-0 rounded-lg my-36 absolute"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            ref={name}
            placeholder="Full name"
            className="w-full my-4 p-4 bg-opacity-40 border border-white rounded-sm bg-black  "
          ></input>
        )}
        <input
          ref={email}
          placeholder="Email or mobile number"
          className="w-full my-4 p-4 bg-opacity-40 border border-white rounded-sm bg-black"
        ></input>
        <input
          ref={pass}
          placeholder="Password"
          className="w-full my-4 p-4 bg-opacity-40 border border-white rounded-sm bg-black"
        ></input>
        <p className="text-red-500 font-bold py-2 text-lg">{err}</p>
        <button
          className="w-full my-6 p-4 rounded-lg bg-red-700"
          onClick={handlebtn}
        >
          {isSign ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggle}>
          {isSign
            ? "New to netflix?? Sign Up now.."
            : " Allready Registered?? Sign In now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
