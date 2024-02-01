"use client";

import Card from "@/components/card";
import { TrashIcon } from "@heroicons/react/24/outline";

type UploadFileProps = React.ComponentProps<"input"> & {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function UploadFile(props: UploadFileProps) {
  return (
    <div className={"flex w-full flex-col gap-4 " + props.className}>
      <label
        htmlFor="dropzone-file"
        className="flex h-28 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary hover:bg-muted"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="mb-4 h-8 w-8 text-muted-foreground"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-muted-foreground">
            {props.placeholder}
          </p>
          <p className="text-xs text-muted-foreground">
            Téléverser des fichiers
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          multiple
          onChange={(e) =>
            props.setFiles([
              ...props.files,
              ...Array.from(e.target.files as FileList),
            ])
          }
          {...props}
          className="hidden"
        />
      </label>

      <div className="flex flex-col gap-4 w-full">
        {props.files.map((file, index) => (
          <Card
            key={file.name}
            className="flex items-center justify-between p-3"
          >
            <div className="flex w-full items-center justify-between">
              <h2 className="text-sm font-medium flex items-center gap-2">
                <span className="bg-foreground w-6 items-center justify-center flex aspect-square text-background rounded-full">
                  {index + 1}
                </span>{" "}
                {file.name}
              </h2>

              <TrashIcon
                className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-red-500"
                onClick={() => {
                  const newFiles = [...props.files];
                  newFiles.splice(index, 1);
                  props.setFiles(newFiles);
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
