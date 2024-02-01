import { google } from "googleapis";
import { Readable } from "stream";

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL;

export const googleClient = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

export const createGoogleDriveFolder = async ({
  name,
  googleDriveCredentials,
  googleDriveFolderId,
}: {
  name: string;
  googleDriveCredentials: any;
  googleDriveFolderId: string;
}): Promise<string> => {
  googleClient.setCredentials(googleDriveCredentials);

  const drive = google.drive({ version: "v3", auth: googleClient });

  const folder = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [googleDriveFolderId],
    },
  });

  const id = folder.data.id;

  if (!id) {
    throw new Error("Folder not created");
  }

  return id;
};

export const uploadFileToGoogleDrive = async ({
  file,
  driveFolderId,
  googleDriveCredentials,
}: {
  file: Express.Multer.File;
  driveFolderId: string;
  googleDriveCredentials: any;
}): Promise<string> => {
  googleClient.setCredentials(googleDriveCredentials);

  const drive = google.drive({ version: "v3", auth: googleClient });
  const fileMetadata = {
    name: file.originalname,
    parents: [driveFolderId],
  };

  const media = {
    mimeType: "application/octet-stream",
    body: bufferToStream(file.buffer),
  };

  try {
    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });

    const fileId = file.data.id;

    if (!fileId) {
      throw new Error("File upload failed");
    }

    return fileId;
  } catch (error) {
    throw new Error(`Error uploading file: ${(error as Error).message}`);
  }
};

function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export const getGoogleDriveFileBase64 = async ({
  fileId,
  googleDriveCredentials,
}: {
  fileId: string;
  googleDriveCredentials: any;
}): Promise<string> => {
  googleClient.setCredentials(googleDriveCredentials);

  const drive = google.drive({ version: "v3", auth: googleClient });

  try {
    const response = await drive.files.get(
      {
        fileId: fileId,
        alt: "media",
      },
      {
        responseType: "stream",
      }
    );

    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      response.data
        .on("data", (chunk) => chunks.push(chunk))
        .on("end", () => {
          const buffer = Buffer.concat(chunks);
          const base64 = buffer.toString("base64");
          resolve(base64);
        })
        .on("error", reject);
    });
  } catch (error) {
    throw new Error(`Error downloading file: ${(error as Error).message}`);
  }
};

export const updateGoogleDriveFolderName = async ({
  name,
  googleDriveFolderId,
  googleDriveCredentials,
}: {
  name: string;
  googleDriveFolderId: string;
  googleDriveCredentials: any;
}): Promise<void> => {
  googleClient.setCredentials(googleDriveCredentials);

  const drive = google.drive({ version: "v3", auth: googleClient });

  try {
    await drive.files.update({
      fileId: googleDriveFolderId,
      requestBody: {
        name,
      },
    });
  } catch (error) {
    throw new Error(`Error updating folder name: ${(error as Error).message}`);
  }
};
