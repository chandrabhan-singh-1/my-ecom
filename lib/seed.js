import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const categories = ["cement", "concrete", "sand", "bricks", "iron"];

const seed = async () => {
  categories.map(async (category) => {
    await db.category.create({
      data: {
        name: category,
      },
    });
  });

  return console.log("Data seeded!");
};

seed();
