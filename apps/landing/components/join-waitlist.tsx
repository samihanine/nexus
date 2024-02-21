"use client";

import { Button, Input } from "@nexus/ui";
import { useState } from "react";
import toast from "react-hot-toast";

export default function JoinWaitlist() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_HOST + "/waitlist",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok || response.status !== 200) {
        throw new Error("Failed to add to waitlist");
      } else {
        toast.success("Vous avez été ajouté à la liste d'attente !");
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex gap-2 flex-col sm:flex-row" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="john@exemple.com"
        className="min-w-[200px] !w-full"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="sm:h-full sm:!w-fit" type="submit" disabled={loading}>
        {loading ? "Ajout en cours..." : "Rejoindre la liste d'attente"}
      </Button>
    </form>
  );
}
