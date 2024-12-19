import UserData from "../plugin/useUserData";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api/";
export const SERVER_URL = import.meta.env.VITE_SERVER_URL || "";
export const CLIENT_URL = import.meta.env.VITE_CLIENT_URL || "";
export const PAYPAL_CLIENT_ID = "test";
export const CURRENCY_SIGN = "$";
export const userId = UserData()?.user_id;
export const teacherId = UserData()?.teacher_id;
console.log(teacherId);
export const formatCategoryForDB = (category) => {
    return category.trim().replace(/\s+/g, '-').toLowerCase();
};

export const formatCategoryForDisplay = (category) => {
    return category ? category.replace(/-/g, ' ') : '';
}; 