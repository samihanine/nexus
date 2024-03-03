import { z } from "zod";
import { agencySchema } from "./agency.schema";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const brokerSchema = z.object({
  id: z.string().uuid().nullish(),
  phone: z.string(),
  email: z.string(),
  description: z.string(),
  centrisUrl: z.string(),
  websiteUrl: z.string().nullish(),
  oaciqNumber: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  radius: z.number(),
  agencyId: z.string().uuid().nullish(),
  createdAt: z.string().or(z.date()).nullish(),
  updatedAt: z.string().or(z.date()).nullish(),
  deletedAt: z.string().or(z.date()).nullish(),
  agency: agencySchema.nullish(),
});

export type Broker = z.infer<typeof brokerSchema>;

export const brokerApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/brokers",
    alias: "createBroker",
    description: "Create broker",
    response: brokerSchema,
    status: 201,
    parameters: [
      {
        name: "New Broker",
        type: "Body",
        schema: brokerSchema.omit({
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        }),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    alias: "getBrokerById",
    path: "/brokers/:brokerId",
    description: "Get Broker",
    response: brokerSchema,
    parameters: [
      {
        type: "Path",
        name: "brokerId",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    alias: "getBrokers",
    path: "/brokers",
    description: "Get Brokers",
    response: z.array(brokerSchema),
    parameters: [],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "patch",
    path: "/brokers/:brokerId",
    alias: "updateBroker",
    description: "Update Broker",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "brokerId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "broker",
        schema: brokerSchema.partial(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "delete",
    path: "/brokers/:brokerId",
    description: "Delete Broker",
    status: 204,
    alias: "deleteBroker",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "brokerId",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .build();
