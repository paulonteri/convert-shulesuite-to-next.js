import React from "react";
import BookInfoForm from "../../../src/components/library/BookInfoForm";

export default function LibraryForm() {
    return <BookInfoForm />;
}

// Static Generation
export async function getStaticProps(context) {
    return {
        // will be passed to the page component as props
        props: {}
    };
}
