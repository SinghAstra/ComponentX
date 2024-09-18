"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

const AppBar = () => {
  const session = useSession();

  console.log("session is ", session);

  return (
    <div className="flex justify-between">
      <h2>Live Music</h2>
      <button className="bg-blue-400 p-2 m-2" onClick={() => signIn()}>
        Sign In
      </button>
    </div>
  );
};

export default AppBar;
