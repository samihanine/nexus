import LoginForm from "features/auth/login-form";

export default async function Login() {
  return (
    <div className="flex w-full flex-col gap-8">
      <LoginForm />
    </div>
  );
}
