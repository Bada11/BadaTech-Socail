import { auth } from "@/auth";
import { SignInButton } from "@/components/sign-in-button";

const SignupPage = async () => {
  const session = await auth();

  if (!session?.user){
    return (
      <div>
        <h1>You are not signed in</h1>
        <SignInButton />
      </div>
    );
  }
};

export default SignupPage;
