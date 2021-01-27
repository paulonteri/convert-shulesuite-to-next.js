import React from "react";
import Link from "next/link";

const Index = () => {
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
