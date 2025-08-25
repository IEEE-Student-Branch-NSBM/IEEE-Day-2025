import * as z from "zod";

export const UserSchema = z.object({
  id: z.uuid().optional(),
  full_name: z.string().optional(),
  email: z.email(),
  password: z.string(),
  phone_number: z.string().optional(),
  food_preference: z.enum(["Vegetarian", "Non-vegetarian"]).optional(),
  gender: z.enum(["Male", "Female", "Prefer not to say"]).optional(),
  nic: z.string().optional(),
  university_name: z.string().optional(),
  ieee_membership_id: z.string().optional(),
  prefered_track_based_session: z
    .enum(["Ometh", "Akash", "Yasiru", "Kumuditha", "Dasun"])
    .optional(),
  github_profile: z.url().optional(),
  linkedin_profile: z.url().optional(),
});

export type User = z.infer<typeof UserSchema>;
