import { ADMIN_PASSWORD } from "@/constants";
import {
    APP_USERS,
    CATEGORY_INFO,
    getUserStorageKeys,
    SHARED_KEYS,
    USER_KEY_SUFFIXES,
} from "@/lib/storageKeys";
import type { StorageCategory, UserId } from "@/lib/storageKeys";
import {
    AlertTriangle,
    Check,
    CheckCircle2,
    ChevronDown,
    Eye,
    EyeOff,
    Loader2,
    Lock,
    RotateCcw,
    Shield,
    Trash2,
    X,
} from "lucide-react";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

interface SelectedKeys {
    userKeys: Record<UserId, string[]>;
    sharedKeys: string[];
}

const AdminResetPanel: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Selected users and keys
    const [selectedUsers, setSelectedUsers] = useState<UserId[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<SelectedKeys>({
        userKeys: {
            MATILDA: [],
            LINCOLN: [],
            RYANNE: [],
            DANIEL: [],
            GAVIN: [],
        },
        sharedKeys: [],
    });

    // Expand/collapse categories
    const [expandedCategories, setExpandedCategories] = useState<
        Record<string, boolean>
    >({
        quiz: true,
        progress: true,
        favorites: true,
        settings: false,
        navigation: true,
    });

    // Handle authentication
    const handleAuth = () => {
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            toast.success("Access granted!");
        } else {
            toast.error("Invalid password!");
        }
    };

    // Toggle user selection
    const toggleUser = (userId: UserId) => {
        setSelectedUsers((prev) =>
            prev.includes(userId)
                ? prev.filter((u) => u !== userId)
                : [...prev, userId]
        );
    };

    // Select all users
    const selectAllUsers = () => {
        setSelectedUsers(APP_USERS.map((u) => u.id));
    };

    // Deselect all users
    const deselectAllUsers = () => {
        setSelectedUsers([]);
    };

    // Toggle user-specific key for a user
    const toggleUserKey = (userId: UserId, keySuffix: string) => {
        const fullKey = `${userId}_${keySuffix}`;
        setSelectedKeys((prev) => ({
            ...prev,
            userKeys: {
                ...prev.userKeys,
                [userId]: prev.userKeys[userId].includes(fullKey)
                    ? prev.userKeys[userId].filter((k) => k !== fullKey)
                    : [...prev.userKeys[userId], fullKey],
            },
        }));
    };

    // Toggle shared key
    const toggleSharedKey = (key: string) => {
        setSelectedKeys((prev) => ({
            ...prev,
            sharedKeys: prev.sharedKeys.includes(key)
                ? prev.sharedKeys.filter((k) => k !== key)
                : [...prev.sharedKeys, key],
        }));
    };

    // Select all keys for a category
    const selectAllInCategory = (category: StorageCategory, select: boolean) => {
        const categoryKeys = SHARED_KEYS.filter((k) => k.category === category).map(
            (k) => k.key
        );

        setSelectedKeys((prev) => ({
            ...prev,
            sharedKeys: select
                ? [...new Set([...prev.sharedKeys, ...categoryKeys])]
                : prev.sharedKeys.filter((k) => !categoryKeys.includes(k)),
        }));
    };

    // Select all user keys for selected users
    const selectAllUserKeys = (select: boolean) => {
        if (select) {
            const newUserKeys: Record<UserId, string[]> = {
                MATILDA: [],
                LINCOLN: [],
                RYANNE: [],
                DANIEL: [],
                GAVIN: [],
            };
            selectedUsers.forEach((userId) => {
                newUserKeys[userId] = getUserStorageKeys(userId);
            });
            setSelectedKeys((prev) => ({
                ...prev,
                userKeys: newUserKeys,
            }));
        } else {
            setSelectedKeys((prev) => ({
                ...prev,
                userKeys: {
                    MATILDA: [],
                    LINCOLN: [],
                    RYANNE: [],
                    DANIEL: [],
                    GAVIN: [],
                },
            }));
        }
    };

    // Get all selected keys for preview
    const getAllSelectedKeys = (): string[] => {
        const keys: string[] = [...selectedKeys.sharedKeys];
        Object.values(selectedKeys.userKeys).forEach((userKeys) => {
            keys.push(...userKeys);
        });
        return keys;
    };

    // Delete selected keys
    const deleteSelectedKeys = () => {
        setDeleteLoading(true);
        const keysToDelete = getAllSelectedKeys();

        setTimeout(() => {
            try {
                keysToDelete.forEach((key) => {
                    localStorage.removeItem(key);
                });

                toast.success(`Successfully deleted ${keysToDelete.length} keys!`);
                setShowConfirmModal(false);
                setDeleteLoading(false);

                // Reset selections
                setSelectedKeys({
                    userKeys: {
                        MATILDA: [],
                        LINCOLN: [],
                        RYANNE: [],
                        DANIEL: [],
                        GAVIN: [],
                    },
                    sharedKeys: [],
                });
            } catch (err) {
                console.error(err);
                toast.error("Failed to delete keys");
                setDeleteLoading(false);
            }
        }, 1000);
    };

    // Toggle category expansion
    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    // Get keys by category
    const getKeysByCategory = (category: StorageCategory) => {
        return SHARED_KEYS.filter((k) => k.category === category);
    };

    // Check if all keys in category are selected
    const isCategoryFullySelected = (category: StorageCategory): boolean => {
        const categoryKeys = getKeysByCategory(category).map((k) => k.key);
        return categoryKeys.every((k) => selectedKeys.sharedKeys.includes(k));
    };

    // Get color class for user
    const getUserColorClass = (userId: UserId): string => {
        const user = APP_USERS.find((u) => u.id === userId);
        const colorMap: Record<string, string> = {
            emerald: "bg-emerald-500",
            purple: "bg-purple-500",
            blue: "bg-blue-500",
            orange: "bg-orange-500",
            teal: "bg-teal-500",
        };
        return colorMap[user?.color || "gray"] || "bg-gray-500";
    };

    // Login screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
                <Toaster richColors position="top-center" />

                <div className="w-full max-w-md">
                    <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-500/20">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">
                                Admin Reset Panel
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Enter admin password to access
                            </p>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-4">
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleAuth()}
                                    placeholder="Enter admin password"
                                    className="w-full pl-12 pr-12 py-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white placeholder-gray-500 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            <button
                                onClick={handleAuth}
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                ) : (
                                    "Access Panel"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Main panel
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
            <Toaster richColors position="top-center" />

            {/* Confirm Delete Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="w-full max-w-lg bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-red-600 to-rose-700 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">
                                        Confirm Deletion
                                    </h3>
                                    <p className="text-red-100 text-xs">
                                        This action cannot be undone
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            <p className="text-gray-300">
                                You are about to delete{" "}
                                <span className="font-bold text-red-400">
                                    {getAllSelectedKeys().length} storage keys
                                </span>
                                . This will permanently remove the selected data.
                            </p>

                            {/* Preview of keys to delete */}
                            <div className="bg-gray-900/50 rounded-xl p-4 max-h-48 overflow-y-auto">
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                                    Keys to be deleted:
                                </p>
                                <div className="space-y-1">
                                    {getAllSelectedKeys().map((key) => (
                                        <div
                                            key={key}
                                            className="text-sm text-gray-400 font-mono bg-gray-800 px-2 py-1 rounded"
                                        >
                                            {key}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    disabled={deleteLoading}
                                    className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={deleteSelectedKeys}
                                    disabled={deleteLoading}
                                    className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    {deleteLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Trash2 className="w-4 h-4" />
                                            Delete
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                            <RotateCcw className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                Admin Reset Panel
                            </h1>
                            <p className="text-gray-400">
                                Manage and reset user data selectively
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - User Selection */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* User Selection Card */}
                        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-700/50 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-white">Select Users</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={selectAllUsers}
                                        className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={deselectAllUsers}
                                        className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                                    >
                                        None
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 space-y-2">
                                {APP_USERS.map((user) => (
                                    <button
                                        key={user.id}
                                        onClick={() => toggleUser(user.id)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${selectedUsers.includes(user.id)
                                            ? "bg-gray-700/50 border-gray-600"
                                            : "bg-gray-800/30 border-transparent hover:bg-gray-700/30"
                                            }`}
                                    >
                                        <div
                                            className={`w-3 h-3 rounded-full ${getUserColorClass(
                                                user.id
                                            )}`}
                                        />
                                        <span className="flex-1 text-left text-gray-200 font-medium">
                                            {user.name}
                                        </span>
                                        <div
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedUsers.includes(user.id)
                                                ? "bg-emerald-500 border-emerald-500"
                                                : "border-gray-600"
                                                }`}
                                        >
                                            {selectedUsers.includes(user.id) && (
                                                <Check className="w-3 h-3 text-white" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* User-Specific Keys */}
                        {selectedUsers.length > 0 && (
                            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden">
                                <div className="px-5 py-4 border-b border-gray-700/50 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-white">
                                        User Quiz Data
                                    </h2>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => selectAllUserKeys(true)}
                                            className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                                        >
                                            All
                                        </button>
                                        <button
                                            onClick={() => selectAllUserKeys(false)}
                                            className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
                                        >
                                            None
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 space-y-4">
                                    {selectedUsers.map((userId) => (
                                        <div key={userId} className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={`w-2 h-2 rounded-full ${getUserColorClass(
                                                        userId
                                                    )}`}
                                                />
                                                <span className="text-sm font-medium text-gray-400">
                                                    {APP_USERS.find((u) => u.id === userId)?.name}
                                                </span>
                                            </div>

                                            <div className="pl-4 space-y-1">
                                                {USER_KEY_SUFFIXES.map((suffix) => {
                                                    const fullKey = `${userId}_${suffix}`;
                                                    const isSelected =
                                                        selectedKeys.userKeys[userId].includes(fullKey);

                                                    return (
                                                        <button
                                                            key={fullKey}
                                                            onClick={() => toggleUserKey(userId, suffix)}
                                                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${isSelected
                                                                ? "bg-red-500/20 text-red-300"
                                                                : "bg-gray-800/30 text-gray-400 hover:bg-gray-700/30"
                                                                }`}
                                                        >
                                                            <div
                                                                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected
                                                                    ? "bg-red-500 border-red-500"
                                                                    : "border-gray-600"
                                                                    }`}
                                                            >
                                                                {isSelected && (
                                                                    <Check className="w-3 h-3 text-white" />
                                                                )}
                                                            </div>
                                                            <span className="font-mono text-xs">
                                                                {suffix}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Shared Keys by Category */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-700/50">
                                <h2 className="text-lg font-bold text-white">
                                    Shared Storage Keys
                                </h2>
                                <p className="text-sm text-gray-400">
                                    These keys are shared across all users
                                </p>
                            </div>

                            <div className="p-4 space-y-3">
                                {(
                                    Object.keys(CATEGORY_INFO) as StorageCategory[]
                                ).map((category) => {
                                    const categoryKeys = getKeysByCategory(category);
                                    if (categoryKeys.length === 0) return null;

                                    const info = CATEGORY_INFO[category];
                                    const isExpanded = expandedCategories[category];
                                    const isFullySelected = isCategoryFullySelected(category);

                                    return (
                                        <div
                                            key={category}
                                            className="bg-gray-900/30 rounded-xl border border-gray-700/30 overflow-hidden"
                                        >
                                            {/* Category Header */}
                                            <button
                                                onClick={() => toggleCategory(category)}
                                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800/30 transition-colors"
                                            >
                                                <span className="text-xl">{info.icon}</span>
                                                <span className="flex-1 text-left font-semibold text-gray-200">
                                                    {info.label}
                                                </span>
                                                <span className="text-xs text-gray-500 mr-2">
                                                    {categoryKeys.length} keys
                                                </span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        selectAllInCategory(category, !isFullySelected);
                                                    }}
                                                    className={`text-xs px-2 py-1 rounded transition-colors ${isFullySelected
                                                        ? "bg-red-500/20 text-red-400"
                                                        : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                                                        }`}
                                                >
                                                    {isFullySelected ? "Deselect" : "Select All"}
                                                </button>
                                                <ChevronDown
                                                    className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {/* Category Keys */}
                                            {isExpanded && (
                                                <div className="px-4 pb-4 space-y-2">
                                                    {categoryKeys.map((keyDef) => {
                                                        const isSelected = selectedKeys.sharedKeys.includes(
                                                            keyDef.key
                                                        );

                                                        return (
                                                            <button
                                                                key={keyDef.key}
                                                                onClick={() => toggleSharedKey(keyDef.key)}
                                                                className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all ${isSelected
                                                                    ? "bg-red-500/20 border border-red-500/30"
                                                                    : "bg-gray-800/30 border border-transparent hover:bg-gray-700/30"
                                                                    }`}
                                                            >
                                                                <div
                                                                    className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected
                                                                        ? "bg-red-500 border-red-500"
                                                                        : "border-gray-600"
                                                                        }`}
                                                                >
                                                                    {isSelected && (
                                                                        <Check className="w-3 h-3 text-white" />
                                                                    )}
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="font-medium text-gray-200">
                                                                        {keyDef.label}
                                                                    </div>
                                                                    <div className="text-xs text-gray-500 mt-0.5">
                                                                        {keyDef.description}
                                                                    </div>
                                                                    <code className="text-xs text-gray-600 font-mono mt-1 block truncate">
                                                                        {keyDef.key}
                                                                    </code>
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 p-4">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span className="text-gray-300">
                                    <span className="font-bold text-white">
                                        {getAllSelectedKeys().length}
                                    </span>{" "}
                                    keys selected
                                </span>
                            </div>
                            {selectedUsers.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-400">
                                        {selectedUsers.length} user(s)
                                    </span>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setShowConfirmModal(true)}
                            disabled={getAllSelectedKeys().length === 0}
                            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${getAllSelectedKeys().length > 0
                                ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/20"
                                : "bg-gray-700 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            <Trash2 className="w-5 h-5" />
                            Delete Selected Keys
                        </button>
                    </div>
                </div>

                {/* Spacer for fixed bottom bar */}
                <div className="h-24" />
            </div>
        </div>
    );
};

export default AdminResetPanel;
