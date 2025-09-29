import * as z from "zod";

export const UserSchema = z
  .object({
    id: z.uuid().optional(),
    full_name: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name must be less than 50 characters")
      .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirm_password: z.string().min(1, "Please confirm your password"),
    phone_number: z
      .string()
      .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number")
      .min(10, "Phone number must be at least 10 digits")
      .optional()
      .or(z.literal("")),
    food_preference: z.enum(["Vegetarian", "Non-vegetarian"]),
    gender: z.enum(["Male", "Female"]),
    nic: z
      .string()
      .regex(
        /^[0-9]{9}[vVxX]$|^[0-9]{12}$/,
        "Please enter a valid NIC number (9 digits + V/X or 12 digits)"
      )
      .or(z.literal("")),
    university_name: z
      .string()
      .min(2, "University name must be at least 2 characters")
      .max(100, "University name must be less than 100 characters")
      .or(z.literal("")),
    other_university: z
      .string()
      .max(100, "University name must be less than 100 characters")
      .optional()
      .or(z.literal("")),
    ieee_membership_id: z
      .string()
      .regex(/^[0-9]{8,10}$/, "IEEE Membership ID must be 8-10 digits")
      .optional()
      .or(z.literal("")),
    preferred_track_session_1: z.enum([
      "Quantum Computing",
      "Data Science & Analytics with AI",
      "AI & Robotics in Industry 4.0",
      "AI in Cybersecurity",
      "AI in Cloud Computing",
    ]),
    preferred_track_session_2: z.enum([
      "Quantum Computing",
      "Data Science & Analytics with AI",
      "AI & Robotics in Industry 4.0",
      "AI in Cybersecurity",
      "AI in Cloud Computing",
    ]),
    preferred_track_session_3: z.enum([
      "Quantum Computing",
      "Data Science & Analytics with AI",
      "AI & Robotics in Industry 4.0",
      "AI in Cybersecurity",
      "AI in Cloud Computing",
    ]),
    github_profile: z
      .string()
      .url("Please enter a valid GitHub URL")
      .regex(
        /^https:\/\/github\.com\//,
        "GitHub URL must start with https://github.com/"
      )
      .optional()
      .or(z.literal("")),
    linkedin_profile: z
      .string()
      .url("Please enter a valid LinkedIn URL")
      .regex(
        /^https:\/\/(www\.)?linkedin\.com\//,
        "LinkedIn URL must start with https://linkedin.com/"
      )
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  })
  .refine((data) => {
    if (data.university_name === "Other") {
      return data.other_university && data.other_university.trim().length >= 2;
    }
    return true;
  }, {
    message: "Please enter your university name",
    path: ["other_university"],
  });

export type User = z.infer<typeof UserSchema>;
