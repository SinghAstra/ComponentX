"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const AppBar = () => {
  const session = useSession();

  console.log("session is ", session);

  return (
    <div className="flex justify-between">
      <h2>Live Music</h2>
      {session.status === "loading" && <p>Loading....</p>}
      {session.status === "authenticated" && (
        <button className="bg-blue-400 p-2 m-2" onClick={() => signOut()}>
          Sign Out
        </button>
      )}
      {session.status === "unauthenticated" && (
        <button className="bg-blue-400 p-2 m-2" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default AppBar;
