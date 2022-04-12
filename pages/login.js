import Head from 'next/head'
import React, { useEffect } from "react";
import SawoLogin from "sawo-react"
import lstyles from '../styles/login.module.css'
function login() {
    function sawoLoginCallback(payload) {
        console.log(payload);
    }

    const sawoConfig = {
        onSuccess: (payload) => {
            console.log(payload)
            window.location.href = "/";
        },
        identifierType: "email", //required, must be one of: 'email', 'phone_number_sms',
        apiKey: process.env.NEXT_PUBLIC_SAWO_API_KEY, // required, get it from sawo dev.sawolabs.com,
        containerHeight: "300px", // the login container height, default is 300px
    };

    return (

        <div className={lstyles.container}>
            <Head>
                <title>Login</title>
            </Head>
            <div className={lstyles.login_container}>
                <h1>Login</h1>
                <SawoLogin config={sawoConfig} />
            </div>
        </div>


    );
};

export default login;
