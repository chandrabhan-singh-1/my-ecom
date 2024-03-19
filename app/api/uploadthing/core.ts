import { createUploadthing, type FileRouter } from "uploadthing/next";

import { db } from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      return { status: "uoloaded!" };
    })
    .onUploadComplete(() => {}),
  storeImage: f(["image", "pdf"])
    .middleware(async () => {
      return { status: "uoloaded!" };
    })
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
