export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.aadarsh.aora",
    projectId: "66c8cc010014c0629788",
    databaseId: "66c8cd6a000c97ac11fe",
    collections: {
        userCollectionsId: "66c8cd8600025466b217",
        videoCollectionsId: "66c8cdab001975082eba",
    },
    storageId: "66c8cffa00165e33284e"
}


import { Database } from "lucide-react-native";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite"

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) {
            throw new Error("Failed to create user");
        }
        const avatarURL = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.collections.userCollectionsId,
            ID.unique(),
            {
                account_id: newAccount.$id,
                email,
                username,
                avatar: avatarURL,
            }
        );

        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to create user");

    }
}


export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        
        
        return session;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to sign in");

    }
}

