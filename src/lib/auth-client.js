import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // baseURL is optional if using the same domain
    // baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});

export const { signIn, signUp, signOut, useSession } = authClient;
