import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button.jsx";
import { useMutation } from "@apollo/client";
import LOGIN from "../graphql/mutation/LOGIN";
import { useAuth } from "../customHooks/useAuth";
import { useNotification } from "../customHooks/useNotification";
const Login = () => {
  const [inputVariables, setInputVariables] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();
  const { setNotification } = useNotification();
  const handleInputChange = (e) => {
    setInputVariables((prevs) => ({
      ...inputVariables,
      [e.target.id]: e.target.value,
    }));
  };

  const [login, { loading, error, data }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      if (data?.login?.["success"] && !loading) {
        const user = data.login["user"];
        setUser(user.accessToken, user._id, user.phone, user.fullName);
        setNotification(uuid(), "Login Successfull", "Success", 3000);
      }
      if (data?.login?.success == false) {
        setNotification(uuid(), data.login.message, "Error", 3000);
      }
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      variables: {
        email: inputVariables.userName,
        password: inputVariables.password,
      },
    });
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
            <Button type="submit" label={"Login"} />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
