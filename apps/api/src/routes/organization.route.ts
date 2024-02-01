import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { organizationApi } from "@nexus/schemas";
import {
  createOrganization,
  deleteOrganization,
  getOrganization,
  getOrganizationsByUserId,
  updateOrganization,
} from "../services/organization.service";

export const organizationRouter = zodiosRouter(organizationApi, {
  transform: true,
});

organizationRouter.get(
  "/organizations",
  authMiddleware,
  async (request, response) => {
    try {
      const organizations = await getOrganizationsByUserId(request.user.id);
      response.json(organizations);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

organizationRouter.post(
  "/organizations",
  authMiddleware,
  async (request, response) => {
    try {
      const newOrganization = await createOrganization(request.body);

      response.status(201).json(newOrganization);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

organizationRouter.get(
  "/organizations/:organizationId",
  authMiddleware,
  async (request, response) => {
    try {
      const organization = await getOrganization(request.params.organizationId);

      if (!organization) {
        return response.status(404).json({
          message: "Organization not found",
          code: "ORGANIZATION_NOT_FOUND",
        });
      }

      response.json(organization);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

organizationRouter.delete(
  "/organizations/:organizationId",
  authMiddleware,
  async (request, response) => {
    try {
      await deleteOrganization(request.params.organizationId);
      response.status(204).send();
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

organizationRouter.patch(
  "/organizations/:organizationId",
  async (request, response) => {
    try {
      response.json(await updateOrganization(request.body));
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
