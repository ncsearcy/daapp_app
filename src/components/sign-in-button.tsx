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
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Welcome to D.A.A.P.P.</CardTitle>
        <CardDescription> Please sign in to continue. </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="signin-button w-full hover:after"
          variant="outline"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/auth/sign-in")}
        >
          {props.children || "Sign In or Sign Up"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignInButton;
