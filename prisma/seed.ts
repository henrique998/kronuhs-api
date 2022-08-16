import { prisma } from '../src/config/prisma'
import { hash } from "bcryptjs";


async function seed() {
  const role = await prisma.role.create({
    data: {
      name: "admin"
    }
  });

  const passwordHash = await hash("123456", 8)

  await prisma.dashboardUser.create({
    data: {
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhondoe@email.com",
      password: passwordHash,
      roles: {
        connect: {
          id: role.id
        }
      }
    }
  })
}

seed()