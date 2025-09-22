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
      id: userDoc.id,
      full_name: userData.full_name,
      email: userData.email,
      password: userData.password,
      confirm_password: "", // Not stored in database
      phone_number: userData.phone_number,
      food_preference: userData.food_preference,
      gender: userData.gender,
      nic: userData.nic,
      university_name: userData.university_name,
      ieee_membership_id: userData.ieee_membership_id,
      preferred_track_session_1: userData.preferred_track_session_1,
      preferred_track_session_2: userData.preferred_track_session_2,
      preferred_track_session_3: userData.preferred_track_session_3,
      github_profile: userData.github_profile,
      linkedin_profile: userData.linkedin_profile,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

// user creating function
export async function createUser(user: User): Promise<User> {
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
      full_name: user.full_name,
      email: user.email,
      password: hashedPassword,
      phone_number: user.phone_number,
      food_preference: user.food_preference,
      gender: user.gender,
      nic: user.nic,
      university_name: user.university_name,
      ieee_membership_id: user.ieee_membership_id,
      preferred_track_session_1: user.preferred_track_session_1,
      preferred_track_session_2: user.preferred_track_session_2,
      preferred_track_session_3: user.preferred_track_session_3,
      github_profile: user.github_profile,
      linkedin_profile: user.linkedin_profile,
      created_at: new Date(),
    });

    return {
      id: docRef.id,
      ...user,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
