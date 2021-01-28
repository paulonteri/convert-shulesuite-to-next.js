import React from "react";
import { useRouter } from "next/router";
import BookInfoDetail from "../../../components/library/BookInfoDetail";

export default function BookDetail() {
    const router = useRouter();
    const { book_id } = router.query;

    return <BookInfoDetail book_id={book_id} />;
}
