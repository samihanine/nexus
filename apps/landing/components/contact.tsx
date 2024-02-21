"use client";

import { Button, H1, Input, Textarea } from "@nexus/ui";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/contact",
        {
          method: "POST",
          body: JSON.stringify({ email, name, phone, message }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Votre message a été envoyé !");
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-32 pt-40">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <div className="relative z-10 text-center md:mx-auto md:w-5/6">
          <H1>
            <span className="opacity-80">
              Une question? Une idée?<br></br> Contactez-nous
            </span>
          </H1>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Nous sommes à votre écoute pour répondre à toutes vos questions et
            suggestions.
          </p>
        </div>

        <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg">
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12"
            >
              <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  À propos de vous
                </h2>
                <div className="mt-8 mb-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Votre nom{" "}
                      <span className="text-xl text-red-500 dark:text-red-400">
                        *
                      </span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Courriel{" "}
                      <span className="text-xl text-red-500 dark:text-red-400">
                        *
                      </span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@exemple.com"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Téléphone{" "}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="514-123-4567"
                    />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-gray-600 dark:text-gray-300"
                    >
                      Message
                      <span className="text-xl text-red-500 dark:text-red-400">
                        *
                      </span>
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Votre message"
                    ></Textarea>

                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">
                      Helper
                    </span>
                  </div>
                </div>

                <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">
                  En cliquant sur soumettre ci-dessous, vous acceptez le
                  traitement de vos informations personnelles par Immovia tel
                  que décrit dans la politique de confidentialité.
                </p>

                <Button type="submit" disabled={loading}>
                  <span className="relative text-base font-semibold text-white dark:text-gray-900">
                    {loading ? "Envoi..." : "Soumettre"}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
