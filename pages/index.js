import React from "react";
import Login from "../src/components/auth/Login";

const LoginPage = () => {
    return <Login />;
};

export default LoginPage;

// Static Generation
export async function getStaticProps(context) {
    return {
        // will be passed to the page component as props
        props: {}
    };
}
