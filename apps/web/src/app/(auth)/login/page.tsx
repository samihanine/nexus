import AuthSwitcher from "features/auth/auth-switcher";
import LoginForm from "features/auth/login-form";
import LoginWithGoogleButton from "features/auth/login-with-google-button";

export default async function Login() {
  return (
    <div className="flex w-full flex-col gap-8">
      <AuthSwitcher />

      <LoginWithGoogleButton />

      <LoginForm />
    </div>
  );
}
