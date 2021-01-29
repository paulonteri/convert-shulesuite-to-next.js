import React from "react";
import ClassNForm from "../../components/classes/ClassNForm";

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
