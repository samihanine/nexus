export const getUserIdWithRequest = (request: Request): string => {
  const userId = (
    request as Request & {
      user: {
        id: string;
      };
    }
  ).user?.id;

  if (!userId) throw new Error("User not found");

  return userId;
};
