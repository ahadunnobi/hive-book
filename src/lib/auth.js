import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

export const auth = betterAuth({
    database: mongodbAdapter(async () => {
        const client = await clientPromise;
        return client.db();
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    secret: process.env.BETTER_AUTH_SECRET,
    // Better Auth will use the base URL from the request in Next.js, 
    // but you can also set BETTER_AUTH_URL in .env if needed.
});
