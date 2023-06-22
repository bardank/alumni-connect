import React, {  useEffect } from "react";
import { client } from "../graphql/client";
import { ApolloProvider } from "@apollo/client";
import PopUpNotification from "../components/UI/PopupNotification";
import ME from "../graphql/query/ME";
import { useNotification } from "../customHooks/useNotification";
import "../styles/globals.scss";
import { useAuth } from "../customHooks/useAuth";

export default function App({ Component, pageProps }) {
  const notifications = useNotification((state) => state.notifications);

  const { setUser, removeUser } = useAuth();

  // load user function

  const loadUser = async () => {
    try {
      const response = await client.query({ query: ME });
      console.log({ response });
      if (response.data?.me?.success) {
        const user = response.data.me.user;
        console.log({ user });
        setUser(user.accessToken, user._id, user.email, user.fullName);
        console.log(user, "user-set");
      } else {
        // setAuthincatedUser();
        console.log("user not found");
      }
    } catch (error) {
      console.log(error);
      // removeUser();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadUser();
    }
  }, [typeof window !== "undefined"]);

  return (
    <ApolloProvider client={client}>
      <PopUpNotification notifications={notifications} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
