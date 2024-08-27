import SignInButton from "@/components/sign-in-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <div className="sign-in-page grid p-2 m-2">
        <header className="text-center font-bold text-xl">
          Welcome to D.A.a.P.P
        </header>
        <h1 className="text-center font-bold text-lg p-5">
          Your Daily Activity and Project Planner
        </h1>
        <div className="card-container grid p-10 justify-between m-auto">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="form">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Username</Label>
                    <Input id="name" type="text" placeholder="Username " />
                  </div>
                  <div className="flex flex-col space-y-1.5 mb-5">
                    <Label htmlFor="password"> Password </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </form>
              <CardDescription>
                <div className="mb-5">
                  <p>Sign in using your Google account</p>
                </div>
              </CardDescription>
              <CardFooter>
                <SignInButton />
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
