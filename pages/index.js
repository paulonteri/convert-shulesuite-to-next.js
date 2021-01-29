import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = () => {
    if (typeof window !== "undefined") {
        const router = useRouter();
        router.push("/staff");
    }
    return (
        <div>
            <Link href="/show-redux-state">
                <a>Click to see current Redux State</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </div>
    );
};

export default Index;
