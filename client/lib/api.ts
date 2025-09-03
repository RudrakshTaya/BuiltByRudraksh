// Utility to build API URLs using optional Vite env var
// Set VITE_API_BASE_URL to your backend origin when frontend and backend are deployed separately.
// Example: VITE_API_BASE_URL=https://api.example.com

const stripTrailingSlash = (s: string) => s.replace(/\/+$/, "");

export const API_BASE_URL = (() => {
  const base = import.meta.env?.VITE_API_BASE_URL as string | undefined;
  if (!base) return ""; // default same-origin
  try {
    // Normalize and ensure no trailing slash
    return stripTrailingSlash(base);
  } catch {
    return "";
  }
})();

export const apiUrl = (path: string) => {
  if (!path.startsWith("/")) {
    return `${API_BASE_URL}/${path}`;
  }
  return `${API_BASE_URL}${path}`;
};
