import RegisterForm from "@/features/auth/register-form";

export default async function SignUp() {
  return (
    <div className="flex w-full flex-col gap-8">
      <RegisterForm />
    </div>
  );
}
