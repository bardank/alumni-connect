import React, { useEffect } from "react";
import { client } from "../graphql/client";
import { ApolloProvider } from "@apollo/client";
import PopUpNotification from "../components/UI/PopupNotification";
import ME from "../graphql/query/ME";
import { useNotification } from "../customHooks/useNotification";
import "../styles/globals.scss";
import { useAuth } from "../customHooks/useAuth";
import { Head } from "next";

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KLQ77D7F');
              `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
