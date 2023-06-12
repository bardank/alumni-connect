import { Fragment } from "react";
import { useAuth } from "../customHooks/useAuth";
import { useRouter } from "next/router";

const Auth = ({ ...props }) => {
  const { isLoading, isAuthenticated } = useAuth((state) => state);

  const router = useRouter();

  if (isLoading) {
    return (
      <div className="h-screen bg-bgColor w-full flex flex-col justify-center items-center">
        <div className={`flex flex-col justify-center  items-center space-y-4`}>
          Initializing please wait...
        </div>
      </div>
    );
  }
  if (!isLoading && isAuthenticated) {
    return <Fragment>{props.children}</Fragment>;
  }
  // todo: change / to /login
  router.push("/login");
  return <Fragment></Fragment>;
};

export default Auth;
