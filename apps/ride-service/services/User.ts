import { prisma } from '@rider/db'

export async function getUserProfile(userId: string) {
  return await prisma.user.findUnique({
    where: { firebaseUid: userId },
  })
}
