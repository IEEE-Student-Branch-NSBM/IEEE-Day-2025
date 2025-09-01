"use server";

import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { User } from "@/types/userSchema";
import { saltAndHashPassword, verifyPassword } from "@/utils/bcrypt";

//user reading and verification function
export async function readUser(
  email: string,
  password: string
): Promise<User | null> {
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    if (!verifyPassword(password, userData.password)) {
      return null;
    }

    return {
      email: userData.email,
      password: userData.password,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

// user creating function
export async function createUser(user: User): Promise<User | null> {
  try {
    const hashedPassword = saltAndHashPassword(user.password);
    const usersRef = collection(db, "users");

    // checks if the user already exists
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error("User already exists");
    }

    const docRef = await addDoc(usersRef, {
      ...user,
      password: hashedPassword,
      created_at: new Date(),
    });

    return {
      id: docRef.id,
      ...user,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}
