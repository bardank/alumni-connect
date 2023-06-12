import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button.jsx";
import { useMutation } from "@apollo/client";
import LOGIN from "../graphql/mutation/LOGIN";
import { useAuth } from "../customHooks/useAuth";
import { useNotification } from "../customHooks/useNotification";
import { uuid } from "uuidv4";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [inputVariables, setInputVariables] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();
  const { setNotification } = useNotification((state) => state);
  const handleInputChange = (e) => {
    setInputVariables((prevs) => ({
      ...inputVariables,
      [e.target.id]: e.target.value,
    }));
  };

  const [login, { loading, error, data }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      console.log(data.login);
      if (data?.login?.["success"]) {
        const user = data.login["user"];
        // console.log({ user });
        setUser(user.accessToken, user._id, user.email, user.fullName);
        setNotification(uuid(), "Login Successfull", "Success", 3000);
        router.push("/dashboard");
      }
      if (!data?.login?.success) {
        setNotification(uuid(), data.login.message, "Error", 3000);
      }
    },

    onError: (error) => {
      console.log(error);
      // setNotification(uuid(), error.message, "Error", 3000);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loading) {
      login({
        variables: {
          email: inputVariables.email,
          password: inputVariables.password,
        },
      });
    }
  };
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-lg rounded-lg px-8 py-6"
            onSubmit={(e) => handleLogin(e)}
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your Email"
              id="email"
              value={inputVariables.email}
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              id="password"
              value={inputVariables.password}
              onChange={handleInputChange}
            />
            <Button type="submit" label={loading ? "Loading..." : "Login"} />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
