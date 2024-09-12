"use server";
import envConfig from "@/src/config/envConfig";

export const AllRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=3`
  );

  return res.json();
};
