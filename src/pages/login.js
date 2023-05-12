import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Input from "@/components/UI/Input";
import Button from "../components/UI/Button.jsx";
const Login = () => {
  const [inputVariables, setInputVariables] = useState({
    userName: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setInputVariables((prevs) => ({
      ...inputVariables,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputVariables);
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
              label="Username"
              type="text"
              placeholder="Enter your username"
              id="userName"
              value={inputVariables.userName}
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
