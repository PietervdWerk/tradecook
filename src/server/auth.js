import DiscordProvider from "@auth/core/providers/discord";
export const authOptions = {
    providers: [
        // @ts-expect-error Types are wrong
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
};
