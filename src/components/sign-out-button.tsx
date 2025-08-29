"use client";

import { logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return (
    <button
      className="text-white bg-red-700 px-4 py-2 rounded-sm"
      onClick={() => logout()}
    >
      Sign Out
    </button>
  );
};
