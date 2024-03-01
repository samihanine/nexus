"use client";

import { Button, Strong } from "@nexus/ui";
import React, { useState, useCallback } from "react";

const ImageDropZone = ({
  onUpload,
}: {
  onUpload: (files: FileList) => void;
}) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(true);
    },
    []
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);
    },
    []
  );

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const files = event.dataTransfer.files;
    if (files?.length) {
      onUpload(files);
    }
  }, []);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files?.length) {
        onUpload(files);
      }
    },
    []
  );

  return (
    <div
      className={`flex justify-center items-center flex-col gap-5 w-full py-12 rounded-2xl ${
        dragOver ? "bg-secondary" : "bg-stone-100"
      } rounded-lg cursor-pointer`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        id="file"
        onChange={handleFileSelect}
        multiple
      />
      <svg
        width="72"
        height="66"
        viewBox="0 0 72 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.2963 27.1639C59.2963 29.7784 57.0851 31.8976 54.3573 31.8976C51.6331 31.8976 49.4219 29.7749 49.4219 27.1639C49.4219 24.5493 51.6331 22.4336 54.3573 22.4336C57.0816 22.4336 59.2963 24.5493 59.2963 27.1639Z"
          fill="#D4D4D4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57.6108 11.0808C53.8605 10.5996 49.0701 10.5996 43.0237 10.5996H29.4875C23.4376 10.5996 18.6472 10.5996 14.9005 11.0808C11.0441 11.5796 7.91652 12.6269 5.4541 14.9867C2.99168 17.35 1.89845 20.3432 1.37837 24.0439C0.875976 27.6314 0.875977 32.2236 0.875977 38.0224V38.3762C0.875977 44.1749 0.875976 48.7672 1.37837 52.3617C1.89845 56.0589 2.99168 59.052 5.4541 61.4118C7.91652 63.7752 11.0441 64.8224 14.9005 65.3178C18.6507 65.806 23.4411 65.806 29.4875 65.806H43.0237C49.0737 65.806 53.8641 65.806 57.6108 65.3213C61.4671 64.826 64.5947 63.7787 67.0571 61.4154C69.5195 59.0556 70.6128 56.0624 71.1329 52.3653C71.6352 48.7707 71.6352 44.1784 71.6352 38.3797V38.0259C71.6352 32.2236 71.6352 27.6349 71.1329 24.0403C70.6128 20.3432 69.5195 17.35 67.0571 14.9867C64.5947 12.6269 61.4671 11.5796 57.6108 11.0808ZM15.5585 15.7721C12.247 16.1967 10.34 16.9998 8.94253 18.3336C7.55211 19.6709 6.71715 21.4965 6.27137 24.6701C5.91757 27.2174 5.8362 30.4016 5.81851 34.5622L7.48135 33.1647C11.4616 29.8284 17.4549 30.0195 21.191 33.5999L35.3074 47.1326C36.0071 47.7923 36.9099 48.195 37.8682 48.2747C38.8266 48.3544 39.7835 48.1064 40.5825 47.5713L41.5661 46.9097C43.8733 45.3668 46.6208 44.6184 49.3917 44.778C52.1627 44.9377 54.8061 45.9966 56.9209 47.7942L65.4367 55.1461C65.7834 54.2121 66.0488 53.0941 66.2399 51.732C66.6927 48.4912 66.6998 44.2173 66.6998 38.2028C66.6998 32.1883 66.6927 27.9144 66.2399 24.6701C65.7941 21.4965 64.9591 19.6709 63.5652 18.3371C62.1747 16.9998 60.2642 16.2002 56.9527 15.7721C53.5704 15.3369 49.1126 15.3299 42.8362 15.3299H29.675C23.3987 15.3299 18.9408 15.3369 15.5585 15.7721Z"
          fill="#D4D4D4"
        />
        <path
          d="M54.2497 0.744644C51.2071 0.355468 47.3365 0.355469 42.5072 0.355469H31.5749C26.7491 0.355469 22.875 0.355468 19.8324 0.744644C16.6836 1.15151 14.0584 2.01124 11.9746 3.99957C10.8245 5.10348 9.94749 6.46019 9.41309 7.96209C11.1962 7.14836 13.2129 6.6672 15.4772 6.37001C19.3123 5.87469 24.2159 5.87469 30.4074 5.87469H44.255C50.4464 5.87469 55.3465 5.87469 59.1852 6.37001C61.1594 6.62828 62.9496 7.02807 64.5593 7.6649C64.0205 6.28013 63.1848 5.03023 62.1111 4.00311C60.0272 2.01124 57.402 1.15151 54.2497 0.748183V0.744644Z"
          fill="#D4D4D4"
        />
      </svg>

      <Strong>Glissez-déposez des fichiers ici</Strong>
      <Button
        className="!w-fit"
        variant={"secondary"}
        onClick={() => {
          document.getElementById("file")?.click();
        }}
      >
        Ajouter des images
      </Button>
    </div>
  );
};

export default ImageDropZone;
