import Head from "next/head";
import { Provider } from "react-redux";
import { useStore } from "../state/store";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
//
import Dashboard from "../layout/Dashboard";
//
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "nprogress/nprogress.css"; //styles of nprogress

// Progress bar
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();

    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                <link
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
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB" />
            </Head>

            {["/login"].find((url) => router.pathname.includes(url)) == null ? (
                <Dashboard>
                    <Component {...pageProps} />
                </Dashboard>
            ) : (
                <Component {...pageProps} />
            )}
        </Provider>
    );
}
