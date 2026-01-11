import { db } from "@/lib/firebase";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";

export async function reserveUsernameAndCreateProfile(params: {
  uid: string;
  username: string;
  displayName: string;
}) {
  const username = params.username.trim().toLowerCase();

  if (!/^[a-z0-9_]{3,20}$/.test(username)) {
    throw new Error("Username inválido (3-20: a-z, 0-9, _).");
  }

  const usernameRef = doc(db, "usernames", username);
  const profileRef = doc(db, "profiles", username);
  const userRef = doc(db, "users", params.uid);

  await runTransaction(db, async (tx) => {
    const taken = await tx.get(usernameRef);
    if (taken.exists()) throw new Error("Ese username ya está ocupado.");

    tx.set(usernameRef, { uid: params.uid, createdAt: serverTimestamp() });

    tx.set(profileRef, {
      ownerUid: params.uid,
      username,
      displayName: params.displayName || username,
      bio: "",
      photoURL: "",
      published: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    tx.set(userRef, {
      uid: params.uid,
      username,
      createdAt: serverTimestamp(),
    });
  });

  return username;
}
