import { CMSClient } from "./client";
import { MockCMSClient } from "./mock-client";
import { StrapiClient } from "./strapi-client";

const useMock = process.env.USE_MOCK_CMS === "true" || !process.env.STRAPI_API_TOKEN;

export const cms: CMSClient = useMock ? new MockCMSClient() : new StrapiClient();
