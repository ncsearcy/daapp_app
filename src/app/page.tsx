import SignInButton from "@/components/sign-in-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="drop-shadow-md justify-center w-96 ">
        <CardHeader className="mb-1">
          <CardTitle className="text-3xl text-center">D.A.A.P.P.</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center">
            This is a demo of D.A.A.P.P.<br/>
            The Daily Activity and Project App
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center">
        <div>
          <SignInButton />
        </div>
        </CardFooter>
      </Card>
    </main>
  );
}
