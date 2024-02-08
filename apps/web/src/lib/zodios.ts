import {
  addressApi,
  agencyApi,
  authApi,
  healthApi,
  profileApi,
  propertyApi,
  userApi,
} from "@nexus/schemas";
import { Zodios } from "@zodios/core";
import { pluginToken } from "@zodios/plugins";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

const zodios = new Zodios(API_HOST, [
  ...userApi,
  ...healthApi,
  ...authApi,
  ...addressApi,
  ...profileApi,
  ...propertyApi,
  ...agencyApi
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
