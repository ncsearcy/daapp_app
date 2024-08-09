"use client";

import { handleGoogleSignIn } from "../../../lib/auth/googleSignInServerAction";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const SignInPage: React.FC = () => {
  return (
      <Card className="signin-card drop-shadow-md justify-center mr-96 ml-96 max-h-lvh mt-80">
          <CardHeader className="mb-1">
            <CardTitle className="text-3xl text-center">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
                <CardDescription className="text-center mb-9">
                    Please sign in using your Google account
                </CardDescription>
                <CardFooter className="flex justify-center">
                  <Button
                    className="google flex align-middle justify-center p-1 font-bold text-base border-solid border-radius-1 bg-transparent text-black hover:text-white"
                    onClick={() => handleGoogleSignIn()}
                  >
                    <FcGoogle className="google-icon mr-1.25 w-6 h-6" />
                    Sign In with Google
                  </Button>
                </CardFooter>
          </CardContent>
      </Card>
  );
};
