import axios from "axios";

export const uploadImage = async (file: Express.Multer.File) => {
  try {
    const baseUrl = "https://api.bytescale.com";
    const path = `/v2/accounts/${process.env.UPLOADTHING_APP_ID}/uploads/binary?fileName=${file.originalname}&folderPath=/images/profile-pictures`;
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
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while uploading the image");
  }
};
