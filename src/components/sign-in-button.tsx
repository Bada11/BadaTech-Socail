"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <button 
        onClick={() => login("github")}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
      <button 
        onClick={() => login("facebook")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Facebook
      </button>
    </div>
  );
};
