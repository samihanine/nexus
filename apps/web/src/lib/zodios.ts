import {
  addressApi,
  agencyApi,
  authApi,
  globalApi,
  profileApi,
  propertyApi,
  uploadApi,
  profileUserApi,
  userApi,
  buyerApi,
  brokerApi,
  sellerApi,
} from "@nexus/schemas";
import { Zodios } from "@zodios/core";
import { pluginToken } from "@zodios/plugins";

const API_HOST = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const zodios = new Zodios(API_HOST, [
  ...userApi,
  ...globalApi,
  ...authApi,
  ...addressApi,
  ...profileApi,
  ...propertyApi,
  ...agencyApi,
  ...uploadApi,
  ...profileUserApi,
  ...buyerApi,
  ...brokerApi,
  ...sellerApi,
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
