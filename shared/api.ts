/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

// Contact API
export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  id?: string;
  timestamp?: string;
  error?: string;
  issues?: unknown;
  stored?: boolean;
  emailSent?: boolean;
  smsSent?: boolean;
}

// Profile API
export interface ProfileResponse {
  name: string;
  title: string;
  email: string;
  skills: string[];
  experience: string;
  available: boolean;
}
