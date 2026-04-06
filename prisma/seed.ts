import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Wellington Barbosa",
        email: "wbarbosa@mail.com"
      },
      {
        name: "Mayk Brito",
        email: "mbrito@mail.com"
      }
    ]
  })
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
})