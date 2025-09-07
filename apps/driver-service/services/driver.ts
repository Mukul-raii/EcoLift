import { prisma } from '@rider/db'

export async function getUserProfile(userId: string) {
  return await prisma.user.findUnique({
    where: { firebaseUid: userId },
  })
}

export async function updateStatus(
  userId: number,
  status: 'active' | 'inactive',
) {
  return await prisma.driverProfile.update({
    where: { id: userId },
    data: { status },
  })
}
