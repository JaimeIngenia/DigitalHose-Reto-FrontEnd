// src/services/auth.ts

import { httpPost } from "./common/http";

interface PostLoginBody {
  email: string;
  password: string;
}

interface PostLoginResponse {
  token: string;
  error?: string;
}

export async function postLogin(
  body: PostLoginBody
): Promise<PostLoginResponse> {
  try {
    const response = await httpPost<PostLoginResponse>(
      "https://digitalmoney.digitalhouse.com/login",
      body
    );
    return response;
  } catch (error) {
    console.error("Error during login request:", error);
    throw new Error("Failed to login. Please try again later.");
  }
}
