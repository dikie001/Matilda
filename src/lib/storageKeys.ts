/**
 * Centralized Storage Keys Configuration
 * 
 * This file contains all localStorage keys used in the app,
 * organized by category for the admin reset panel.
 */

// All users in the system
export const APP_USERS = [
    { id: "MATILDA", name: "Matilda", color: "emerald" },
    { id: "LINCOLN", name: "Abraham Lincoln", color: "purple" },
    { id: "RYANNE", name: "Dikie/Ryanne", color: "blue" },
    { id: "DANIEL", name: "Daniel Otieno", color: "orange" },
    { id: "GAVIN", name: "Ann Judith", color: "teal" },
] as const;

export type UserId = (typeof APP_USERS)[number]["id"];

// Storage key categories
export type StorageCategory =
    | "quiz"
    | "progress"
    | "favorites"
    | "settings"
    | "navigation";

// Storage key definition
export interface StorageKeyDef {
    key: string;
    label: string;
    description: string;
    category: StorageCategory;
    isUserSpecific: boolean; // If true, key pattern includes user ID prefix
}

// User-specific storage keys (pattern: ${USER_ID}_${KEY})
export const USER_SPECIFIC_KEYS: Omit<StorageKeyDef, "key" | "isUserSpecific">[] = [
    {
        label: "Test Results",
        description: "Quiz test results and scores",
        category: "quiz",
    },
    {
        label: "Quiz Progress",
        description: "Current quiz progress (question, score, etc.)",
        category: "quiz",
    },
    {
        label: "Current Test Index",
        description: "Which test number the user is on",
        category: "quiz",
    },
    {
        label: "Firebase Backup",
        description: "Backup of results for Firebase sync",
        category: "quiz",
    },
];

// Key suffixes for user-specific keys
export const USER_KEY_SUFFIXES = [
    "TEST_RESULTS",
    "QUIZ_PROGRESS",
    "CURRENT_TEST_INDEX",
    "FIREBASE_BACKUP",
] as const;

// Shared storage keys (same for all users)
export const SHARED_KEYS: StorageKeyDef[] = [
    // Navigation/Current Page Keys
    {
        key: "brain-teaser-currentPage",
        label: "Quick Challenges Page",
        description: "Current page position in Quick Challenges",
        category: "navigation",
        isUserSpecific: false,
    },
    {
        key: "mini-stories-currentPage",
        label: "Flash Stories Page",
        description: "Current page position in Flash Stories",
        category: "navigation",
        isUserSpecific: false,
    },
    {
        key: "wisdom-nuggets-currentPage",
        label: "Life Gems Page",
        description: "Current page position in Life Gems",
        category: "navigation",
        isUserSpecific: false,
    },
    {
        key: "amazing-facts-currentPage",
        label: "Fun Facts Page",
        description: "Current page position in Fun Facts",
        category: "navigation",
        isUserSpecific: false,
    },
    {
        key: "tongue-twisters-currentPage",
        label: "Clear Speech Page",
        description: "Current page position in Clear Speech",
        category: "navigation",
        isUserSpecific: false,
    },
    {
        key: "Word_Power_current_page",
        label: "Word Power Page",
        description: "Current page position in Word Power",
        category: "navigation",
        isUserSpecific: false,
    },

    // Favorites Keys
    {
        key: "favourite-teasers",
        label: "Favorite Brain Teasers",
        description: "Saved favorite brain teasers",
        category: "favorites",
        isUserSpecific: false,
    },
    {
        key: "favourite-stories",
        label: "Favorite Stories",
        description: "Saved favorite flash stories",
        category: "favorites",
        isUserSpecific: false,
    },
    {
        key: "favorite-quote",
        label: "Favorite Quotes",
        description: "Saved favorite life gems/quotes",
        category: "favorites",
        isUserSpecific: false,
    },
    {
        key: "favourite-facts",
        label: "Favorite Facts",
        description: "Saved favorite fun facts",
        category: "favorites",
        isUserSpecific: false,
    },
    {
        key: "favourite-twisters",
        label: "Favorite Tongue Twisters",
        description: "Saved favorite tongue twisters",
        category: "favorites",
        isUserSpecific: false,
    },
    {
        key: "read-stories",
        label: "Read Stories",
        description: "List of stories that have been read",
        category: "progress",
        isUserSpecific: false,
    },

    // Settings Keys
    {
        key: "user-info",
        label: "User Profile",
        description: "User profile information (name, hobby, subject)",
        category: "settings",
        isUserSpecific: false,
    },
    {
        key: "first-time",
        label: "First Time Flag",
        description: "Whether user has completed onboarding",
        category: "settings",
        isUserSpecific: false,
    },
    {
        key: "soundsEnabled",
        label: "Sound Settings",
        description: "Whether sounds are enabled",
        category: "settings",
        isUserSpecific: false,
    },

    // Matilda-specific legacy keys
    {
        key: "MATILDA_TEST_RESULTS",
        label: "Matilda Test Results (Legacy)",
        description: "Old format test results for Matilda",
        category: "quiz",
        isUserSpecific: false,
    },
    {
        key: "MATILDA_QUIZ_PROGRESS",
        label: "Matilda Quiz Progress (Legacy)",
        description: "Old format quiz progress for Matilda",
        category: "quiz",
        isUserSpecific: false,
    },
    {
        key: "MATILDA_QUIZ_CURRENT_TEST_INDEX",
        label: "Matilda Test Index (Legacy)",
        description: "Old format test index for Matilda",
        category: "quiz",
        isUserSpecific: false,
    },
    {
        key: "firebase_test_results",
        label: "Firebase Test Results",
        description: "Matilda test results for Firebase upload",
        category: "quiz",
        isUserSpecific: false,
    },
];

// Helper function to get all storage keys for a user
export function getUserStorageKeys(userId: UserId): string[] {
    return USER_KEY_SUFFIXES.map((suffix) => `${userId}_${suffix}`);
}

// Helper function to get all shared storage keys
export function getSharedStorageKeys(): string[] {
    return SHARED_KEYS.map((k) => k.key);
}

// Helper function to get all storage keys (for a user + shared)
export function getAllStorageKeys(userId?: UserId): string[] {
    const keys: string[] = [...getSharedStorageKeys()];

    if (userId) {
        keys.push(...getUserStorageKeys(userId));
    } else {
        // Add all user-specific keys
        APP_USERS.forEach((user) => {
            keys.push(...getUserStorageKeys(user.id));
        });
    }

    return keys;
}

// Category labels and icons
export const CATEGORY_INFO: Record<StorageCategory, { label: string; icon: string; color: string }> = {
    quiz: { label: "Quiz Data", icon: "📝", color: "blue" },
    progress: { label: "Progress", icon: "📊", color: "green" },
    favorites: { label: "Favorites", icon: "⭐", color: "yellow" },
    settings: { label: "Settings", icon: "⚙️", color: "gray" },
    navigation: { label: "Navigation", icon: "📍", color: "purple" },
};
