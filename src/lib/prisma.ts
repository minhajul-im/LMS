import { nodeEnv } from "@/utils/constant";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (nodeEnv !== "production") globalForPrisma.prisma = prisma;
