import React from "react";
import StreamForm from "../../../components/classes/StreamForm";

export default function Classes() {
    return <StreamForm />;
}

// Static Generation
export async function getStaticProps(context) {
    return {
        // will be passed to the page component as props
        props: {}
    };
}
