import React, { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import dynamic from "next/dynamic";
//
import { useStore } from "../src/state/store";
//
import SpinnerFull from "../src/layout/spinner/SpinnerFull";
import { URL } from "../src/state/actions/url";
//
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/index.css";
import "nprogress/nprogress.css"; //styles of nprogress

// Alert Options
const alertOptions = {
    timeout: 3250,
    position: "top center"
};
// dynamic imports
const Dashboard = dynamic(() => import("../src/layout/Dashboard"), {
    ssr: false,
    loading: () => <SpinnerFull info="  Loading dashboard..." />
});
const CheckAuth = dynamic(() => import("../src/components/auth/CheckAuth"), {
    ssr: false,
    loading: () => <SpinnerFull info="  Loading auth..." />
});
const Alerts = dynamic(() => import("../src/components/alerts/Alerts"), {
    ssr: false
});

// Progress bar
// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// TODO: Add sentry
// TODO: Fix antd imports
// TODO: add testing -> https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d
export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();

    // OnMount warm server
    // eslint-disable-next-line
    useEffect(() => {
        if (store.getState().authReducer.isAuthenticated !== true) {
            // store.dispatch(loadUser());
            const Http = new XMLHttpRequest();
            const url = `${URL}/api/ping/`;
            Http.open("GET", url);
            Http.send();
        }
        // eslint-disable-next-line
    }, [store.getState().authReducer.isAuthenticated]);

    if (router.pathname.includes("/staff")) {
    }

    return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                    />
                    <meta
                        name="description"
                        content="Shulesuite web application for students and teachers"
                    />
                    <meta name="keywords" content="Shulesuite" />
                    <title>ShuleSuite school</title>

                    <link rel="manifest" href="/manifest.json" />
                    {/* <link
                        href="/icons/favicon-16x16.png"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="/icons/favicon-32x32.png"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                    />
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
                    <meta name="theme-color" content="#317EFB" />
                </Head>
                {/* --------------------------------- */}
                <Alerts />

                {router.pathname.includes("/staff") ? (
                    <CheckAuth>
                        <Dashboard>
                            <Component {...pageProps} />
                        </Dashboard>
                    </CheckAuth>
                ) : (
                    <Component {...pageProps} />
                )}
                {/* --------------------------------- */}
            </AlertProvider>
        </Provider>
    );
}

// expose store when run in Cypress
if (window && window.Cypress) {
    window.store = store;
}
