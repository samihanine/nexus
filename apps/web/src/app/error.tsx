"use client"; // Error components must be Client Components

import { useEffect, useState } from "react";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    setMessage(props.error.message);
  }, [props.error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{message?.includes("403") && "auth"}</p>
      <p>{message?.includes("404") && "not found"}</p>
      <p>{!message?.includes("403") && !message?.includes("404") && "500"}</p>
    </div>
  );
}
