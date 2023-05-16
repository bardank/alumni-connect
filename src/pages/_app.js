import React, { Fragment } from "react";
import { client } from "../graphql/client";
import { ApolloProvider } from "@apollo/client/core";
import PopUpNotification from "../components/UI/PopupNotification";
import { useNotification } from "../customHooks/useNotification";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const { notifications, setNotification } = useNotification((state) => state);

  return (
    <Fragment>
      <PopUpNotification notifications={notifications} />
      <Component {...pageProps} />
    </Fragment>
  );
}
