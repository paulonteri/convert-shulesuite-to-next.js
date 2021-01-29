import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
//
import SpinnerFull from "../spinner/SpinnerFull";

export const CheckAuth = (props) => {
    const router = useRouter();

    if (typeof window === "undefined") {
        // server (no router)
        return <SpinnerFull info=" Loading..." />;
    } else if (props.isLoading) {
        // loading
        return <SpinnerFull info=" Authenticating Credentials..." />;
    } else if (props.isAuthenticated !== true) {
        // unauthenticated
        router.push("/login");
        return <SpinnerFull info="Redirecting..." />;
    }
    return <div>{props.children}</div>;
};

CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    isLoading: state.authReducer.isLoading
});

export default connect(mapStateToProps, {})(CheckAuth);
