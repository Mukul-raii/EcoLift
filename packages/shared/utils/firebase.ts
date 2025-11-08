// backend/src/utils/firebase.ts
import admin, { ServiceAccount } from 'firebase-admin'
import * as serviceAccount from '../config/service.json'

const serviceAccountCred = {
  ...serviceAccount,
  private_key: serviceAccount.private_key.replace(/\\n/g, '\n'),
} as ServiceAccount

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountCred),
  })
  2
}

export const auth = admin.auth() // ✅ this is the correct auth instance
