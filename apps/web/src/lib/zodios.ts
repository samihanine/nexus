import { Zodios } from "@zodios/core";
import {
  workspaceApi,
  userApi,
  tagApi,
  healthApi,
  organizationApi,
  authApi,
  documentApi,
  workspaceInvitationApi,
  workspaceUserApi,
} from "@nexus/schemas";
import { pluginToken } from "@zodios/plugins";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

const zodios = new Zodios(API_HOST, [
  ...workspaceApi,
  ...userApi,
  ...tagApi,
  ...healthApi,
  ...organizationApi,
  ...authApi,
  ...documentApi,
  ...workspaceInvitationApi,
  ...workspaceUserApi,
]);

zodios.use(
  pluginToken({
    getToken: async () => {
      const token = localStorage.getItem("token");
      return token || "";
    },
  })
);

export default zodios;
