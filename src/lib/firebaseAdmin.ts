// lib/firebaseAdmin.ts
import * as admin from 'firebase-admin';
import path from 'path';
import { readFileSync } from 'fs';

if (!admin.apps.length) {
  const serviceAccountPath = path.resolve(
    process.cwd(),
    'firebase/serviceAccountKey.json' // adjust if your path differs
  );

  const serviceAccount = JSON.parse(
    readFileSync(serviceAccountPath, 'utf-8')
  );

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'virmemorylane.appspot.com',
  });
}

export default admin;
