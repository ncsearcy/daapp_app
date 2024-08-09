"use client";

import { handleSignOut } from "../lib/auth/signOutServerAction";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const SignOutButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Button
      className={props.className}
      style={{ cursor: "pointer" }}
      variant="outline"
      onClick={() => {
        handleSignOut();
        router.push("/");
      }}
    >
      {props.children || "Sign Out"}
    </Button>
  );
};
