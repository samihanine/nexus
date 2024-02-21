import { Button, Input } from "@nexus/ui";

export default function JoinWaitlist() {
  return (
    <form className="flex gap-2">
      <Input
        name="email"
        type="email"
        placeholder="name@example.com"
        className="min-w-[200px] !w-full"
      />
      <Button className="h-full !w-fit" type="submit">
        S'inscrire sur la waitlist
      </Button>
    </form>
  );
}
