import React from "react";
import ClassNForm from "../../../src/components/classes/ClassNForm";

export default function Classes() {
    return <ClassNForm />;
}

// Static Generation
export async function getStaticProps(context) {
    return {
        // will be passed to the page component as props
        props: {}
    };
}
