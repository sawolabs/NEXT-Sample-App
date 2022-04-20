import Head from "next/head";
import React, { useEffect, useState } from "react";
import Sawo from "sawo";
import lstyles from "../styles/login.module.css";
function login() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email", //required, must be one of: 'email', 'phone_number_sms',
      apiKey: process.env.NEXT_PUBLIC_SAWO_API_KEY, // required, get it from sawo dev.sawolabs.com,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setIsUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className={lstyles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={lstyles.login_container}>
        <h2 className="title">SAWO NEXT Sample App</h2>
        <h2 className="title">User Logged In : {isUserLoggedIn.toString()}</h2>

        {!isUserLoggedIn ? (
          <div className={lstyles.formContainer} id="sawo-container"></div>
        ) : (
          <div className={lstyles.loggedin}>
            <h2>User Successful Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default login;
