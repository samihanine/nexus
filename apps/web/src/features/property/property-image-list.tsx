import React from "react";
import Image from "next/image";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@nexus/utils";

interface DraggableImageListProps {
  images: string[];
  setImages: (images: string[]) => void;
}

const PropertyImageList: React.FC<DraggableImageListProps> = ({
  images,
  setImages,
}) => {
  const moveImage = (index: number, direction: number) => {
    if (index + direction < 0 || index + direction >= images.length) return;
    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index + direction];
    newImages[index + direction] = temp;
    setImages(newImages);
  };

  return (
    <div className="flex items-center gap-5 flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="border p-4 border-input rounded-lg">
          <img
            src={image}
            alt={`Item ${index}`}
            className="rounded-md h-40 w-auto object-cover"
          />

          <div className="flex justify-between mt-3 gap-2 text-gray-800">
            <button
              onClick={() => moveImage(index, -1)}
              className={cn(index === 0 && "text-gray-300")}
              disabled={index === 0}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <TrashIcon
              onClick={() => {
                const newImages = [...images];
                newImages.splice(index, 1);
                setImages(newImages);
              }}
              className="w-5 h-5 text-red-500 cursor-pointer"
            />
            <button
              onClick={() => moveImage(index, 1)}
              className={cn(index === images.length - 1 && "text-gray-300")}
              disabled={index === images.length - 1}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyImageList;
