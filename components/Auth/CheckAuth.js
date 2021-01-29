import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
//
import SpinnerFull from "../../layout/spinner/SpinnerFull";
import { checkCachedAuth } from "../../state/actions/auth/auth";

export const CheckAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
        props.checkCachedAuth();
    }, [props.isAuthenticated]);

    if (typeof window === "undefined") {
        // server (no router)
        return <SpinnerFull info=" Loading..." />;
    } else if (props.isLoading) {
        // loading
        return <SpinnerFull info=" Authenticating Credentials..." />;
    } else if (props.isAuthenticated === false) {
        // unauthenticated
        router.push({
            pathname: "/login",
            query: { next: router.pathname }
        });
        return <SpinnerFull info="Redirecting..." />;
    } else if (props.isAuthenticated === true) {
        return <div>{props.children}</div>;
    } else {
        props.checkCachedAuth();
        return <SpinnerFull info=" Loading...." />;
    }
};

CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    isLoading: state.authReducer.isLoading
});

export default connect(mapStateToProps, { checkCachedAuth })(CheckAuth);
