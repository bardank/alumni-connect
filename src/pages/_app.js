import React, { Fragment, useEffect } from "react";
import { client } from "../graphql/client";
import { ApolloProvider } from "@apollo/client";
import PopUpNotification from "../components/UI/PopupNotification";
import { useNotification } from "../customHooks/useNotification";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  const notifications = useNotification((state) => state.notifications);

  useEffect(() => {
    console.log({ notifications });

    return () => {};
  }, []);

  return (
    <ApolloProvider client={client}>
      {/* <PopUpNotification notifications={notifications} /> */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
