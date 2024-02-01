import AuthSwitcher from "features/auth/auth-switcher";
import LoginWithGoogleButton from "features/auth/login-with-google-button";
import SignUpForm from "features/auth/sign-up-form";

export default async function SignUp() {
  return (
    <div className="flex w-full flex-col gap-8">
      <AuthSwitcher />

      <LoginWithGoogleButton />

      <SignUpForm />
    </div>
  );
}
