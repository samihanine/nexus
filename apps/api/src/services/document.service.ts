import {
  getGoogleDriveFileBase64,
  uploadFileToGoogleDrive,
} from "../lib/google";
import prisma from "../lib/prisma";

export const getDocumentsByWorkspaceId = async (workspaceId: string) => {
  return await prisma.document.findMany({
    where: {
      workspaceId,
      deletedAt: null,
    },
    include: {
      documentTags: {
        include: {
          tag: true,
        },
      },
      user: true,
    },
  });
};

export const createDocument = async (document: any) => {
  return await prisma.document.create({
    data: document,
  });
};

export const uploadDocuments = async ({
  files,
  title,
  description,
  month,
  year,
  userId,
  workspaceId,
}: {
  files: Express.Multer.File[];
  title: string;
  description: string;
  month: string;
  year: string;
  userId: string;
  workspaceId: string;
}) => {
  const documents = [];

  const workspace = await prisma.workspace.findFirstOrThrow({
    where: {
      id: workspaceId,
    },
  });

  const organization = await prisma.organization.findFirstOrThrow({
    where: {
      id: workspace.organizationId,
    },
  });

  for (const file of files) {
    const fileUrl = "";
    const googleDriveFolderId = await uploadFileToGoogleDrive({
      file,
      driveFolderId: workspace.googleDriveFolderId,
      googleDriveCredentials: organization.googleDriveCredentials,
    });

    const document = await prisma.document.create({
      data: {
        title,
        description,
        month,
        year,
        fileUrl,
        name: file.originalname,
        workspaceId,
        userId,
        mimeType: file.mimetype,
        googleDriveFolderId,
      },
    });

    documents.push(document);
  }

  return documents;
};

export const getDocument = async (documentId: string) => {
  return await prisma.document.findFirst({
    where: {
      id: documentId,
      deletedAt: null,
    },
  });
};

export const getDocumentBase64 = async (documentId: string) => {
  const document = await prisma.document.findFirst({
    where: {
      id: documentId,
      deletedAt: null,
    },
    include: {
      workspace: {
        include: {
          organization: true,
        },
      },
    },
  });

  if (!document) {
    throw new Error("Document not found");
  }

  return await getGoogleDriveFileBase64({
    fileId: document.googleDriveFolderId,
    googleDriveCredentials:
      document.workspace.organization.googleDriveCredentials,
  });
};

export const deleteDocument = async (documentId: string) => {
  return await prisma.document.update({
    where: {
      id: documentId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};

export const addTagToDocument = async ({
  documentId,
  tagId,
}: {
  documentId: string;
  tagId: string;
}) => {
  await prisma.documentTag.create({
    data: {
      documentId,
      tagId,
    },
  });

  return await prisma.document.findFirstOrThrow({
    where: {
      id: documentId,
      deletedAt: null,
    },
    include: {
      documentTags: {
        include: {
          tag: true,
        },
      },
      user: true,
    },
  });
};

export const removeTagToDocument = async ({
  documentId,
  tagId,
}: {
  documentId: string;
  tagId: string;
}) => {
  const documentTag = await prisma.documentTag.findFirst({
    where: {
      documentId,
      tagId,
    },
  });

  if (!documentTag) {
    throw new Error("Document tag not found");
  }

  await prisma.documentTag.delete({
    where: {
      id: documentTag?.id,
    },
  });

  return await prisma.document.findFirstOrThrow({
    where: {
      id: documentId,
      deletedAt: null,
    },
    include: {
      documentTags: {
        include: {
          tag: true,
        },
      },
      user: true,
    },
  });
};
