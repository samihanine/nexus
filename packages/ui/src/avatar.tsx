import * as React from "react";
import { useState } from "react";

export const Avatar: React.FC<React.ComponentPropsWithoutRef<"img">> = ({
  src,
  ...props
}) => {
  const [showImage, setShowImage] = useState(true);
  const handleImageError = () => {
    setShowImage(false);
  };

  if (src && showImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        src={src}
        alt="avatar"
        onError={handleImageError}
        className={`rounded-full ${props.className}`}
      />
    );
  }

  return (
    <div
      className={`rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${props.className}`}
    />
  );
};
