import React, { useState } from "react";
import Image from "next/image";
import signIn from "@/firebase/auth/singin";
import { useRouter } from "next/navigation";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase_app from "@/firebase/config";
import Loader from "@/components/Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    setLoading(true);

    const { result, error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      return console.log(error.message);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <Image
            src="/image/email.png"
            width={15}
            height={15}
            alt="email-icon"
            className="absolute icon-input"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <Image
            src="/image/password.png"
            width={15}
            height={15}
            alt="password-icon"
            className="absolute icon-input"
          />
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute visibility-control-btn"
            onClick={handleTogglePasswordVisibility}
          >
            {!isPasswordVisible ? (
              <Image
                src="/image/visibility.png"
                width={20}
                height={20}
                alt="password-visible-icon"
              />
            ) : (
              <Image
                style={{ opacity: "50%" }}
                src="/image/eyeOpen.png"
                width={20}
                height={20}
                alt="eye-open-icon"
              />
            )}
          </button>
        </div>
      </div>

      <button type="submit" className="btn btn-form relative">
        <span>Login </span>
        {loading ? (
          <span className="loader absolute">
            <Loader h={16} w={16} sw={5} sws={5} />
          </span>
        ) : (
          <span className="loader absolute">
            <Image
              src="/image/right.png"
              width={18}
              height={18}
              alt="right-icon"
              // style={{ transform: "translate(20%,20%)" }}
            />
          </span>
        )}
      </button>
    </form>
  );
};

const LoginPage = () => {
  // for google
  const provider = new GoogleAuthProvider();

  const auth = getAuth(firebase_app);

  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="center-parent-box relative">
        <div className="center ">
          <Image
            priority="high"
            src="/image/swoplogo.png"
            width={132}
            height={30}
            alt="swoplogo"
          />
        </div>
        <div className="card absolute">
          {/* <div className="center">
            <button className="btn btn-header">Log In</button>
          </div> */}
          <LoginForm />
          {/* <PasswordInput /> */}
          <div className="relative or">
            <div className="line line-left absolute"></div>
            <div className="line line-right absolute"></div>

            <div className="center">Or</div>
          </div>
          <div className="btn-auth-box">
            <button onClick={loginWithGoogle} className="btn-auth ">
              <Image
                src="/image/google.png"
                alt="google-icon"
                width={38}
                height={38}
              />
              <span>Continue with Google</span>
            </button>
            <button className="btn-auth">
              <Image
                src="/image/apple.png"
                alt="apple-icon"
                width={38}
                height={38}
              />
              <span>Continue with Apple</span>
            </button>
          </div>
        </div>

        {/* Boxex */}
        <div className="box  box-bottom-left absolute"></div>
        <div className="box  box-top-right absolute"></div>
        <div className="box box-small box-small-center absolute "></div>
        <div className="box box-small box-small-top-left absolute "></div>
        <div className="box box-small box-small-bottom-right absolute "></div>
      </div>
    </div>
  );
};

export default LoginPage;
