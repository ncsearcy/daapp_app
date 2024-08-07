import { SignInPage } from "./signin";
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "../../../lib/auth/checkIsAuthenticated";

const SignIn: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();

    if(isAuthenticated) {
        redirect('/dashboard');
    }else{

        return <SignInPage />;
    }
}

export default SignIn;