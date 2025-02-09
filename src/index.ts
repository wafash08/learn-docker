import { Elysia } from "elysia";
import { prisma } from "./utils/prisma";

const app = new Elysia()
    .get("/", async () => {
        return await prisma.note.findMany();
    })
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
