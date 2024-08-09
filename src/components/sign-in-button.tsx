"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const SignInButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
        <Button className="signin-button w-full font-semibold hover:after"
          variant="outline"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/auth/sign-in")}
        >
          {props.children || "Sign In"}
        </Button>
  );
};

export default SignInButton;
