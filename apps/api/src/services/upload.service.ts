import axios from "axios";
import { randomUUID } from "crypto";

export const uploadImage = async ({
  file,
  folder,
}: {
  file: Express.Multer.File;
  folder: "PROFILE_PICTURES" | "PROPERTY_IMAGES" | "OTHER";
}) => {
  try {
    const baseUrl = "https://api.bytescale.com";
    const randomId = randomUUID().split("-")[0];

    const folderName = (() => {
      switch (folder) {
        case "PROFILE_PICTURES":
          return "/images/profile-pictures";
        case "PROPERTY_IMAGES":
          return "/images/property-images";
        case "OTHER":
        default:
          return "/images/other";
      }
    })();

    const path = `/v2/accounts/${process.env.UPLOADTHING_APP_ID}/uploads/binary?fileName=${randomId}-${file.originalname}&folderPath=${folderName}`;
    const blob = new Blob([file.buffer], { type: file.mimetype });

    const result = await axios.post(`${baseUrl}${path}`, blob, {
      headers: {
        "Content-Type": file.mimetype,
        Authorization: `Bearer ${process.env.UPLOADTHING_API_KEY}`,
      },
    });

    return {
      fileUrl: result.data.fileUrl,
      filePath: result.data.filePath,
    };
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while uploading the image");
  }
};
